/**
 * Minimal HTML sanitizer — strips dangerous tags/attributes before any
 * user-controlled string is written to the DOM via innerHTML.
 * Used everywhere instead of raw innerHTML assignment with untrusted data.
 */

const ALLOWED_TAGS = new Set([
  'b','i','em','strong','u','s','br','p','span','div','ul','ol','li',
  'h1','h2','h3','h4','h5','h6','a','pre','code','blockquote','hr',
  'table','thead','tbody','tr','th','td','section','article','aside',
  'header','footer','nav','main','figure','figcaption','details','summary',
  'mark','small','sub','sup','dl','dt','dd','abbr','cite','q','time',
]);

const ALLOWED_ATTRS = new Set([
  'href','title','alt','src','class','id','type','name','value',
  'placeholder','rows','cols','disabled','checked','selected',
  'data-lesson','data-skill','data-answer','data-filter','data-remove-skill',
  'aria-label','aria-expanded','aria-live','role','tabindex',
  'target','rel','width','height','style',
]);

/**
 * Sanitize an HTML string — returns a safe string.
 * @param {string} dirty
 * @returns {string}
 */
export function sanitizeHTML(dirty) {
  if (!dirty) return '';
  const template = document.createElement('template');
  template.innerHTML = dirty;
  sanitizeNode(template.content);
  const div = document.createElement('div');
  div.appendChild(template.content.cloneNode(true));
  return div.innerHTML;
}

function sanitizeNode(node) {
  const children = Array.from(node.childNodes);
  for (const child of children) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = child.tagName.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) {
        // Replace disallowed element with its text content
        const text = document.createTextNode(child.textContent);
        node.replaceChild(text, child);
        continue;
      }
      // Strip disallowed attributes
      const attrs = Array.from(child.attributes);
      for (const attr of attrs) {
        const name = attr.name.toLowerCase();
        if (!ALLOWED_ATTRS.has(name)) {
          child.removeAttribute(attr.name);
          continue;
        }
        // Block javascript: URLs
        if ((name === 'href' || name === 'src') && /^\s*javascript:/i.test(attr.value)) {
          child.removeAttribute(attr.name);
        }
        // Force external links to be safe
        if (name === 'target' && attr.value === '_blank') {
          child.setAttribute('rel', 'noopener noreferrer');
        }
      }
      sanitizeNode(child);
    }
  }
}

/**
 * Escape a plain string for safe insertion as text content.
 * Use this when you only need to display text, not HTML.
 * @param {string} str
 * @returns {string}
 */
export function escapeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
