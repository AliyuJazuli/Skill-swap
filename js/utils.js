// Local storage keys (defined locally to avoid module dependency)
const STORAGE_KEYS = {
  USER: "skillswap_user",
  PROGRESS: "skillswap_progress",
  TIME: "skillswap_time",
  SAVED: "skillswap_saved",
  RECENT: "skillswap_recent",
  BOOKMARKS: "skillswap_bookmarks",
  PROFILE: "skillswap_profile"
};

// Safe localStorage wrappers
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (e) {
    console.warn(`Failed to read ${key} from localStorage`, e);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn(`Failed to write ${key} to localStorage`, e);
    return false;
  }
}

// Time spent helper - increments time for a specific skill
function addTimeSpent(skillId, seconds) {
  if (typeof seconds !== "number" || seconds < 0 || !skillId) {
    return;
  }
  const all = readStorage(STORAGE_KEYS.TIME, {});
  const prev = typeof all[skillId] === "number" ? all[skillId] : 0;
  all[skillId] = prev + seconds;
  writeStorage(STORAGE_KEYS.TIME, all);
}

// Get total time spent across all skills (returns minutes)
function getTotalTimeSpentMinutes() {
  const all = readStorage(STORAGE_KEYS.TIME, {});
  let totalSeconds = 0;
  for (const key in all) {
    if (typeof all[key] === "number") totalSeconds += all[key];
  }
  return Math.floor(totalSeconds / 60);
}

// Get time spent on a specific skill (returns minutes)
function getSkillTimeMinutes(skillId) {
  const all = readStorage(STORAGE_KEYS.TIME, {});
  const seconds = typeof all[skillId] === "number" ? all[skillId] : 0;
  return Math.floor(seconds / 60);
}

// --- Skill progress tracking ---
function getSkillProgressMap() {
  return readStorage(STORAGE_KEYS.PROGRESS, {});
}

function saveSkillProgress(skillId, progress) {
  const all = getSkillProgressMap();
  all[skillId] = progress;
  writeStorage(STORAGE_KEYS.PROGRESS, all);
}

function getSkillProgress(skillId) {
  const all = getSkillProgressMap();
  return all[skillId] || {
    completedLessons: [],
    activeLesson: null,
    startedAt: null,
    completedAt: null
  };
}

// --- Bookmarks ---
function toggleLessonBookmark(skillId, lessonId) {
  const all = readStorage(STORAGE_KEYS.BOOKMARKS, {});
  const list = Array.isArray(all[skillId]) ? all[skillId] : [];
  const idx = list.indexOf(lessonId);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(lessonId);
  }
  all[skillId] = list;
  writeStorage(STORAGE_KEYS.BOOKMARKS, all);
  return list.includes(lessonId);
}

function isLessonBookmarked(skillId, lessonId) {
  const all = readStorage(STORAGE_KEYS.BOOKMARKS, {});
  return Array.isArray(all[skillId]) && all[skillId].includes(lessonId);
}

// --- Recently viewed ---
function getRecentlyViewed() {
  return readStorage(STORAGE_KEYS.RECENT, []);
}

function saveRecentlyViewed(list) {
  writeStorage(STORAGE_KEYS.RECENT, list);
}

function addRecentlyViewed(skillId) {
  if (!skillId) return;
  const list = getRecentlyViewed().filter((id) => id !== skillId);
  list.unshift(skillId);
  if (list.length > 10) list.length = 10;
  saveRecentlyViewed(list);
}

// --- Saved skills ---
function getSavedLessons() {
  return readStorage(STORAGE_KEYS.SAVED, []);
}

function saveSavedLessons(list) {
  writeStorage(STORAGE_KEYS.SAVED, list);
}

function isSkillSaved(skillId) {
  return getSavedLessons().includes(skillId);
}

function toggleSkillSaved(skillId) {
  const list = getSavedLessons();
  const idx = list.indexOf(skillId);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(skillId);
  }
  saveSavedLessons(list);
  return list.includes(skillId);
}

// --- Auth state helpers ---
function getCurrentUser() {
  return readStorage(STORAGE_KEYS.USER, null);
}

function isLoggedIn() {
  return !!getCurrentUser();
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.USER);
}

// Expose to window so other scripts can use these
window.SkillswapUtils = {
  STORAGE_KEYS,
  readStorage,
  writeStorage,
  addTimeSpent,
  getTotalTimeSpentMinutes,
  getSkillTimeMinutes,
  getSkillProgressMap,
  saveSkillProgress,
  getSkillProgress,
  toggleLessonBookmark,
  isLessonBookmarked,
  getRecentlyViewed,
  saveRecentlyViewed,
  addRecentlyViewed,
  getSavedLessons,
  saveSavedLessons,
  isSkillSaved,
  toggleSkillSaved,
  getCurrentUser,
  isLoggedIn,
  logout
};