const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
let lessonViewStart = null;
const STORAGE_KEYS = {
  theme: "skillswap-theme",
  users: "skillswap-users",
  currentUser: "skillswap-current-user",
  savedSkills: "skillswap-saved-skills",
  progress: "skillswap-progress",
  recentSkills: "skillswap-recent-skills",
  savedLessons: "skillswap-saved-lessons",
  timeSpent: "skillswap-time-spent",
  swapRequests: "skillswap-swap-requests",
  communities: "skillswap-communities",
  discussions: "skillswap-discussions",
};

const skillCatalog = [
  {
    id: "html-css",
    title: "HTML & CSS",
    description: "Build reliable, modern web layouts and ship polished pages that work across devices.",
    category: "Development",
    level: "Beginner",
    time: "4 weeks",
    intro: "Learn the foundations of the web through a complete course that starts with semantic HTML, moves into CSS styling, and finishes with a responsive project you can publish.",
    roadmap: [
      "Week 1: Understand HTML structure, elements, and page semantics.",
      "Week 2: Style pages using CSS selectors, colors, typography, and spacing.",
      "Week 3: Build responsive layouts with flexbox, grid, and media queries.",
      "Week 4: Finish a polished landing page and refine it with accessibility and best practices."
    ],
    outcome: "Create a responsive portfolio landing page for a real client project.",
    objectives: ["Build semantic page layouts", "Create polished styling", "Make pages responsive"],
    modules: ["Introduction to HTML", "HTML Syntax", "Headings and Paragraphs", "Lists and Links", "Images and Media", "Introduction to CSS", "Colors and Backgrounds", "Typography", "The Box Model", "Flexbox", "CSS Grid", "Responsive Design", "Mini Project", "Final Project"],
    lessons: ["Introduction to HTML", "HTML Syntax", "Headings and Paragraphs", "Lists and Links", "Images and Media", "Introduction to CSS", "Colors and Backgrounds", "Typography", "The Box Model", "Flexbox", "CSS Grid", "Responsive Design", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Introduction to HTML", description: "Understand how semantic tags create structure, readability, and accessibility for the web." },
        { title: "HTML Syntax", description: "Practice tags, attributes, nesting, and document structure with clear examples." },
        { title: "Headings and Paragraphs", description: "Learn how to organize page content into a strong reading experience." },
        { title: "Lists and Links", description: "Create navigation and content lists that feel clear and user-friendly." },
        { title: "Images and Media", description: "Add visuals and media in a way that supports your message and layout." }
      ],
      intermediate: [
        { title: "Introduction to CSS", description: "Add style with selectors, declarations, and a consistent design system." },
        { title: "Colors and Backgrounds", description: "Use color and background choices to build mood, contrast, and polish." },
        { title: "Typography", description: "Improve readability with well-chosen fonts, spacing, and hierarchy." },
        { title: "The Box Model", description: "Control spacing, borders, and layout behavior with confidence." },
        { title: "Flexbox and Grid", description: "Arrange content into modern layouts that adapt across screen sizes." }
      ],
      advanced: [
        { title: "Responsive Design", description: "Ensure your page offers a smooth experience on mobile, tablet, and desktop." },
        { title: "Forms and Inputs", description: "Build accessible forms that look polished and work reliably." },
        { title: "Semantic HTML", description: "Use meaningful markup that helps browsers, search engines, and assistive tools." },
        { title: "Mini Project", description: "Create a landing page with a hero, benefits section, and clear calls to action." },
        { title: "Final Project", description: "Ship a complete portfolio-style webpage using the full course roadmap." }
      ]
    },
    lessonDetails: [
      {
        title: "Introduction to HTML",
        description: "Understand how semantic tags create structure, readability, and accessibility for the web.",
        introduction: "This lesson introduces what HTML is and how it forms the skeleton of every webpage.",
        why: "HTML is the language browsers use to display content. Learning it lets you create meaningful, accessible web pages.",
        simpleExplanation: "HTML uses tags like <html>, <head>, and <body> to organize content; tags wrap content to give it meaning.",
        analogy: "Think of HTML as the frame of a house — it gives the rooms and walls where furniture (content) will go.",
        visual: "A simple page structure: \n<!doctype html>\n<html>\n  <head>...</head>\n  <body>...</body>\n</html>",
        explanation: "HTML stands for HyperText Markup Language. Elements are written with angled brackets like <tag>content</tag>. Attributes add extra information to elements, e.g., <img src=\"image.jpg\" alt=\"...\">.",
        examples: "Example: <h1>Welcome</h1> creates a top-level heading. <p>This is a paragraph.</p> creates body text.",
        interactive: "Try creating a small HTML file with a heading, a paragraph, and an image. Use the live preview to see changes instantly.",
        commonMistakes: ["Forgetting to close tags", "Using <div> for everything instead of semantic elements", "Missing alt on images"],
        memoryAid: "Remember: Tags wrap content — start tag, content, end tag. Headings use h1..h6.",
        exercises: [
          "Create a new HTML file and add a title and one paragraph.",
          "Add an image with an appropriate alt attribute.",
          "Create a list of three favorite websites using <ul> and <li>.",
        ],
        quiz: {
          q: "What does HTML primarily define on a webpage?",
          options: ["Styling and colors", "Structure and content", "Server-side routes", "Database schema"],
          answer: 1
        },
        miniProject: "Build a single-file simple info page about yourself: a heading, a profile paragraph, and a small list of interests.",
        summary: "HTML provides the structure of a webpage through elements and attributes. Semantic tags improve accessibility.",
        revision: "Key tags: html, head, body, h1-h6, p, a, img, ul/ol/li. Always include alt for images.",
        nextLesson: "HTML Syntax"
      },
      {
        title: "HTML Syntax",
        description: "Practice tags, attributes, nesting, and document structure with clear examples.",
        introduction: "Learn the precise syntax rules that make HTML valid and reliable across browsers.",
        why: "Correct syntax ensures browsers render your content consistently and helps screen readers and search engines.",
        simpleExplanation: "Elements use a start tag (<tag>), content, and an end tag (</tag>); some elements are self-closing like <img>.",
        analogy: "Think of tags as containers — some hold content, others are single objects like images.",
        visual: "<div>\n  <p>Paragraph inside a div</p>\n</div>",
        explanation: "Nesting must be correct: open a tag, add content, and close in reverse order. Attributes are key-value pairs inside the start tag.",
        examples: "<a href=\"https://example.com\">Link</a> sets an href attribute. <img src=\"x.jpg\" alt=\"...\"> shows an image.",
        interactive: "Edit an example page to add links and images; test broken markup to see rendering differences and fix them.",
        commonMistakes: ["Incorrectly nested tags", "Unescaped characters in text (< & >)", "Missing quotes around attribute values in some situations"],
        memoryAid: "Keep nesting tidy: close what you open in reverse order (like stacking plates).",
        exercises: [
          "Fix a broken HTML snippet with mismatched tags.",
          "Add two links that open in a new tab using target='_blank'.",
          "Create an image gallery using three <img> tags inside a <div>."
        ],
        quiz: {
          q: "Which is a self-closing element?",
          options: ["<p>", "<img>", "<div>", "<section>"],
          answer: 1
        },
        miniProject: "Create a small profile card using proper nesting: an image, a heading, and a short bio.",
        summary: "HTML syntax relies on correct tag structure, attributes, and proper nesting to build reliable pages.",
        revision: "Always validate nesting and use semantic elements when possible.",
        nextLesson: "Headings and Paragraphs"
      },
      {
        title: "Headings and Paragraphs",
        description: "Learn how to organize page content into a strong reading experience.",
        introduction: "Headings create a visible structure and outline for readers and machines; paragraphs hold readable text.",
        why: "Proper headings improve accessibility, search engine understanding, and document flow.",
        simpleExplanation: "Use <h1> for the main title, then <h2>..<h6> for subheadings. Use <p> for paragraphs of text.",
        analogy: "Headings are chapter titles in a book; paragraphs are the sentences and paragraphs inside that chapter.",
        visual: "<h1>Main title</h1>\n<h2>Section title</h2>\n<p>Supporting text here.</p>",
        explanation: "Avoid skipping heading levels for visual reasons alone; keep semantic order. Paragraphs can contain inline elements like <strong> and <a>.",
        examples: "Good: <h1>Site</h1><h2>About</h2><p>Contact info.</p> — Bad: using <div> styled as headings.",
        interactive: "Refactor a messy HTML file by replacing styled divs with real heading tags and paragraphs; compare accessibility with a screen reader tool.",
        commonMistakes: ["Using headings purely for visual size", "Skipping h1 or using multiple h1s incorrectly", "Putting block elements inside <p> tags"],
        memoryAid: "One main title (<h1>), then descending levels like an outline.",
        exercises: [
          "Create a document outline with one h1, two h2s, and two paragraphs under each.",
          "Convert three divs used as headings into semantic heading tags.",
          "Wrap provided text into appropriate <p> tags and add emphasis where needed."
        ],
        quiz: {
          q: "Which tag should be used for the main page title?",
          options: ["<h2>", "<h1>", "<p>", "<div>"],
          answer: 1
        },
        miniProject: "Take a plain HTML article and mark it up with headings and paragraphs to create a clear structure.",
        summary: "Headings and paragraphs are the backbone of readable content; use semantic tags for structure and accessibility.",
        revision: "Remember the heading hierarchy and keep paragraphs for flow; avoid block elements inside <p>.",
        nextLesson: "Lists and Links"
      },
      { title: "Lists and Links", description: "Create navigation and content lists that feel clear and user-friendly." },
      { title: "Images and Media", description: "Add visuals and media in a way that supports your message and layout." },
      {
        title: "Introduction to CSS",
        description: "Add style with selectors, declarations, and a consistent design system.",
        introduction: "CSS gives your HTML structure a visual identity and controls how each page feels.",
        why: "Without CSS, pages are harder to read and less engaging for visitors.",
        simpleExplanation: "CSS uses selectors to target elements and declarations to change their appearance.",
        analogy: "Think of CSS as choosing the clothing, lighting, and decoration for a room.",
        visual: "h1 { color: purple; font-size: 24px; }",
        explanation: "Selectors target elements, and properties like color, font-size, background, and margin change the way they appear.",
        examples: "p { line-height: 1.6; color: #333; }",
        interactive: "Create a small style sheet that changes a heading color and paragraph spacing.",
        commonMistakes: ["Forgetting the semicolon", "Targeting the wrong element", "Writing conflicting styles"],
        memoryAid: "Remember selector { property: value; }.",
        exercises: ["Style a heading blue", "Change paragraph spacing", "Add a background color to a card"],
        quiz: { q: "What is the basic structure of a CSS rule?", options: ["selector { property: value; }", "selector = value", "property -> selector", "value: selector"], answer: 0 },
        miniProject: "Create a profile card with a heading, short paragraph, and background color.",
        summary: "CSS uses selectors and declarations to style HTML content clearly and consistently.",
        revision: "Practice writing small rules and inspect the result inside the browser.",
        nextLesson: "Colors and Backgrounds"
      },
      {
        title: "Colors and Backgrounds",
        description: "Use color and background choices to build mood, contrast, and polish.",
        introduction: "Color shapes the tone and readability of a page.",
        why: "Good color choices guide attention and make content easier to scan.",
        simpleExplanation: "Colors can be set by names, hex values, RGB, or HSL.",
        analogy: "Like selecting the right clothes and lighting for a presentation, color sets the mood.",
        visual: "body { background: #f8fafc; color: #111827; }",
        explanation: "Use contrast carefully so headings and text remain legible while background colors support the interface.",
        examples: "button { background: #6d28d9; color: white; }",
        interactive: "Create a hero section with a soft background and a bold call-to-action button.",
        commonMistakes: ["Using colors with poor contrast", "Over-complicating the palette", "Forgetting readability on mobile"],
        memoryAid: "Pair light backgrounds with dark text and keep accents purposeful.",
        exercises: ["Set a page background", "Create a dark button", "Choose a text color with strong contrast"],
        quiz: { q: "Which property changes the background color of an element?", options: ["text-color", "background-color", "border", "font-size"], answer: 1 },
        miniProject: "Design a landing page hero with a balanced color palette.",
        summary: "Color and background choices improve readability and create visual hierarchy.",
        revision: "Review contrast and the emotional effect of each color.",
        nextLesson: "Typography"
      },
      { title: "Typography", description: "Improve readability with well-chosen fonts, spacing, and hierarchy." },
      { title: "The Box Model", description: "Control spacing, borders, and layout behavior with confidence." },
      { title: "Flexbox and Grid", description: "Arrange content into modern layouts that adapt across screen sizes." },
      { title: "Responsive Design", description: "Ensure your page offers a smooth experience on mobile, tablet, and desktop." },
      { title: "Forms and Inputs", description: "Build accessible forms that look polished and work reliably." },
      { title: "Semantic HTML", description: "Use meaningful markup that helps browsers, search engines, and assistive tools." },
      { title: "Mini Project", description: "Create a landing page with a hero, benefits section, and clear calls to action." },
      { title: "Final Project", description: "Ship a complete portfolio-style webpage using the full course roadmap." }
    ],
    realLife: ["Build a one-page website for a freelance client", "Use the layout in a startup landing page", "Turn your notes into a portfolio site"],
    practice: ["Create a landing page with hero, features, and CTA", "Rebuild a wireframe from a screenshot", "Measure your layout on mobile and tablet"],
    projects: ["Launch a landing page for a product or event", "Create a personal portfolio page", "Build a reusable component library for your projects"]
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Add real interactions to web apps so interfaces feel responsive and production-ready.",
    category: "Development",
    level: "Intermediate",
    time: "6 weeks",
    intro: "Move from static pages to interactive applications by learning how JavaScript manages data, events, and user flows in real time.",
    roadmap: [
      "Week 1: Learn variables, data types, operators, and conditional logic.",
      "Week 2: Practice functions, arrays, objects, and loops with small exercises.",
      "Week 3: Connect your code to the DOM and respond to real user events.",
      "Week 4: Use modern JavaScript features and fetch data from APIs.",
      "Week 5: Add persistence and build a polished mini project.",
      "Week 6: Finish a complete interactive app with a final project."
    ],
    outcome: "Create a working dashboard with filters, tabs, and progress updates.",
    objectives: ["Write clean functions", "Manipulate the DOM", "Handle events"],
    modules: ["Variables", "Data Types", "Operators", "Functions", "Arrays", "Objects", "Loops", "Conditions", "DOM Manipulation", "Events", "ES6 Features", "Fetch API", "Async JavaScript", "Local Storage", "Mini Projects", "Final Project"],
    lessons: ["Variables", "Data Types", "Operators", "Functions", "Arrays", "Objects", "Loops", "Conditions", "DOM Manipulation", "Events", "ES6 Features", "Fetch API", "Async JavaScript", "Local Storage", "Mini Projects", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Variables", description: "Store data with confidence and write maintainable code." },
        { title: "Data Types", description: "Understand strings, numbers, booleans, and null values in everyday apps." },
        { title: "Operators", description: "Use arithmetic, comparison, and logical operators to make decisions." },
        { title: "Functions", description: "Reuse behavior across buttons, forms, and UI states." },
        { title: "Arrays and Objects", description: "Organize related information for projects, users, and tasks." }
      ],
      intermediate: [
        { title: "Loops and Conditions", description: "Repeat work without writing duplicate code and respond to data changes." },
        { title: "DOM Manipulation", description: "Update content and styles dynamically based on user actions." },
        { title: "Events", description: "Connect clicks, submissions, and keyboard inputs to useful behavior." },
        { title: "ES6 Features", description: "Adopt modern syntax such as template literals, destructuring, and arrow functions." },
        { title: "Fetch API", description: "Bring dynamic data into your interface from real services." }
      ],
      advanced: [
        { title: "Async JavaScript", description: "Handle waiting states and asynchronous tasks with confidence." },
        { title: "Local Storage", description: "Persist user progress, settings, and saved content in the browser." },
        { title: "Mini Projects", description: "Build small apps such as a task list, quiz, or filterable catalog." },
        { title: "Final Project", description: "Create a polished interactive dashboard that ties the course together." }
      ]
    },
    lessonDetails: [
      {
        title: "Variables",
        description: "Store data with confidence and write maintainable code.",
        introduction: "Variables hold information that your program can use and update.",
        why: "Without variables, code cannot remember user input, counts, or values.",
        simpleExplanation: "A variable is a named box where you store information.",
        analogy: "Think of a variable as a labeled container in a toolbox.",
        visual: "let score = 10;\nscore = score + 1;",
        explanation: "Use let, const, or var to declare variables. Prefer let and const for clarity.",
        examples: "const name = 'Ada'; let age = 20;",
        interactive: "Create a variable for your favorite hobby and display it on the page.",
        commonMistakes: ["Reassigning const values", "Using unclear names", "Forgetting semicolons is not fatal but can reduce readability"],
        memoryAid: "Name variables clearly and keep them meaningful.",
        exercises: ["Create variables for your name and favorite color.", "Update a counter variable in a small script."],
        quiz: { q: "Which keyword should be used when the value should not change?", options: ["let", "const", "var", "if"], answer: 1 },
        miniProject: "Build a tiny profile card that displays a name and favorite language from variables.",
        summary: "Variables store data that your code can use and update.",
        revision: "Use clear names and choose let/const based on whether the value changes.",
        nextLesson: "Data Types"
      },
      {
        title: "Data Types",
        description: "Understand strings, numbers, booleans, and null values in everyday apps.",
        introduction: "Data comes in different forms, and JavaScript needs to recognize each one.",
        why: "You need the right data type to perform the right operations safely.",
        simpleExplanation: "A string is text, a number is numeric, and a boolean is true or false.",
        analogy: "Different boxes are used for different items — one for books, one for tools, one for fruit.",
        visual: "const title = 'Hello';\nconst age = 25;\nconst isReady = true;",
        explanation: "JavaScript has primitive types such as string, number, boolean, undefined, and null.",
        examples: "console.log(typeof 'SkillSwap');",
        interactive: "Write a short script that prints different values and their types.",
        commonMistakes: ["Confusing strings and numbers", "Forgetting that true/false are booleans"],
        memoryAid: "Use typeof to inspect data types while you learn.",
        exercises: ["Create one string, one number, and one boolean.", "Print each type to the console."],
        quiz: { q: "What type is true?", options: ["string", "number", "boolean", "object"], answer: 2 },
        miniProject: "Create a small script that reports the type of several values.",
        summary: "JavaScript uses different data types to represent information correctly.",
        revision: "Use typeof to understand values and avoid type errors.",
        nextLesson: "Operators"
      },
      {
        title: "Operators",
        description: "Use arithmetic, comparison, and logical operators to make decisions.",
        introduction: "Operators help your code make calculations and comparisons.",
        why: "They power logic for totals, checks, and conditions.",
        simpleExplanation: "Use +, -, *, / for math and ===, <, > to compare values.",
        analogy: "Operators are like the tools used to measure and compare things quickly.",
        visual: "let total = 3 + 2;\nlet ready = total > 4;",
        explanation: "JavaScript supports arithmetic, comparison, and logical operators such as && and ||.",
        examples: "const isAdult = age >= 18;",
        interactive: "Build a small script that evaluates whether two values satisfy a condition.",
        commonMistakes: ["Using = instead of == or ===", "Forgetting operator precedence"],
        memoryAid: "Read expressions slowly and test them in the console.",
        exercises: ["Calculate a total with arithmetic operators", "Compare two numbers"],
        quiz: { q: "Which operator checks whether two values are equal?", options: ["=", "==", "===", "+"], answer: 2 },
        miniProject: "Create a small score calculator for a game or quiz.",
        summary: "Operators let code calculate values and make comparisons.",
        revision: "Practice simple calculations and comparisons until they feel natural.",
        nextLesson: "Functions"
      },
      { title: "Functions", description: "Reuse behavior across buttons, forms, and UI states." },
      { title: "Arrays and Objects", description: "Organize related information for projects, users, and tasks." },
      { title: "Loops and Conditions", description: "Repeat work without writing duplicate code and respond to data changes." },
      { title: "DOM Manipulation", description: "Update content and styles dynamically based on user actions." },
      { title: "Events", description: "Connect clicks, submissions, and keyboard inputs to useful behavior." },
      { title: "ES6 Features", description: "Adopt modern syntax such as template literals, destructuring, and arrow functions." },
      { title: "Fetch API", description: "Bring dynamic data into your interface from real services." },
      { title: "Async JavaScript", description: "Handle waiting states and asynchronous tasks with confidence." },
      { title: "Local Storage", description: "Persist user progress, settings, and saved content in the browser." },
      { title: "Mini Projects", description: "Build small apps such as a task list, quiz, or filterable catalog." },
      { title: "Final Project", description: "Create a polished interactive dashboard that ties the course together." }
    ],
    realLife: ["Power interactive dashboards and forms", "Add live filtering to product pages", "Create reusable UI components"],
    practice: ["Build a searchable course catalog", "Add a dark mode toggle", "Create a progress tracker for lessons"],
    projects: ["Build a dynamic to-do app", "Create a searchable product catalog", "Design an interactive dashboard for your own data"]
  },
  {
    id: "python",
    title: "Python",
    description: "Use Python to solve practical problems and automate repetitive work with confidence.",
    category: "Development",
    level: "Beginner",
    time: "5 weeks",
    intro: "Learn programming by solving real tasks with Python, from writing your first script to automating everyday workflows.",
    roadmap: [
      "Week 1: Set up Python and learn the syntax behind simple scripts.",
      "Week 2: Practice conditionals, loops, and functions to solve common problems.",
      "Week 3: Read and write files while building practical automation exercises.",
      "Week 4: Create reusable tools and improve your problem-solving process.",
      "Week 5: Complete a mini automation project and a final capstone."
    ],
    outcome: "Automate a simple workflow such as data cleanup or daily reporting.",
    objectives: ["Write beginner scripts", "Solve problems with logic", "Automate tasks"],
    modules: ["Getting Started", "Conditionals", "Loops", "Functions", "Files", "Projects"],
    lessons: ["Getting Started", "Conditionals", "Loops", "Functions", "Files", "Projects"],
    curriculum: {
      beginner: [
        { title: "Getting Started", description: "Set up your environment and write your first working script." },
        { title: "Conditionals", description: "Create logic that responds to different inputs and scenarios." },
        { title: "Loops", description: "Repeat work without rewriting code manually." }
      ],
      intermediate: [
        { title: "Functions", description: "Organize your work into reusable building blocks." },
        { title: "Files", description: "Read and write data for automation and reporting tasks." },
        { title: "Error Handling", description: "Make your scripts more reliable by handling problems gracefully." }
      ],
      advanced: [
        { title: "Mini Project", description: "Build a practical automation task such as renaming files or cleaning a CSV." },
        { title: "Final Project", description: "Create a small app or workflow that saves time in a realistic setting." }
      ]
    },
    lessonDetails: [
      {
        title: "Getting Started",
        description: "Set up your environment and write your first working script.",
        introduction: "Python is one of the easiest languages to learn because its syntax is readable and practical.",
        why: "Python helps you automate tasks, analyze data, and build tools without unnecessary complexity.",
        simpleExplanation: "Python uses indentation to define blocks of code, so readable structure matters.",
        analogy: "Think of Python as writing instructions in a clear, step-by-step notebook.",
        visual: "print('Hello')\nname = 'Mina'\nprint(name)",
        explanation: "A Python script runs line by line. Use print() to display output and variables to hold values.",
        examples: "name = 'Alice'\nprint('Hello', name)",
        interactive: "Create a small script that greets a user using a variable.",
        commonMistakes: ["Incorrect indentation", "Confusing assignment with equality", "Using unclear variable names"],
        memoryAid: "Keep indentation consistent and read code slowly.",
        exercises: ["Print your name", "Store a number and print it", "Create a greeting message"],
        quiz: { q: "What function prints output in Python?", options: ["echo()", "print()", "show()", "write()"], answer: 1 },
        miniProject: "Build a one-page Python script that welcomes a learner and shows their goals.",
        summary: "Python begins with simple scripts and clear syntax.",
        revision: "Practice printing, storing values, and writing short scripts every day.",
        nextLesson: "Conditionals"
      },
      {
        title: "Conditionals",
        description: "Create logic that responds to different inputs and scenarios.",
        introduction: "Conditionals let your program make choices.",
        why: "Real applications react differently depending on input, date, or user action.",
        simpleExplanation: "If a condition is true, do one thing; otherwise, do something else.",
        analogy: "Like a decision tree: if the weather is sunny, go outside; otherwise, stay in.",
        visual: "if age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
        explanation: "Use if, elif, and else to build decision logic.",
        examples: "if score >= 50: print('Pass')",
        interactive: "Write a script that checks whether a user is old enough to vote.",
        commonMistakes: ["Forgetting the colon", "Indenting incorrectly", "Using = instead of =="],
        memoryAid: "Remember: == checks equality, = assigns a value.",
        exercises: ["Check if a number is positive", "Create a pass/fail decision based on score"],
        quiz: { q: "Which operator checks equality in Python?", options: ["=", "==", "=>", "!="], answer: 1 },
        miniProject: "Build a simple quiz checker that evaluates answers and gives feedback.",
        summary: "Conditionals allow programs to make choices based on data.",
        revision: "Practice if/elif/else until the structure feels natural.",
        nextLesson: "Loops"
      },
      { title: "Loops", description: "Repeat work without rewriting code manually." },
      { title: "Functions", description: "Organize your work into reusable building blocks." },
      { title: "Files", description: "Read and write data for automation and reporting tasks." },
      { title: "Error Handling", description: "Make your scripts more reliable by handling problems gracefully." },
      { title: "Mini Project", description: "Build a practical automation task such as renaming files or cleaning a CSV." },
      { title: "Final Project", description: "Create a small app or workflow that saves time in a realistic setting." }
    ],
    realLife: ["Automate spreadsheet cleanup", "Generate reports from raw files", "Create quick tools for daily tasks"],
    practice: ["Write a script to rename files", "Summarize data from a CSV", "Create a simple task reminder bot"],
    projects: ["Build a file organizer script", "Create a report generator", "Automate a daily checklist"]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Learn how to use AI tools to automate repetitive work, generate content, and improve business workflows.",
    category: "Development",
    level: "Intermediate",
    time: "4 weeks",
    intro: "Use AI as a practical co-pilot for tasks such as drafting, organizing, summarizing, and automating recurring processes.",
    roadmap: [
      "Week 1: Understand where AI automation fits into daily tasks and workflows.",
      "Week 2: Learn how to create effective prompts, templates, and repeatable processes.",
      "Week 3: Apply AI to reporting, content creation, and task automation.",
      "Week 4: Build a practical workflow using AI tools and evaluate the results."
    ],
    outcome: "Create a simple AI-powered workflow that saves time on repetitive tasks.",
    objectives: ["Identify automation opportunities", "Apply AI to everyday tasks", "Build repeatable workflows"],
    modules: ["What is AI Automation", "Prompt Design", "Workflow Mapping", "Content Generation", "Task Automation", "Mini Project", "Final Project"],
    lessons: ["What is AI Automation", "Prompt Design", "Workflow Mapping", "Content Generation", "Task Automation", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "What is AI Automation", description: "See how AI can support productivity in real-world routines." },
        { title: "Prompt Design", description: "Learn to give AI clear instructions to produce useful results." },
        { title: "Workflow Mapping", description: "Identify tasks that can be improved with automation." }
      ],
      intermediate: [
        { title: "Content Generation", description: "Use AI to draft emails, summaries, and useful text quickly." },
        { title: "Task Automation", description: "Automate repetitive steps with templates, rules, and AI workflows." },
        { title: "Evaluation", description: "Review outputs for accuracy, clarity, and usefulness." }
      ],
      advanced: [
        { title: "Mini Project", description: "Create an AI-assisted workflow for a common workplace task." },
        { title: "Final Project", description: "Build a practical automation system and present your process." }
      ]
    },
    lessonDetails: [
      {
        title: "What is AI Automation",
        description: "See how AI can support productivity in real-world routines.",
        introduction: "AI automation uses intelligent tools to reduce repetitive work and improve consistency.",
        why: "It saves time, reduces human error, and helps teams focus on higher-value work.",
        simpleExplanation: "An AI workflow can take an input, process it, and return a useful output.",
        analogy: "Think of it as a smart assistant that handles repeated tasks while you handle decisions.",
        visual: "Input -> AI Assistant -> Draft / Summary / Action",
        explanation: "AI automation is useful for summarizing, drafting, categorizing, translating, and creating repeatable workflows.",
        examples: "You can use AI to turn meeting notes into action items.",
        interactive: "Create a simple workflow for turning a rough note into a polished email.",
        commonMistakes: ["Giving vague prompts", "Trusting AI outputs without review", "Automating the wrong process"],
        memoryAid: "Start with one repetitive task and design a simple prompt around it.",
        exercises: ["List one repetitive task you do weekly", "Write a prompt that improves that task"],
        quiz: { q: "Which is a good use case for AI automation?", options: ["Generating a summary from notes", "Deleting files randomly", "Ignoring deadlines", "Breaking your code"], answer: 0 },
        miniProject: "Create a workflow for turning raw notes into an email and task list.",
        summary: "AI automation helps teams move faster by turning repeated work into guided systems.",
        revision: "Use AI where repetitive work is predictable and repetitive.",
        nextLesson: "Prompt Design"
      },
      { title: "Prompt Design", description: "Learn to give AI clear instructions to produce useful results." },
      { title: "Workflow Mapping", description: "Identify tasks that can be improved with automation." },
      { title: "Content Generation", description: "Use AI to draft emails, summaries, and useful text quickly." },
      { title: "Task Automation", description: "Automate repetitive steps with templates, rules, and AI workflows." },
      { title: "Evaluation", description: "Review outputs for accuracy, clarity, and usefulness." },
      { title: "Mini Project", description: "Create an AI-assisted workflow for a common workplace task." },
      { title: "Final Project", description: "Build a practical automation system and present your process." }
    ],
    realLife: ["Automate routine business communication", "Draft content faster", "Organize recurring tasks with fewer manual steps"],
    practice: ["Create a workflow for meeting notes", "Generate reusable email templates", "Summarize long documents with AI"],
    projects: ["Build a content review workflow", "Automate a study planner", "Create an AI assistant for small tasks"]
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering",
    description: "Master the art of crafting prompts that produce better answers, clearer outputs, and more reliable AI results.",
    category: "Development",
    level: "Beginner",
    time: "3 weeks",
    intro: "Learn how to structure prompts so AI gives you useful, precise, and high-quality responses for work, study, or creativity.",
    roadmap: [
      "Week 1: Learn the basic structure of good prompts.",
      "Week 2: Practice context, examples, and clarity in prompt writing.",
      "Week 3: Improve outputs with refinement, iteration, and role-based prompting."
    ],
    outcome: "Write prompts that consistently produce stronger and more useful AI responses.",
    objectives: ["Write clear prompts", "Refine AI output", "Use prompting patterns effectively"],
    modules: ["Prompt Basics", "Context and Constraints", "Examples and Roles", "Refinement", "Mini Project", "Final Project"],
    lessons: ["Prompt Basics", "Context and Constraints", "Examples and Roles", "Refinement", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Prompt Basics", description: "Understand the core parts of a useful prompt." },
        { title: "Context and Constraints", description: "Add details that guide the AI toward better results." },
        { title: "Examples and Roles", description: "Use examples and role instructions to shape output quality." }
      ],
      intermediate: [
        { title: "Refinement", description: "Improve weak answers by iterating and adjusting the prompt." },
        { title: "Prompt Templates", description: "Create repeatable prompt patterns for common tasks." }
      ],
      advanced: [
        { title: "Mini Project", description: "Design prompts for writing, brainstorming, and research tasks." },
        { title: "Final Project", description: "Create a complete prompt toolkit for work, learning, or creative projects." }
      ]
    },
    lessonDetails: [
      {
        title: "Prompt Basics",
        description: "Understand the core parts of a useful prompt.",
        introduction: "A strong prompt gives the AI a clear goal, context, and expected output.",
        why: "Good prompts save time and improve answer quality.",
        simpleExplanation: "A prompt is like a clear instruction you give to a helper.",
        analogy: "Think of prompting as giving directions to a new assistant.",
        visual: "Task: Summarize this article\nContext: audience is a beginner\nOutput: 3 bullet points",
        explanation: "Every strong prompt usually includes a task, context, and format request.",
        examples: "Write a short email to a new student explaining a class schedule.",
        interactive: "Try writing three prompts for the same task and compare the results.",
        commonMistakes: ["Being too vague", "Asking for too much at once", "Forgetting the audience"],
        memoryAid: "Use the formula: task + context + output format.",
        exercises: ["Write a prompt to summarize a lesson", "Write a prompt to explain a concept to a child"],
        quiz: { q: "Which is the best prompt structure?", options: ["A question only", "Task + context + output", "Random keywords", "A long paragraph with no goal"], answer: 1 },
        miniProject: "Create a prompt template for summarizing class notes.",
        summary: "Prompt engineering begins with clarity, context, and a clear output requirement.",
        revision: "Keep prompts focused and specific for better results.",
        nextLesson: "Context and Constraints"
      },
      {
        title: "Context and Constraints",
        description: "Add details that guide the AI toward better results.",
        introduction: "Context tells the AI who the audience is and what matters.",
        why: "Constraints help shape the quality and usefulness of the answer.",
        simpleExplanation: "You can ask for a certain tone, length, or audience level.",
        analogy: "Like giving a teacher the grade level and learning goal before teaching a lesson.",
        visual: "Audience: beginner\nLength: 150 words\nTone: friendly",
        explanation: "Adding constraints makes the output more focused and usable.",
        examples: "Write a 100-word summary for a high school student in simple English.",
        interactive: "Revise one weak prompt by adding audience and length constraints.",
        commonMistakes: ["Overloading the prompt", "Using conflicting constraints", "Ignoring the audience"],
        memoryAid: "Add context before asking for the final answer.",
        exercises: ["Write a prompt for a 5-year-old", "Write a prompt for a professional email"],
        quiz: { q: "What does context help the AI understand?", options: ["Only the punctuation", "The audience and goal", "The font size", "The browser version"], answer: 1 },
        miniProject: "Design three prompt versions for the same task aimed at beginner, intermediate, and advanced users.",
        summary: "Context and constraints make prompts practical and reliable.",
        revision: "Adjust tone, audience, and length to improve output quality.",
        nextLesson: "Examples and Roles"
      },
      { title: "Examples and Roles", description: "Use examples and role instructions to shape output quality." },
      { title: "Refinement", description: "Improve weak answers by iterating and adjusting the prompt." },
      { title: "Prompt Templates", description: "Create repeatable prompt patterns for common tasks." },
      { title: "Mini Project", description: "Design prompts for writing, brainstorming, and research tasks." },
      { title: "Final Project", description: "Create a complete prompt toolkit for work, learning, or creative projects." }
    ],
    realLife: ["Write better work prompts", "Generate more useful study summaries", "Create stronger content ideas with AI"],
    practice: ["Prompt for a newsletter", "Create a product description prompt", "Build prompts for lesson planning"],
    projects: ["Make a prompt library", "Create role-based prompts", "Design prompting templates for recurring tasks"]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Shape better digital experiences with research-backed decisions and elegant product flows.",
    category: "Design",
    level: "Intermediate",
    time: "4 weeks",
    intro: "Learn how to research users, structure product journeys, and turn ideas into clear, human-centered experiences.",
    roadmap: [
      "Week 1: Study user needs, behaviors, and the basics of good interface design.",
      "Week 2: Create wireframes and map the flow of a complete experience.",
      "Week 3: Improve clarity with layout, hierarchy, and accessibility choices.",
      "Week 4: Prototype a polished experience and present it with rationale."
    ],
    outcome: "Prototype a user journey for a mobile app or website feature.",
    objectives: ["Map user journeys", "Design interfaces", "Create prototypes"],
    modules: ["Design Principles", "User Research", "Wireframes", "Visual Hierarchy", "Prototyping", "Accessibility", "Mini Project", "Final Project"],
    lessons: ["Design Principles", "User Research", "Wireframes", "Visual Hierarchy", "Prototyping", "Accessibility", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Design Principles", description: "Learn clarity, consistency, and feedback in product interfaces." },
        { title: "User Research", description: "Gather insight from users and translate it into design choices." },
        { title: "Wireframes", description: "Map the structure of a product before adding visual polish." }
      ],
      intermediate: [
        { title: "Visual Hierarchy", description: "Guide attention to the most important actions and content." },
        { title: "Prototyping", description: "Turn ideas into clickable experiences for testing and feedback." },
        { title: "Accessibility", description: "Ensure your design works for varied users and devices." }
      ],
      advanced: [
        { title: "Mini Project", description: "Design a simple onboarding flow for a mobile app or website." },
        { title: "Final Project", description: "Present a complete redesign concept for a real product experience." }
      ]
    },
    lessonDetails: [
      {
        title: "Design Principles",
        description: "Learn clarity, consistency, and feedback in product interfaces.",
        introduction: "Great design begins with clear goals and a user-centered mindset.",
        why: "People trust and use products more when interfaces feel simple and predictable.",
        simpleExplanation: "Design principles help create interfaces that are easy to understand and use.",
        analogy: "Think of design as arranging a room so people can find what they need without confusion.",
        visual: "Clear layout -> clear hierarchy -> clear action",
        explanation: "Common principles include contrast, alignment, repetition, proximity, and accessibility.",
        examples: "A button should stand out and clearly signal what happens next.",
        interactive: "Redesign a messy form so the important actions are easier to find.",
        commonMistakes: ["Too much clutter", "Inconsistent spacing", "Weak visual hierarchy"],
        memoryAid: "Make it obvious what matters most.",
        exercises: ["Create a simple page hierarchy", "Improve a landing page layout"],
        quiz: { q: "What does visual hierarchy help users do?", options: ["Ignore the page", "Notice important elements first", "Make text smaller", "Add more colors"], answer: 1 },
        miniProject: "Redesign a sign-up form with clearer spacing and a stronger call to action.",
        summary: "Design principles create a foundation for clarity, trust, and usability.",
        revision: "Review contrast, alignment, and consistency in every design you make.",
        nextLesson: "User Research"
      },
      {
        title: "User Research",
        description: "Gather insight from users and translate it into design choices.",
        introduction: "User research helps you understand what people need before you design solutions.",
        why: "Design decisions are stronger when they are based on real user behavior and feedback.",
        simpleExplanation: "You can learn by observing users, interviewing them, and reviewing feedback.",
        analogy: "Like a doctor asking questions before prescribing treatment.",
        visual: "Research -> insight -> design decision",
        explanation: "Research can include interviews, observations, surveys, and usability notes.",
        examples: "Ask users what steps feel confusing in a checkout flow.",
        interactive: "Create a short interview guide for a product you want to improve.",
        commonMistakes: ["Assuming without evidence", "Asking leading questions", "Ignoring feedback"],
        memoryAid: "Observe the people you are designing for.",
        exercises: ["Write three interview questions", "Summarize one pain point from a mock interview"],
        quiz: { q: "Why do designers research users?", options: ["To avoid feedback", "To make better decisions", "To make things harder", "To skip testing"], answer: 1 },
        miniProject: "Create a research summary based on a fictional user interview.",
        summary: "User research turns assumptions into evidence-based design decisions.",
        revision: "Always look for patterns in user behavior and feedback.",
        nextLesson: "Wireframes"
      },
      { title: "Wireframes", description: "Map the structure of a product before adding visual polish." },
      { title: "Visual Hierarchy", description: "Guide attention to the most important actions and content." },
      { title: "Prototyping", description: "Turn ideas into clickable experiences for testing and feedback." },
      { title: "Accessibility", description: "Ensure your design works for varied users and devices." },
      { title: "Mini Project", description: "Design a simple onboarding flow for a mobile app or website." },
      { title: "Final Project", description: "Present a complete redesign concept for a real product experience." }
    ],
    realLife: ["Improve onboarding for an app", "Design better checkout flows", "Create product mockups for stakeholders"],
    practice: ["Sketch a task flow for a delivery app", "Redesign a sign-up experience", "Review one product and explain its friction points"],
    projects: ["Redesign a sign-up flow", "Prototype a learning dashboard", "Improve a checkout experience"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Learn how layout, color, and typography create memorable visual stories for brands and products.",
    category: "Design",
    level: "Beginner",
    time: "3 weeks",
    intro: "Build strong visual communication skills by learning composition, color theory, typography, and brand storytelling.",
    roadmap: [
      "Week 1: Explore color harmony, contrast, and visual balance.",
      "Week 2: Practice typography, layout, and composition for clear messaging.",
      "Week 3: Apply the concepts to a brand package or social post set."
    ],
    outcome: "Create a simple brand poster or social media campaign kit.",
    objectives: ["Use color thoughtfully", "Create strong layouts", "Tell stories visually"],
    modules: ["Color Theory", "Typography", "Composition", "Branding", "Mini Project", "Final Project"],
    lessons: ["Color Theory", "Typography", "Composition", "Branding", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Color Theory", description: "Choose palettes that support mood and brand perception." },
        { title: "Typography", description: "Pair typefaces that feel modern and readable." },
        { title: "Composition", description: "Arrange elements so the eye moves with purpose." }
      ],
      intermediate: [
        { title: "Branding", description: "Apply design choices to a consistent visual identity." },
        { title: "Layout Systems", description: "Create clean grids and balance visual hierarchy across a page." }
      ],
      advanced: [
        { title: "Mini Project", description: "Design a social media carousel or one-page flyer." },
        { title: "Final Project", description: "Create a complete brand kit or poster campaign." }
      ]
    },
    lessonDetails: [
      {
        title: "Color Theory",
        description: "Choose palettes that support mood and brand perception.",
        introduction: "Color theory helps designers create balance, contrast, and emotional impact.",
        why: "Colors influence mood and help communicate meaning quickly.",
        simpleExplanation: "Warm colors feel energetic while cool colors feel calm and trustworthy.",
        analogy: "Like choosing the right lighting for a mood or event.",
        visual: "Primary colors -> secondary colors -> harmony",
        explanation: "Use complementary, analogous, and monochromatic palettes carefully to create cohesion.",
        examples: "A health app might use blue and green to suggest calmness and trust.",
        interactive: "Build a small palette and explain how each color supports the message.",
        commonMistakes: ["Too many saturated colors", "Poor contrast", "Ignoring cultural meaning"],
        memoryAid: "Use a small palette and keep it intentional.",
        exercises: ["Create a warm palette", "Create a cool palette", "Explain which one matches a brand"],
        quiz: { q: "What do complementary colors do?", options: ["Make everything dull", "Create strong contrast", "Reduce readability", "Hide the message"], answer: 1 },
        miniProject: "Create a branded color palette for a student project or startup.",
        summary: "Color theory helps designers build clarity and emotional resonance.",
        revision: "Study palettes until you can explain the mood they create.",
        nextLesson: "Typography"
      },
      { title: "Typography", description: "Pair typefaces that feel modern and readable." },
      { title: "Composition", description: "Arrange elements so the eye moves with purpose." },
      { title: "Branding", description: "Apply design choices to a consistent visual identity." },
      { title: "Layout Systems", description: "Create clean grids and balance visual hierarchy across a page." },
      { title: "Mini Project", description: "Design a social media carousel or one-page flyer." },
      { title: "Final Project", description: "Create a complete brand kit or poster campaign." }
    ],
    realLife: ["Design social media graphics", "Create slide decks for presentations", "Support a small business brand"],
    practice: ["Create a one-page flyer", "Design a social post set", "Rewrite a visual brand system"],
    projects: ["Create a social campaign", "Design a poster series", "Develop a simple brand identity"]
  },
  {
    id: "photography",
    title: "Photography",
    description: "Develop a professional eye for light, framing, and storytelling through real-world shooting exercises.",
    category: "Photography",
    level: "Beginner",
    time: "3 weeks",
    intro: "Explore the art and craft of photography through composition, lighting, editing, and storytelling exercises.",
    roadmap: [
      "Week 1: Practice framing, balance, and composition in everyday scenes.",
      "Week 2: Learn how light shapes mood, texture, and detail.",
      "Week 3: Edit your photos with intention and assemble a simple photo story."
    ],
    outcome: "Capture a mini photo story for a portfolio or social campaign.",
    objectives: ["Frame compelling shots", "Use light creatively", "Edit with intention"],
    modules: ["Composition", "Lighting", "Editing", "Storytelling", "Mini Project", "Final Project"],
    lessons: ["Composition", "Lighting", "Editing", "Storytelling", "Mini Project", "Final Project"],
    curriculum: {
      beginner: [
        { title: "Composition", description: "Learn how leading lines, balance, and framing shape attention." },
        { title: "Lighting", description: "Work with natural light to create mood and depth." },
        { title: "Editing", description: "Refine photos with color, crop, and contrast adjustments." }
      ],
      intermediate: [
        { title: "Storytelling", description: "Turn a set of photos into a clear narrative or theme." },
        { title: "Camera Settings", description: "Adjust settings to make your photos more intentional and sharp." }
      ],
      advanced: [
        { title: "Mini Project", description: "Shoot a short series around one theme, such as texture or motion." },
        { title: "Final Project", description: "Create a coherent photo story for a portfolio or social post." }
      ]
    },
    lessonDetails: [
      {
        title: "Composition",
        description: "Learn how leading lines, balance, and framing shape attention.",
        introduction: "Composition is how a photo is arranged so the eye knows where to go.",
        why: "A strong composition makes images feel intentional and memorable.",
        simpleExplanation: "Use balance, framing, and space to guide attention.",
        analogy: "Like arranging objects on a stage so the most important thing is seen first.",
        visual: "Subject in center -> subject off-center with space",
        explanation: "Good composition often uses rule-of-thirds, leading lines, or a clear focal point.",
        examples: "A portrait with the subject slightly off-center often feels more natural than a centered shot.",
        interactive: "Take two photos of the same object with different composition and compare them.",
        commonMistakes: ["Cluttered backgrounds", "Random framing", "Ignoring the subject"],
        memoryAid: "Keep the subject clear and the background supporting.",
        exercises: ["Shoot one photo using rule-of-thirds", "Shoot one photo using leading lines"],
        quiz: { q: "What is composition in photography?", options: ["How the image is arranged", "How the camera is cleaned", "The file format", "The battery level"], answer: 0 },
        miniProject: "Shoot a short series around one everyday object using different composition choices.",
        summary: "Composition helps viewers understand and enjoy an image.",
        revision: "Practice framing the same subject in multiple ways.",
        nextLesson: "Lighting"
      },
      { title: "Lighting", description: "Work with natural light to create mood and depth." },
      { title: "Editing", description: "Refine photos with color, crop, and contrast adjustments." },
      { title: "Storytelling", description: "Turn a set of photos into a clear narrative or theme." },
      { title: "Camera Settings", description: "Adjust settings to make your photos more intentional and sharp." },
      { title: "Mini Project", description: "Shoot a short series around one theme, such as texture or motion." },
      { title: "Final Project", description: "Create a coherent photo story for a portfolio or social post." }
    ],
    realLife: ["Capture event photos", "Create a portfolio gallery", "Shoot social content for a brand"],
    practice: ["Photograph a morning commute", "Create a photo series about texture", "Edit one photo into three different moods"],
    projects: ["Build a photo essay", "Create a travel gallery", "Shoot a mini brand campaign"]
  },
];

const skillEngine = window.SkillSwapLearningData?.createSkillCatalogEngine(skillCatalog, STORAGE_KEYS);
const {
  buildSkillLearningPath: engineBuildSkillLearningPath,
  getSkillLessonEntries: engineGetSkillLessonEntries,
  getSkillCurriculumSections: engineGetSkillCurriculumSections,
  normalizeSkill: engineNormalizeSkill,
  getSkillById: engineGetSkillById
} = skillEngine || {};

let lessonRenderer = null;

// Every listed topic is a learnable course.  The richer hand-written courses above
// remain intact; these course blueprints complete the community catalogue.
function createCourse(id, title, category, level, description, outcome) {
  const topics = ["Foundations", "Core tools", "Practice workflow", "Feedback and improvement", "Portfolio project", "Final showcase"];
  const lessons = topics.map((topic, index) => ({
    title: `${topic}: ${title}`,
    description: `${index + 1}. Build practical ${title} confidence through a focused, guided lesson.`,
    introduction: `In this lesson you will learn the essential ${title} habits used in real projects.`,
    why: `A clear ${title} process helps you deliver useful work, communicate your choices, and improve quickly.`,
    simpleExplanation: `Learn one small concept, apply it immediately, review the result, and repeat with feedback.`,
    analogy: `${title} improves like a sport: short deliberate practice sessions build reliable skills.`,
    visual: `Learn → practise → get feedback → refine → share`,
    explanation: `Work through the examples, then make the exercise your own. Keep notes on what worked, what was difficult, and what you will improve next time.`,
    examples: `Start with a small ${title} task, document your choices, then compare the first draft with a refined version.`,
    interactive: `Complete the exercise below, save your evidence, and bring one question to a peer swap session.`,
    commonMistakes: ["Trying to learn everything at once", "Skipping practice", "Not asking for specific feedback"],
    memoryAid: "Small practice, honest feedback, steady improvement.",
    exercises: [`Complete a 20-minute ${title} drill`, "Write down one thing you improved", "Ask a peer for one actionable suggestion"],
    quiz: { q: `What is the best way to improve your ${title} skill?`, options: ["Practise, review, and iterate", "Only watch tutorials", "Wait for a perfect idea", "Avoid feedback"], answer: 0 },
    miniProject: `Create a small ${title} project that solves a real student problem and share it for feedback.`,
    summary: `You have a repeatable process for learning and applying ${title}.`,
    revision: "Review your work, explain one choice, and choose your next improvement.",
    nextLesson: index < topics.length - 1 ? `${topics[index + 1]}: ${title}` : ""
  }));
  return {
    id, title, category, level, time: "3 weeks", description, intro: `A complete, practice-led ${title} course for students who want skills they can use and share.`, outcome,
    objectives: ["Learn the core workflow", "Practise with feedback", "Finish a shareable project"],
    lessons: lessons.map((lesson) => lesson.title), modules: lessons.map((lesson) => lesson.title),
    curriculum: { beginner: lessons.slice(0, 2), intermediate: lessons.slice(2, 4), advanced: lessons.slice(4) },
    lessonDetails: lessons, roadmap: ["Week 1: Learn the foundations and core tools.", "Week 2: Practise with feedback and improve your workflow.", "Week 3: Build, present, and reflect on a final project."],
    practice: lessons.slice(0, 3).map((lesson) => lesson.miniProject), projects: [`Complete a ${title} mini project`, `Prepare a ${title} portfolio piece`, "Present your work in a peer feedback session"]
  };
}

[
  ["ai-automation", "AI Automation", "Development", "Intermediate", "Build responsible workflows that reduce repetitive work.", "Create an automation plan and a tested workflow."],
  ["prompt-engineering", "AI Prompt Engineering", "Development", "Beginner", "Write clearer prompts and evaluate AI-assisted work responsibly.", "Build a prompt library for a real study or work task."],
  ["mathematics", "Mathematics", "Academic", "Beginner", "Strengthen problem solving with clear methods and peer explanation.", "Solve and explain a set of university-level practice problems."],
  ["public-speaking", "Public Speaking", "Communication", "Beginner", "Build confidence, structure, and presence for presentations.", "Deliver a clear five-minute presentation with peer feedback."],
  ["video-editing", "Video Editing", "Creative", "Beginner", "Plan, cut, refine, and publish compelling short videos.", "Edit a polished one-minute video story."]
  ,["html", "HTML", "Development", "Beginner", "Learn the semantic structure that makes every web page readable and accessible.", "Publish a complete multi-section HTML profile page."],
  ["css", "CSS", "Development", "Beginner", "Style pages with modern layouts, responsive design, and purposeful motion.", "Create a responsive, polished web interface."],
  ,["kotlin", "Kotlin", "Development", "Beginner", "Learn Kotlin syntax, object-oriented thinking, and Android-ready foundations.", "Build a small Kotlin console application."],
  ["mobile-app-development", "Mobile App Development", "Development", "Intermediate", "Design and build mobile experiences that solve a real user need.", "Prototype and present a working mobile app concept."],
  ["entrepreneurship", "Entrepreneurship", "Business", "Beginner", "Validate ideas, understand customers, and plan a small sustainable venture.", "Create and pitch a one-page student startup plan."],
  ["communication-skills", "Communication Skills", "Communication", "Beginner", "Communicate clearly in conversations, writing, and collaborative work.", "Deliver a concise, confident professional message and presentation."]
].forEach((course) => skillCatalog.push(createCourse(...course)));

// Turn every course module into a complete in-platform lesson. The data below gives
// each skill its own vocabulary, method, practice, and final deliverable rather
// than sending learners to another platform.
const skillTeachingGuides = {
  "HTML & CSS": { core: "semantic structure, layout, and responsive styling", do: "build one section of a responsive student portfolio", check: "Does every image have useful alternative text and does the layout still work at 360px?", project: "a responsive portfolio landing page" },
  "HTML": { core: "semantic structure, meaningful elements, and accessible content", do: "write a small HTML page using a heading, paragraph, list, link, and image", check: "Can you point to the opening tag, content, and closing tag for each element?", project: "a multi-section HTML profile page" },
  "CSS": { core: "selectors, layout, responsive rules, and visual hierarchy", do: "style a small card and change one property at a time", check: "Does the page remain readable, usable, and balanced on a narrow screen?", project: "a responsive student dashboard interface" },
  "JavaScript": { core: "values, functions, events, and the DOM", do: "write one small function, connect it to a button, and inspect the result", check: "Can you explain what changes when the user clicks and where the data is stored?", project: "an interactive study tracker" },
  "Python": { core: "variables, control flow, functions, and data collections", do: "solve a small input-to-output problem before looking at a solution", check: "Can you trace the value of each variable line by line?", project: "a command-line study planner" },
  "UI/UX Design": { core: "user needs, flows, hierarchy, and usability", do: "sketch a low-fidelity screen for one real student task", check: "Can a first-time user identify the main action in five seconds?", project: "a tested mobile-app onboarding flow" },
  "Graphic Design": { core: "contrast, hierarchy, alignment, and visual consistency", do: "create three layout variations using the same words and assets", check: "Can a viewer find the headline, key message, and action in that order?", project: "a small campus-event brand kit" },
  "Photography": { core: "light, exposure, composition, and visual storytelling", do: "photograph one subject from three angles and compare the strongest frame", check: "Is the subject clear, the background helpful, and the exposure intentional?", project: "a five-image photo story" },
  "AI Automation": { core: "mapping repetitive work, input-output rules, and human review", do: "draw a simple workflow with trigger, action, and review step", check: "What can go wrong and where does a human approve the output?", project: "a safe student-workflow automation plan" },
  "AI Prompt Engineering": { core: "clear instructions, context, constraints, and evaluation", do: "rewrite a vague prompt with a role, goal, context, format, and quality check", check: "Could another person reproduce a useful answer from your prompt?", project: "a tested prompt library for study tasks" },
  "Mathematics": { core: "definitions, worked examples, patterns, and checking", do: "solve one problem on paper, writing a reason beside each transformation", check: "Can you substitute your answer back into the original problem?", project: "a step-by-step problem-solving guide" },
  "Public Speaking": { core: "purpose, audience, structure, delivery, and rehearsal", do: "record a one-minute talk using hook, point, example, and close", check: "Can a listener state your single main message after hearing it once?", project: "a timed five-minute persuasive talk" },
  "Video Editing": { core: "story, selection, pacing, audio, and export", do: "make a 20-second sequence with a clear beginning, middle, and end", check: "Does every cut help the viewer understand or feel something?", project: "a one-minute student story" },
  "Kotlin": { core: "types, functions, null safety, and object-oriented design", do: "write a tiny function, call it with two inputs, and predict the output", check: "What type does each expression produce and where can null appear?", project: "a Kotlin console study helper" },
  "Mobile App Development": { core: "user flows, screens, state, and accessible interaction", do: "map one task from opening the app to a successful outcome", check: "Can the task be completed with a clear label, feedback, and recovery path?", project: "a clickable student-service app prototype" },
  "Entrepreneurship": { core: "customer problems, value propositions, experiments, and simple economics", do: "interview one potential user without pitching your solution first", check: "What evidence shows the problem is important enough to solve?", project: "a one-page student venture experiment" },
  "Communication Skills": { core: "audience, purpose, structure, listening, and clear action", do: "rewrite one long message so the purpose and requested action appear first", check: "Can the receiver repeat the next step without asking a question?", project: "a professional message and short briefing" }
};

function enrichLesson(skill, lesson, index, allLessons) {
  const guide = skillTeachingGuides[skill.title] || { core: "foundations, deliberate practice, feedback, and reflection", do: "complete one small practice task", check: "Can you explain your result clearly?", project: `a practical ${skill.title} project` };
  const title = lesson.title || lesson;
  const nextTitle = allLessons[index + 1]?.title || allLessons[index + 1] || "";
  const browserCode = skill.id === "html-css" ? `<!doctype html>\n<html><head><style>body{font-family:system-ui;padding:24px}.card{max-width:360px;padding:20px;border-radius:16px;background:#ede9fe;color:#312e81}button{padding:10px 14px;border:0;border-radius:8px;background:#6d28d9;color:#fff}</style></head><body><main class="card"><h1>${title}</h1><p>Change this text, colour, or spacing, then press Run.</p><button>Practise</button></main></body></html>` : skill.id === "javascript" ? `<!doctype html>\n<html><body style="font-family:system-ui;padding:24px"><h1 id="count">0</h1><button id="add">Add one</button><script>let count=0;document.querySelector('#add').addEventListener('click',()=>{count+=1;document.querySelector('#count').textContent=count;});</script></body></html>` : "";
  const syntax = skill.id === "python" ? `# ${title}\nname = "Ada"\nprint(f"Hello, {name}")` : skill.id === "kotlin" ? `// ${title}\nfun greet(name: String): String {\n  return "Hello, $name"\n}\nprintln(greet("Ada"))` : "";
  return {
    ...lesson,
    title,
    description: lesson.description || `Learn ${title} through a clear explanation, guided practice, and a quick self-check.`,
    introduction: lesson.introduction || `${title} is one practical part of ${skill.title}. You will learn it by doing a small task, reviewing the result, and improving it once.`,
    why: lesson.why || `This matters because ${guide.core} are the building blocks of useful ${skill.title} work.`,
    simpleExplanation: lesson.simpleExplanation || `First understand the goal. Then make the smallest possible example. Change one thing at a time and observe the effect.`,
    analogy: lesson.analogy || `Treat this as a short training drill: isolate one movement, practise it slowly, then use it in a real situation.`,
    visual: lesson.visual || syntax || `Goal → small example → observe → improve → apply\nTopic: ${title}`,
    code: lesson.code || browserCode,
    explanation: lesson.explanation || `Work in three passes. Pass 1: identify the outcome and the key idea. Pass 2: follow the example and name each choice you make. Pass 3: change one part and explain how the result changes. This method makes learning active instead of passive.`,
    examples: lesson.examples || `Guided example: ${guide.do}. Keep the first version simple. Then create a second version that improves one choice—clarity, structure, contrast, correctness, or pacing.`,
    steps: lesson.steps || [`State the outcome of ${title} in your own words.`, guide.do, `Use this self-check: ${guide.check}`, "Make one improvement and record what changed."],
    interactive: lesson.interactive || `Try it now: ${guide.do}. When you finish, answer this self-check: ${guide.check}`,
    commonMistakes: lesson.commonMistakes?.length ? lesson.commonMistakes : ["Trying to make the first attempt perfect", "Changing several things before checking the result", "Skipping the self-check or feedback step"],
    memoryAid: lesson.memoryAid || "Learn it, do it, check it, improve it.",
    exercises: lesson.exercises?.length ? lesson.exercises : [`Explain ${title} in two plain sentences.`, guide.do, `Review your work: ${guide.check}`],
    quiz: lesson.quiz || { q: `What is the most effective next step after a first attempt at ${title}?`, options: ["Check the result and improve one specific thing", "Start a different topic immediately", "Memorize without practising", "Ignore feedback"], answer: 0 },
    miniProject: lesson.miniProject || `Apply this lesson to ${guide.project}. Save a first draft, make one improvement after feedback, and write down what changed.`,
    summary: lesson.summary || `${title} becomes easier when you practise one focused action, inspect the result, and improve deliberately.`,
    revision: lesson.revision || `Key idea: ${guide.core}. Before moving on, complete this check: ${guide.check}`,
    nextLesson: lesson.nextLesson || nextTitle
  };
}

const courseLessonPlans = {
  HTML: ["Introduction to HTML", "HTML Syntax", "Tags and Elements", "Headings and Paragraphs", "Lists", "Links and Images", "Tables", "Forms and Inputs", "Semantic HTML", "HTML Project"],
  CSS: ["CSS Syntax", "Selectors", "Colors and Typography", "Box Model", "Flexbox", "CSS Grid", "Positioning", "Responsive Design", "Animations", "CSS Mini Project"],
  JavaScript: ["Variables and Data Types", "Functions", "Arrays", "Objects", "Conditions and Loops", "DOM Selection", "Events", "Forms and Validation", "Local Storage", "JavaScript Project"],
  Mathematics: ["Problem-Solving Method", "Algebraic Expressions", "Equations", "Functions and Graphs", "Percentages and Ratios", "Geometry Basics", "Statistics", "Worked Problems", "Mixed Practice", "Mathematics Project"],
  "Public Speaking": ["Audience and Purpose", "Structure a Clear Talk", "Openings and Stories", "Voice and Pace", "Body Language", "Managing Nerves", "Visual Aids", "Practice and Feedback", "Sample Speech", "Final Presentation"],
  Photography: ["Camera Basics", "Exposure Triangle", "Composition", "Lighting", "Focus and Motion", "Portraits", "Editing Basics", "Visual Storytelling", "Photo Practice", "Photo Story Project"]
};

Object.entries(courseLessonPlans).forEach(([title, plan]) => {
  const skill = skillCatalog.find((entry) => entry.title === title);
  if (!skill) return;
  const lessons = plan.map((lessonTitle) => ({ title: lessonTitle, description: `A focused ${title} chapter with explanation, example, practice, and a self-check.` }));
  skill.curriculum = { beginner: lessons.slice(0, 4), intermediate: lessons.slice(4, 7), advanced: lessons.slice(7) };
  skill.roadmap = ["Stage 1: Learn the essential language and methods.", "Stage 2: Apply each idea through focused practice.", "Stage 3: Build a complete project, review it, and prepare to share it."];
});

skillCatalog.forEach((skill) => {
  const flatLessons = Object.values(skill.curriculum || {}).flat();
  const lessonSource = flatLessons.length ? flatLessons : (skill.lessonDetails || skill.lessons || []);
  const completedLessons = lessonSource.map((lesson, index) => enrichLesson(skill, lesson, index, lessonSource));
  skill.lessonDetails = completedLessons;
  skill.lessons = completedLessons.map((lesson) => lesson.title);
  skill.curriculum = { beginner: completedLessons.slice(0, Math.ceil(completedLessons.length / 3)), intermediate: completedLessons.slice(Math.ceil(completedLessons.length / 3), Math.ceil(completedLessons.length * 2 / 3)), advanced: completedLessons.slice(Math.ceil(completedLessons.length * 2 / 3)) };
});

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function buildSkillLearningPath(skill) {
  const title = skill.title || "this skill";
  const lessonTitles = [
    `Start with ${title}`,
    `Practice ${title}`,
    `Build a mini project with ${title}`,
    `Review and improve your work`
  ];

  const lessonDetails = lessonTitles.map((lessonTitle, index) => ({
    title: lessonTitle,
    description: index === 0
      ? `Learn the basics of ${title} in a simple, guided way.`
      : index === 1
        ? `Try a quick exercise so the idea feels practical.`
        : index === 2
          ? `Apply what you learned in a small project.`
          : `Reflect on your progress and prepare for the next step.`,
    introduction: `This shortcut lesson introduces the core idea behind ${title}.`,
    why: `Learning ${title} in small steps makes it easier to understand and remember.`,
    simpleExplanation: `Focus on one concept at a time and practice it until it feels natural.`,
    analogy: `Think of it as building a strong base before adding more advanced ideas.`,
    visual: `Learn -> Practice -> Build -> Improve`,
    explanation: `You can follow this guided path from the first idea to a mini project without needing a long manual.`,
    examples: `Try one small example connected to ${title} and write down what you learned.`,
    interactive: `Complete one short task and keep your notes nearby so you can revisit them later.`,
    commonMistakes: ["Trying to learn everything at once", "Skipping practice", "Forgetting to review your notes"],
    memoryAid: "Small steps every day help you build momentum faster.",
    exercises: ["Write a short summary", "Try one exercise", "Create one tiny result"],
    quiz: {
      q: `What is the best first step when learning ${title}?`,
      options: ["Skip the basics", "Learn the foundation", "Wait for motivation", "Ignore practice"],
      answer: 1
    },
    miniProject: `Create a tiny project around ${title} that you can finish in one session.`,
    summary: `A guided shortcut path helps you learn ${title} from the beginning to a practical finish.`,
    revision: "Review the main idea, practice once more, and keep going.",
    nextLesson: index < lessonTitles.length - 1 ? lessonTitles[index + 1] : ""
  }));

  return {
    curriculum: {
      beginner: lessonDetails.slice(0, 2),
      intermediate: lessonDetails.slice(2, 4)
    },
    lessonDetails,
    lessons: lessonDetails.map((lesson) => lesson.title)
  };
}

function getSkillLessonEntries(skill) {
  if (Array.isArray(skill?.lessonDetails) && skill.lessonDetails.length) return skill.lessonDetails;
  if (skill?.curriculum && typeof skill.curriculum === "object") {
    return Object.values(skill.curriculum).flat().filter(Boolean);
  }

  const generated = buildSkillLearningPath(skill);
  skill.lessonDetails = generated.lessonDetails;
  skill.curriculum = generated.curriculum;
  skill.lessons = generated.lessons;
  return generated.lessonDetails;
}

function getSkillCurriculumSections(skill) {
  const lessonEntries = getSkillLessonEntries(skill);
  if (skill.curriculum && typeof skill.curriculum === "object" && !Array.isArray(skill.curriculum)) {
    return Object.entries(skill.curriculum);
  }

  const generated = buildSkillLearningPath(skill);
  skill.curriculum = generated.curriculum;
  skill.lessons = generated.lessons;
  return Object.entries(generated.curriculum);
}

function normalizeSkill(skill) {
  if (!skill) return skill;
  if (!skill.lessonDetails || !skill.lessonDetails.length) {
    const generated = buildSkillLearningPath(skill);
    skill.lessonDetails = generated.lessonDetails;
    skill.curriculum = generated.curriculum;
    skill.lessons = generated.lessons;
  }
  return skill;
}

function renderLessonContent(skill, lessonTitle) {
  if (lessonRenderer && typeof lessonRenderer.renderLessonContent === "function") {
    return lessonRenderer.renderLessonContent(skill, lessonTitle);
  }

  const lessonView = document.getElementById('lesson-view');
  if (!lessonView) return;

  const lessonEntries = getSkillLessonEntries(skill);
  const lessonEntry = lessonEntries.find((l) => l.title === lessonTitle) || lessonEntries[0] || { title: lessonTitle, description: '' };
  lessonView.innerHTML = `
    <article class="lesson-view-card">
      <h3>${lessonEntry.title}</h3>
      <p class="lesson-desc">${lessonEntry.description || ''}</p>
    </article>
  `;
}

function defaultCodeFor(skillId, lessonTitle) {
  if (skillId === 'html-css') return '<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;padding:20px} .box{display:flex;gap:8px}</style></head><body><div class="box"><div>Home</div><div>About</div><div>Contact</div></div></body></html>';
  if (skillId === 'javascript') return '<!doctype html><html><body><script>document.body.innerHTML = "<h1>JS example</h1><p>Open the console to log values.</p>";console.log("Hello from JS");</script></body></html>';
  return '<!doctype html><html><body><p>No code example for this lesson.</p></body></html>';
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentUser() {
  return readStorage(STORAGE_KEYS.currentUser, null);
}

function saveCurrentUser(user) {
  writeStorage(STORAGE_KEYS.currentUser, user);
}

function getUsers() {
  return readStorage(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
  writeStorage(STORAGE_KEYS.users, users);
}

function getSavedSkills() {
  return readStorage(STORAGE_KEYS.savedSkills, []);
}

function saveSavedSkills(skills) {
  writeStorage(STORAGE_KEYS.savedSkills, skills);
}

function getSkillProgressMap() {
  return readStorage(STORAGE_KEYS.progress, {});
}

function saveSkillProgressMap(value) {
  writeStorage(STORAGE_KEYS.progress, value);
}

function getSkillProgress(skillId) {
  const progressMap = getSkillProgressMap();
  return progressMap[skillId] || { completedLessons: [], activeLesson: "", notes: "" };
}

function saveSkillProgress(skillId, updates) {
  const progressMap = getSkillProgressMap();
  const current = getSkillProgress(skillId);
  const timestamp = Date.now();
  progressMap[skillId] = { ...current, ...updates, lastUpdated: timestamp };
  saveSkillProgressMap(progressMap);
  return progressMap[skillId];
}

function formatDateKey(ms) {
  const d = new Date(ms);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getLearningStreak() {
  const progressMap = getSkillProgressMap();
  const days = new Set();
  Object.values(progressMap).forEach((entry) => {
    if (entry.lastUpdated) days.add(formatDateKey(entry.lastUpdated));
  });
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const check = new Date(today);
    check.setDate(today.getDate() - i);
    const key = `${check.getFullYear()}-${String(check.getMonth() + 1).padStart(2, '0')}-${String(check.getDate()).padStart(2, '0')}`;
    if (days.has(key)) streak++; else break;
  }
  return streak;
}

function computeRecommendations() {
  const completed = Object.keys(getSkillProgressMap()).filter((skillId) => getSkillProgressPercent(skillId) === 100);
  const saved = getSavedSkills();
  const recs = [];
  completed.forEach((id) => {
    const base = getSkillById(id);
    if (!base) return;
    skillCatalog.forEach((s) => {
      if (s.id === id) return;
      if (saved.includes(s.id)) return;
      if (getSkillProgressPercent(s.id) === 100) return;
      if (s.category === base.category && !recs.includes(s.id)) recs.push(s.id);
    });
  });
  // fallback: popular picks
  if (!recs.length) {
    recs.push(...skillCatalog.slice(0, 5).map((s) => s.id));
  }
  return recs.slice(0, 6).map((id) => getSkillById(id)).filter(Boolean);
}

function generateCertificate(skillId) {
  const skill = getSkillById(skillId);
  const user = getCurrentUser() || { name: 'Guest Learner' };
  const date = new Date().toLocaleDateString();
  const html = `
    <html><head><title>Certificate</title>
    <style>body{font-family:Arial;text-align:center;padding:60px;background:#f7f7fb} .card{border:4px solid #6d28d9;padding:40px;border-radius:12px;background:white} h1{color:#6d28d9} p{color:#333}</style>
    </head><body><div class="card"><h1>Certificate of Completion</h1><p>This certifies that</p><h2>${user.name}</h2><p>has successfully completed the</p><h3>${skill.title}</h3><p>on ${date}</p></div></body></html>`;
  const win = window.open('', '_blank');
  if (win) {
    win.document.write(html);
    win.document.close();
  }
}

function getRecentlyViewed() {
  return readStorage(STORAGE_KEYS.recentSkills, []);
}

function saveRecentlyViewed(skills) {
  writeStorage(STORAGE_KEYS.recentSkills, skills);
}

function addRecentlyViewed(skillId) {
  const recent = getRecentlyViewed().filter((id) => id !== skillId);
  recent.unshift(skillId);
  saveRecentlyViewed(recent.slice(0, 4));
}

function getSavedLessons() {
  return readStorage(STORAGE_KEYS.savedLessons, []);
}

function saveSavedLessons(list) {
  writeStorage(STORAGE_KEYS.savedLessons, list);
}

function toggleLessonBookmark(skillId, lessonTitle) {
  const key = `${skillId}::${lessonTitle}`;
  const saved = getSavedLessons();
  const idx = saved.indexOf(key);
  if (idx >= 0) {
    saved.splice(idx, 1);
  } else {
    saved.push(key);
  }
  saveSavedLessons(saved);
  return idx < 0;
}

function isLessonBookmarked(skillId, lessonTitle) {
  const key = `${skillId}::${lessonTitle}`;
  return getSavedLessons().includes(key);
}

function addTimeSpent(skillId, seconds) {
  const map = readStorage(STORAGE_KEYS.timeSpent, {});
  map[skillId] = (map[skillId] || 0) + seconds;
  writeStorage(STORAGE_KEYS.timeSpent, map);
}

function getSkillById(skillId) {
  const skill = skillCatalog.find((entry) => entry.id === skillId) || null;
  return skill ? normalizeSkill(skill) : null;
}

function getSkillProgressPercent(skillId) {
  const skill = getSkillById(skillId);
  if (!skill) return 0;
  const progress = getSkillProgress(skillId);
  const completedCount = progress.completedLessons?.length || 0;
  return Math.round((completedCount / skill.lessons.length) * 100);
}

function updateAuthLinks() {
  const currentUser = getCurrentUser();
  const loginLinks = document.querySelectorAll('[data-auth="login"]');
  const signupLinks = document.querySelectorAll('[data-auth="signup"]');

  loginLinks.forEach((link) => {
    link.textContent = currentUser ? "Dashboard" : "Login";
    link.href = currentUser ? "dashboard.html" : "login.html";
  });

  signupLinks.forEach((link) => {
    link.style.display = currentUser ? "none" : "inline-flex";
  });
}

function applyTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const isDark = savedTheme === "dark";

  body.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";

  if (themeToggle) {
    const icon = themeToggle.querySelector(".theme-toggle__icon");
    if (icon) {
      icon.textContent = isDark ? "🌙" : "☀️";
    }
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }
}

if (themeToggle) {
  applyTheme();

  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";

    const icon = themeToggle.querySelector(".theme-toggle__icon");
    if (icon) {
      icon.textContent = isDark ? "🌙" : "☀️";
    }
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function ensureProtectedAccess() {
  const page = window.location.pathname.split("/").pop();
  const protectedPages = ["dashboard.html", "profile.html", "saved-skills.html"];
  if (protectedPages.includes(page) && !getCurrentUser()) {
    window.location.href = "login.html";
  }
}

function injectQuickNavigation() {
  const existingNav = document.querySelector(".quick-nav");
  if (existingNav) return;

  const quickNav = document.createElement("div");
  quickNav.className = "quick-nav";
  quickNav.setAttribute("aria-label", "Quick page navigation");
  quickNav.innerHTML = `
    <div class="container">
      <nav class="quick-nav__links">
        <a class="quick-nav__link" href="index.html">Home</a>
        <a class="quick-nav__link" href="browse.html">Browse</a>
        <a class="quick-nav__link" href="dashboard.html">Dashboard</a>
        <a class="quick-nav__link" href="swap.html">Swap</a>
        <a class="quick-nav__link" href="communities.html">Communities</a>
        <a class="quick-nav__link" href="saved-skills.html">Saved</a>
        <a class="quick-nav__link" href="about.html">About</a>
        <a class="quick-nav__link" href="contact.html">Contact</a>
      </nav>
    </div>
  `;

  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    siteHeader.insertAdjacentElement("afterend", quickNav);
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".quick-nav__link").forEach((link) => {
    const targetPage = link.getAttribute("href")?.split("/").pop() || "index.html";
    link.classList.toggle("active", currentPage === targetPage);
  });
}

function attachBrowseInteractions() {
  const searchInput = document.querySelector(".skill-search");
  const browseGrid = document.querySelector(".browse-grid");
  const learningPanel = document.querySelector(".learning-panel__content");
  const filterTags = document.querySelectorAll(".filter-tag");
  const mentorPanel = document.querySelector(".mentor-panel");
  let activeFilter = "all";

  function renderCatalogCards() {
    if (!browseGrid) return;

    browseGrid.innerHTML = skillCatalog.map((skill) => `
      <article class="skill-card" data-skill-id="${skill.id}" data-category="${skill.category}" data-title="${skill.title}">
        <div class="skill-card__top">
          <h3>${skill.title}</h3>
          <span class="pill">${skill.level}</span>
        </div>
        <p>${skill.description}</p>
        <div class="skill-card__actions">
          <button class="btn btn-small learn-btn" type="button">Start from beginning</button>
          <button class="btn btn-secondary btn-small save-btn" type="button">Save for later</button>
        </div>
      </article>
    `).join("");

    browseGrid.querySelectorAll(".skill-card").forEach((card) => {
      const skillId = card.dataset.skillId;
      const skill = getSkillById(skillId);
      const searchText = `${skill?.title || ""} ${skill?.category || ""} ${skill?.description || ""} ${(skill?.objectives || []).join(" ")} ${(skill?.lessons || []).join(" ")}`.toLowerCase();
      card.dataset.searchText = searchText;

      const learnButton = card.querySelector(".learn-btn");
      const saveButton = card.querySelector(".save-btn");

      learnButton?.addEventListener("click", () => {
        const firstLesson = skill?.lessons?.[0] || skill?.lessonDetails?.[0]?.title || "";
        addRecentlyViewed(skillId);
        window.location.href = `skill.html?skill=${skillId}${firstLesson ? `&lesson=${encodeURIComponent(firstLesson)}` : ""}`;
      });

      card.addEventListener("click", (event) => {
        if (event.target.closest("button")) return;
        const firstLesson = skill?.lessons?.[0] || skill?.lessonDetails?.[0]?.title || "";
        addRecentlyViewed(skillId);
        window.location.href = `skill.html?skill=${skillId}${firstLesson ? `&lesson=${encodeURIComponent(firstLesson)}` : ""}`;
      });

      saveButton?.addEventListener("click", (event) => {
        event.stopPropagation();
        const currentUser = getCurrentUser();

        if (!currentUser) {
          window.location.href = "login.html";
          return;
        }

        const saved = getSavedSkills();
        if (!saved.includes(skillId)) {
          saved.push(skillId);
          saveSavedSkills(saved);
        }
        if (learningPanel) {
          const title = card.dataset.title || "Skill";
          learningPanel.innerHTML = `<h3>${title} saved</h3><p>You can revisit it anytime from your dashboard or saved skills page.</p>`;
        }
      });
    });

    applyFilters();
  }

  function applyFilters() {
    const skillCards = browseGrid ? browseGrid.querySelectorAll(".skill-card") : [];
    const searchValue = searchInput?.value.toLowerCase().trim() || "";

    skillCards.forEach((card) => {
      const category = card.dataset.category || "";
      const searchText = card.dataset.searchText || "";
      const matchesSearch = searchText.includes(searchValue);
      const matchesCategory = activeFilter === "all" || category === activeFilter;
      card.classList.toggle("is-hidden", !(matchesSearch && matchesCategory));
    });

    if (learningPanel) {
      if (!searchValue) {
        learningPanel.innerHTML = `<h3>Learning path</h3><p>Select a skill to see a short, actionable path for learning it.</p>`;
      } else {
        const matches = [];
        skillCatalog.forEach((s) => {
          const lessons = s.curriculum ? Object.values(s.curriculum).flat() : s.lessonDetails || s.lessons || [];
          lessons.forEach((l) => {
            const title = l.title || l;
            const text = `${s.title} ${title} ${s.category} ${s.description || ""}`.toLowerCase();
            if (text.includes(searchValue)) {
              matches.push({ skillId: s.id, skillTitle: s.title, lessonTitle: title });
            }
          });
        });

        if (matches.length) {
          learningPanel.innerHTML = `
            <h3>Quick results</h3>
            <div class="quick-results">
              ${matches.slice(0, 6).map((match) => `<div class="quick-item"><a href="skill.html?skill=${match.skillId}&lesson=${encodeURIComponent(match.lessonTitle)}">${match.skillTitle} — ${match.lessonTitle}</a></div>`).join("")}
            </div>
          `;
        } else {
          learningPanel.innerHTML = `<h3>No direct lesson matches</h3><p>Try broader keywords or browse by category.</p>`;
        }
      }
    }

    if (mentorPanel) {
      const mentorMatches = [
        { name: "Aliyu", skill: "HTML & CSS", focus: "Mentoring beginners" },
        { name: "Mina", skill: "JavaScript", focus: "Live coding sessions" },
        { name: "Sara", skill: "UI/UX Design", focus: "Portfolio reviews" }
      ].filter((entry) => `${entry.name} ${entry.skill} ${entry.focus}`.toLowerCase().includes(searchValue));

      mentorPanel.innerHTML = mentorMatches.length
        ? `<h3>Matching mentors</h3><div class="quick-results">${mentorMatches.map((entry) => `<div class="quick-item">${entry.name} — ${entry.skill} (${entry.focus})</div>`).join("")}</div>`
        : `<h3>Mentor community</h3><p>Join a study group or request support from experienced peers.</p>`;
    }
  }

  searchInput?.addEventListener("input", applyFilters);

  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      activeFilter = tag.dataset.filter || "all";
      filterTags.forEach((item) => item.classList.toggle("active", item === tag));
      applyFilters();
    });
  });

  renderCatalogCards();
}

function renderDashboard() {
  const profileContainer = document.getElementById("dashboard-profile");
  const savedList = document.getElementById("saved-skills-list");
  const completedList = document.getElementById("completed-lessons-list");
  const progressOverview = document.getElementById("progress-overview");
  const recentList = document.getElementById("recent-skills-list");
  const currentUser = getCurrentUser();

  if (!currentUser) return;

  if (profileContainer) {
    const goals = [currentUser.learnGoals, currentUser.teachGoals].filter(Boolean).join(" • ");
    profileContainer.innerHTML = `
      <h3>${currentUser.name}</h3>
      <p>${currentUser.bio || "Keep building your learning journey with SkillSwap."}</p>
      <p><strong>Email:</strong> ${currentUser.email}</p>
      <p><strong>Role:</strong> ${currentUser.role || "Learner"}</p>
      ${goals ? `<p><strong>Learning focus:</strong> ${goals}</p>` : ""}
      <p><strong>Joined:</strong> ${currentUser.joinedAt ? new Date(currentUser.joinedAt).toLocaleDateString() : "Recently"}</p>
    `;
  }

  // Stats: total time, streak, enrolled/completed
  const timeMap = readStorage(STORAGE_KEYS.timeSpent, {});
  const totalSeconds = Object.values(timeMap).reduce((s, v) => s + (v || 0), 0);
  const totalMinutes = Math.round(totalSeconds / 60);
  const streak = getLearningStreak();
  const recommendations = computeRecommendations();

  const statsEl = document.getElementById('dashboard-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-row">
        <div class="stat-block"><strong>${totalMinutes}</strong><div class="stat-label">minutes learned</div></div>
        <div class="stat-block"><strong>${streak}</strong><div class="stat-label">day streak</div></div>
        <div class="stat-block"><strong>${getSavedSkills().length}</strong><div class="stat-label">skills saved</div></div>
      </div>
      <div class="stat-row">
        <div class="stat-block"><strong>${recommendations.length}</strong><div class="stat-label">new recommendations</div></div>
        <div class="stat-block"><strong>${Object.keys(getSkillProgressMap()).length}</strong><div class="stat-label">skills in progress</div></div>
      </div>
    `;
  }

  if (savedList) {
    const savedSkills = getSavedSkills();
    if (savedSkills.length) {
      savedList.innerHTML = `
        <div class="badge-list">
          ${savedSkills
            .map((skillId) => {
              const skill = getSkillById(skillId);
              return `<div class="badge-item">${skill ? skill.title : skillId}</div>`;
            })
            .join("")}
        </div>
      `;
    } else {
      savedList.innerHTML = '<p>No saved skills yet. Browse and save your first topic.</p>';
    }
  }

  if (completedList) {
    const progressMap = getSkillProgressMap();
    const completedLessons = Object.values(progressMap).flatMap((entry) => entry.completedLessons || []);

    if (completedLessons.length) {
      completedList.innerHTML = `
        <div class="lesson-list">
          ${completedLessons.map((lesson) => `<div class="lesson-item"><span>${lesson}</span><span class="status-pill">Done</span></div>`).join("")}
        </div>
      `;
    } else {
      completedList.innerHTML = '<p>Complete your first lesson to build momentum.</p>';
    }
  }

  if (progressOverview) {
    const savedSkills = getSavedSkills();
    const progressMap = getSkillProgressMap();
    const completedLessons = Object.values(progressMap).flatMap((entry) => entry.completedLessons || []);
    const skillCount = Math.max(savedSkills.length || 1, 1);
    const percent = Math.min(100, Math.round((completedLessons.length / Math.max(skillCount * 3, 3)) * 100));

    progressOverview.innerHTML = `
      <div class="stat-list">
        <div class="stat-item"><strong>${savedSkills.length}</strong> skills enrolled</div>
        <div class="stat-item"><strong>${completedLessons.length}</strong> lessons completed</div>
        <div class="stat-item"><strong>${percent}%</strong> progress</div>
      </div>
      <div class="progress-bar"><span style="width:${percent}%"></span></div>
    `;
  }

  if (recentList) {
    const recent = getRecentlyViewed();
    if (recent.length) {
      recentList.innerHTML = `
        <div class="badge-list">
          ${recent
            .map((skillId) => {
              const skill = getSkillById(skillId);
              return `<div class="badge-item">${skill ? `<a href="skill.html?skill=${skill.id}">${skill.title}</a>` : skillId}</div>`;
            })
            .join("")}
        </div>
      `;
    } else {
      recentList.innerHTML = '<p>Open a skill to see it appear here.</p>';
    }
  }

  const recEl = document.getElementById('dashboard-recommendations');
  if (recEl) {
    recEl.innerHTML = recommendations.length
      ? `<div class="rec-list">${recommendations.map((s) => `<div class="rec-item"><a href="skill.html?skill=${s.id}">${s.title}</a>${getSkillProgressPercent(s.id) === 100 ? ' ✅' : ''}</div>`).join('')}</div>`
      : '<p>No recommendations yet.</p>';
  }
}

function renderSavedSkillsPage() {
  const container = document.getElementById("saved-skill-list");
  if (!container) return;

  const savedSkills = getSavedSkills();
  if (!savedSkills.length) {
    container.innerHTML = '<p class="auth-link">No saved skills yet. Visit the browse page and save a topic to build your list.</p>';
    return;
  }

  container.innerHTML = savedSkills
    .map((skillId) => {
      const skill = getSkillById(skillId);
      if (!skill) return "";
      return `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <p><strong>Level:</strong> ${skill.level}</p>
          <div class="skill-card__actions">
            <a href="skill.html?skill=${skill.id}" class="btn btn-small">Continue</a>
            <button class="btn btn-secondary btn-small" type="button" data-remove-skill="${skill.id}">Remove</button>
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll('[data-remove-skill]').forEach((button) => {
    button.addEventListener("click", () => {
      const skillId = button.getAttribute("data-remove-skill");
      const updated = getSavedSkills().filter((id) => id !== skillId);
      saveSavedSkills(updated);
      renderSavedSkillsPage();
    });
  });
}

function renderSkillDetailPage() {
  const detailContainer = document.getElementById("skill-detail");
  const lessonList = document.getElementById("lesson-list");
  const notesBox = document.getElementById("notes-box");
  const completeButton = document.getElementById("complete-lesson");
  const continueButton = document.getElementById("continue-learning");
  const params = new URLSearchParams(window.location.search);
  const skillId = params.get("skill") || "html-css";
  const skill = getSkillById(skillId);

  if (!skill) {
    if (detailContainer) detailContainer.innerHTML = '<h2>Skill not found</h2>';
    return;
  }

  addRecentlyViewed(skill.id);

  const progress = getSkillProgress(skill.id);
  const progressPercent = getSkillProgressPercent(skill.id);
  const curriculumSections = getSkillCurriculumSections(skill);
  const courseLessons = curriculumSections.flatMap(([level, lessons]) =>
    lessons.map((lesson) => ({
      ...lesson,
      level: level.charAt(0).toUpperCase() + level.slice(1),
    }))
  );

  if (!progress.activeLesson && courseLessons.length) {
    saveSkillProgress(skill.id, { activeLesson: courseLessons[0].title });
  }

  if (detailContainer) {
    detailContainer.innerHTML = `
      <p class="eyebrow">${skill.category}</p>
      <h2>${skill.title}</h2>
      <p class="detail-intro">${skill.intro || skill.description}</p>
      <p class="detail-intro">This skill is now backed by a guided shortcut path so learners can follow it from the first lesson to a finished project.</p>
      <div class="detail-meta">
        <span class="meta-pill"><strong>Level:</strong> ${skill.level}</span>
        <span class="meta-pill"><strong>Estimated time:</strong> ${skill.time}</span>
      </div>
      <p><strong>Outcome:</strong> ${skill.outcome}</p>
      <p><strong>Current progress:</strong> ${progressPercent}%</p>
      <div class="progress-bar"><span style="width:${progressPercent}%"></span></div>
      <p class="active-lesson">Current lesson: <strong>${progress.activeLesson || courseLessons[0]?.title || skill.lessons[0]}</strong></p>
      <h3>Course roadmap</h3>
      <ol class="roadmap-list">${(skill.roadmap || []).map((step) => `<li>${step}</li>`).join("")}</ol>
      <h3>Learning path</h3>
      <div class="curriculum-grid">
        ${curriculumSections.map(([level, lessons]) => `
          <div class="curriculum-card">
            <div class="module-level">${level.charAt(0).toUpperCase() + level.slice(1)}</div>
            <ul>${lessons.map((lesson) => `<li>${lesson.title}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
      <h3>Projects you will build</h3>
      <ul class="course-project-list">${(skill.projects || skill.practice || []).map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="detail-actions">
        <button class="btn" id="start-learning-btn" type="button">Learn with SkillSwap</button>
        <a class="btn btn-secondary" href="swap.html">Learn from students</a>
        <button class="btn btn-secondary" id="save-skill-btn" type="button">Save skill</button>
      </div>
      <div id="lesson-view" class="lesson-view" aria-live="polite"></div>
    `;

    document.getElementById("start-learning-btn")?.addEventListener("click", () => {
      const firstLesson = courseLessons[0]?.title || skill.lessons[0];
      saveSkillProgress(skill.id, { activeLesson: firstLesson });
      renderSkillDetailPage();
      renderLessonContent(skill, firstLesson);
    });

    document.getElementById("save-skill-btn")?.addEventListener("click", () => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        window.location.href = "login.html";
        return;
      }
      const saved = getSavedSkills();
      if (!saved.includes(skill.id)) {
        saved.push(skill.id);
        saveSavedSkills(saved);
      }
      renderSkillDetailPage();
    });
  }

  // If a lesson query param is present, open that lesson immediately
  const lessonParam = params.get('lesson');
  if (lessonParam) {
    saveSkillProgress(skill.id, { activeLesson: lessonParam });
    renderLessonContent(skill, lessonParam);
  } else if (progress.activeLesson) {
    renderLessonContent(skill, progress.activeLesson);
  }

  if (lessonList) {
    const lessonEntries = courseLessons.length ? courseLessons : skill.lessonDetails || skill.lessons.map((lesson) => ({ title: lesson, description: "Continue building practical experience with this lesson." }));
    lessonList.innerHTML = lessonEntries
      .map((lesson) => {
        const lessonTitle = lesson.title;
        const isCompleted = progress.completedLessons?.includes(lessonTitle);
        const isActive = progress.activeLesson === lessonTitle;
        return `
          <div class="lesson-item ${isCompleted ? "is-complete" : ""}">
            <div>
              <button class="lesson-link" data-lesson="${lessonTitle}" type="button"><strong>${lessonTitle}</strong></button>
              <p>${lesson.description}</p>
              <span class="status-pill">${isCompleted ? "Done" : isActive ? "In progress" : lesson.level || "Next"}</span>
            </div>
            <button class="btn btn-small mark-lesson-btn" data-lesson="${lessonTitle}" type="button">${isCompleted ? "Done" : "Mark done"}</button>
          </div>
        `;
      })
      .join("");

    lessonList.querySelectorAll(".mark-lesson-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const lessonTitle = button.getAttribute("data-lesson");
        const updated = getSkillProgress(skill.id);
        const completedLessons = updated.completedLessons || [];
        if (!completedLessons.includes(lessonTitle)) {
          completedLessons.push(lessonTitle);
        }
        saveSkillProgress(skill.id, { completedLessons, activeLesson: lessonTitle });
        renderSkillDetailPage();
      });
    });
    lessonList.querySelectorAll('.lesson-link').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lessonTitle = btn.getAttribute('data-lesson');
        saveSkillProgress(skill.id, { activeLesson: lessonTitle });
        renderLessonContent(skill, lessonTitle);
        renderSkillDetailPage();
      });
    });
  }

  if (notesBox) {
    notesBox.value = progress.notes || "";
    notesBox.addEventListener("input", (event) => {
      saveSkillProgress(skill.id, { notes: event.target.value });
    });
  }

  completeButton?.addEventListener("click", () => {
    const activeLesson = progress.activeLesson || courseLessons[0]?.title || skill.lessons[0];
    const updated = getSkillProgress(skill.id);
    const completedLessons = updated.completedLessons || [];
    if (!completedLessons.includes(activeLesson)) {
      completedLessons.push(activeLesson);
    }
    const nextLesson = courseLessons[courseLessons.findIndex((entry) => entry.title === activeLesson) + 1]?.title;
    saveSkillProgress(skill.id, { completedLessons, activeLesson: nextLesson || activeLesson });
    renderSkillDetailPage();
  });

  continueButton?.addEventListener("click", () => {
    const lessonTitles = courseLessons.length ? courseLessons.map((entry) => entry.title) : skill.lessons;
    const currentIndex = lessonTitles.indexOf(progress.activeLesson || lessonTitles[0]);
    const nextLesson = lessonTitles[Math.min(currentIndex + 1, lessonTitles.length - 1)];
    saveSkillProgress(skill.id, { activeLesson: nextLesson });
    renderSkillDetailPage();
  });
}

lessonRenderer = window.SkillSwapLearningUI?.createLessonRenderer({
  getSkillById,
  getSkillLessonEntries,
  getSkillCurriculumSections,
  getSkillProgress,
  saveSkillProgress,
  isLessonBookmarked,
  toggleLessonBookmark,
  addTimeSpent,
  renderSkillDetailPage,
  defaultCodeFor
});

function handleLoginSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";
  const status = document.getElementById("login-status");
  const users = getUsers();
  const user = users.find((entry) => entry.email === email);

  if (!user) {
    if (status) status.textContent = "No account found for that email. Please sign up first.";
    return;
  }

  if (user.password !== password) {
    if (status) status.textContent = "The password you entered is incorrect.";
    return;
  }

  saveCurrentUser(user);
  if (status) status.textContent = "Login successful. Redirecting...";
  window.location.href = "dashboard.html";
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";
  const bio = formData.get("bio")?.toString().trim() || "";
  const learnGoals = formData.get("learnGoals")?.toString().trim() || "";
  const teachGoals = formData.get("teachGoals")?.toString().trim() || "";
  const role = formData.get("role")?.toString().trim() || "Learner";
  const status = document.getElementById("signup-status");
  const users = getUsers();

  if (!name || !email || !password) {
    if (status) status.textContent = "Please fill in your name, email, and password.";
    return;
  }

  if (password.length < 6) {
    if (status) status.textContent = "Password should be at least 6 characters long.";
    return;
  }

  if (users.some((user) => user.email === email)) {
    if (status) status.textContent = "That email already has an account. Please log in instead.";
    return;
  }

  const newUser = {
    name,
    email,
    password,
    bio,
    learnGoals,
    teachGoals,
    role,
    joinedAt: new Date().toISOString(),
    mentorStatus: role === "Teacher" || role === "Both" ? "Mentor candidate" : "Learner"
  };
  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);
  saveSavedSkills(["html-css", "javascript", "python"]);
  saveSkillProgress("html-css", { completedLessons: [], activeLesson: "Introduction to HTML" });
  saveSkillProgress("javascript", { completedLessons: [], activeLesson: "Variables" });
  saveSkillProgress("python", { completedLessons: [], activeLesson: "Getting Started" });
  if (status) status.textContent = "Account created successfully. Redirecting...";
  window.location.href = "dashboard.html";
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const bio = formData.get("bio")?.toString().trim() || "";
  const status = document.getElementById("profile-status");
  const currentUser = getCurrentUser();
  const users = getUsers();

  if (!currentUser) return;

  const duplicate = users.find((user) => user.email === email && user.email !== currentUser.email);
  if (duplicate) {
    if (status) status.textContent = "That email is already in use.";
    return;
  }

  const learnGoals = formData.get("learnGoals")?.toString().trim() || "";
  const teachGoals = formData.get("teachGoals")?.toString().trim() || "";
  const updatedUser = { ...currentUser, name, email, bio, learnGoals, teachGoals };
  const index = users.findIndex((user) => user.email === currentUser.email);
  if (index >= 0) {
    users[index] = updatedUser;
    saveUsers(users);
  }
  saveCurrentUser(updatedUser);
  if (status) status.textContent = "Your profile has been updated.";
}

function attachAuthForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const profileForm = document.getElementById("profile-form");
  const logoutButton = document.getElementById("logout-btn");

  loginForm?.addEventListener("submit", handleLoginSubmit);
  signupForm?.addEventListener("submit", handleSignupSubmit);
  profileForm?.addEventListener("submit", handleProfileSubmit);
  logoutButton?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    window.location.href = "login.html";
  });

  if (profileForm) {
    const currentUser = getCurrentUser();
    if (currentUser) {
      profileForm.querySelector('input[name="name"]').value = currentUser.name || "";
      profileForm.querySelector('input[name="email"]').value = currentUser.email || "";
      profileForm.querySelector('textarea[name="bio"]').value = currentUser.bio || "";
      profileForm.querySelector('input[name="learnGoals"]').value = currentUser.learnGoals || "";
      profileForm.querySelector('input[name="teachGoals"]').value = currentUser.teachGoals || "";
    }
  }
}

function attachContactForm() {
  const contactForm = document.querySelector(".contact-form");
  const formStatus = document.querySelector(".form-status");

  if (contactForm && !contactForm.id) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name")?.toString().trim() || "";
      const email = formData.get("email")?.toString().trim() || "";
      const subject = formData.get("subject")?.toString().trim() || "";
      const message = formData.get("message")?.toString().trim() || "";

      if (!name || !email || !subject || !message) {
        if (formStatus) {
          formStatus.textContent = "Please fill in every field before sending your message.";
        }
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        if (formStatus) {
          formStatus.textContent = "Please enter a valid email address.";
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = "Thanks! Your message has been received. We will get back to you soon.";
      }

      contactForm.reset();
    });
  }
}

updateAuthLinks();
ensureProtectedAccess();
injectQuickNavigation();
attachBrowseInteractions();
renderDashboard();
renderSavedSkillsPage();
renderSkillDetailPage();
attachAuthForms();
attachContactForm();

function escapeHTML(value) {
  const element = document.createElement("div");
  element.textContent = String(value || "");
  return element.innerHTML;
}

function getSwapRequests() {
  return readStorage(STORAGE_KEYS.swapRequests, []);
}

function saveSwapRequests(requests) {
  writeStorage(STORAGE_KEYS.swapRequests, requests);
}

const demoPeers = [
  { id: "maya", name: "Maya Okafor", teaches: ["JavaScript", "UI/UX Design"], learns: ["Public Speaking", "Photography"], availability: "Tue & Thu evenings", rating: "4.9" },
  { id: "sam", name: "Samuel Bello", teaches: ["Python", "AI Automation"], learns: ["Graphic Design", "Video Editing"], availability: "Weekends", rating: "4.8" },
  { id: "zainab", name: "Zainab Musa", teaches: ["Public Speaking", "Graphic Design"], learns: ["HTML & CSS", "Mathematics"], availability: "Mon & Wed afternoons", rating: "5.0" },
  { id: "david", name: "David Chen", teaches: ["Photography", "Video Editing"], learns: ["AI Prompt Engineering", "JavaScript"], availability: "Fri evenings", rating: "4.7" },
  { id: "lina", name: "Lina Ahmed", teaches: ["Mathematics", "HTML & CSS"], learns: ["Python", "UI/UX Design"], availability: "Flexible", rating: "4.9" }
];

function attachSwapPage() {
  const form = document.getElementById("swap-form");
  if (!form) return;
  const learnSelect = document.getElementById("swap-learn");
  const teachSelect = document.getElementById("swap-teach");
  const status = document.getElementById("swap-status");
  const options = skillCatalog.map((skill) => `<option value="${escapeHTML(skill.title)}">${escapeHTML(skill.title)}</option>`).join("");
  learnSelect.innerHTML = `<option value="">Select a skill</option>${options}`;
  teachSelect.innerHTML = `<option value="">Select a skill</option>${options}`;
  const user = getCurrentUser();
  if (user) {
    const learnSuggestion = skillCatalog.find((skill) => (user.learnGoals || "").toLowerCase().includes(skill.title.toLowerCase()));
    const teachSuggestion = skillCatalog.find((skill) => (user.teachGoals || "").toLowerCase().includes(skill.title.toLowerCase()));
    if (learnSuggestion) learnSelect.value = learnSuggestion.title;
    if (teachSuggestion) teachSelect.value = teachSuggestion.title;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (learnSelect.value === teachSelect.value) { status.textContent = "Choose two different skills so the exchange is fair."; return; }
    renderSwapMatches(learnSelect.value, teachSelect.value, new FormData(form).get("message"));
    status.textContent = "Here are peers with complementary skills. Send a request when you find the right fit.";
  });
  renderSwapRequests();
}

function renderSwapMatches(learnSkill, teachSkill, message) {
  const target = document.getElementById("swap-matches");
  if (!target) return;
  const matches = demoPeers.filter((peer) => peer.teaches.includes(learnSkill) || peer.learns.includes(teachSkill));
  target.innerHTML = (matches.length ? matches : demoPeers).map((peer) => `
    <article class="skill-card"><div class="skill-card__top"><h3>${escapeHTML(peer.name)}</h3><span class="pill">${peer.rating} ★</span></div>
      <p>Teaches: ${escapeHTML(peer.teaches.join(", "))}</p><p>Wants to learn: ${escapeHTML(peer.learns.join(", "))}</p>
      <div class="match-meta"><span class="meta-pill">${escapeHTML(peer.availability)}</span><span class="meta-pill">Verified peer</span></div>
      <div class="skill-card__actions"><button class="btn btn-small send-swap-btn" data-peer="${peer.id}" data-learn="${escapeHTML(learnSkill)}" data-teach="${escapeHTML(teachSkill)}" data-message="${escapeHTML(message || "")}" type="button">Send swap request</button></div></article>`).join("");
  target.querySelectorAll(".send-swap-btn").forEach((button) => button.addEventListener("click", () => {
    const user = getCurrentUser();
    if (!user) { window.location.href = "login.html"; return; }
    const peer = demoPeers.find((entry) => entry.id === button.dataset.peer);
    const requests = getSwapRequests();
    if (requests.some((request) => request.peerId === peer.id && request.status !== "Cancelled")) { alert("You already have an active request with this student."); return; }
    requests.unshift({ id: `${Date.now()}-${peer.id}`, peerId: peer.id, peerName: peer.name, learnSkill: button.dataset.learn, teachSkill: button.dataset.teach, message: button.dataset.message, status: "Requested", createdAt: new Date().toLocaleDateString() });
    saveSwapRequests(requests); renderSwapRequests(); button.textContent = "Request sent"; button.disabled = true;
  }));
}

function renderSwapRequests() {
  const target = document.getElementById("swap-requests");
  const requests = getSwapRequests();
  if (target) {
    target.innerHTML = requests.length ? requests.map((request) => `<article class="swap-request"><div class="swap-request__top"><div><h3>${escapeHTML(request.peerName)}</h3><p>You learn <strong>${escapeHTML(request.learnSkill)}</strong> · You teach <strong>${escapeHTML(request.teachSkill)}</strong></p></div><span class="status-pill">${escapeHTML(request.status)}</span></div>${request.message ? `<p>“${escapeHTML(request.message)}”</p>` : ""}<div class="swap-request__actions">${request.status === "Requested" ? `<button class="btn btn-small swap-action" data-id="${request.id}" data-status="Confirmed">Confirm session</button>` : ""}${request.status === "Confirmed" ? `<button class="btn btn-small swap-action" data-id="${request.id}" data-status="Completed">Mark completed</button>` : ""}${request.status !== "Completed" && request.status !== "Cancelled" ? `<button class="btn-secondary btn btn-small swap-action" data-id="${request.id}" data-status="Cancelled">Cancel</button>` : ""}</div></article>`).join("") : `<p class="status-pill">No swap requests yet. Use the form above to find a peer.</p>`;
    target.querySelectorAll(".swap-action").forEach((button) => button.addEventListener("click", () => updateSwapStatus(button.dataset.id, button.dataset.status)));
  }
  renderSwapSummary();
}

function updateSwapStatus(id, status) {
  const requests = getSwapRequests().map((request) => request.id === id ? { ...request, status } : request);
  saveSwapRequests(requests); renderSwapRequests();
}

function renderSwapSummary() {
  const target = document.getElementById("dashboard-swaps");
  if (!target) return;
  const requests = getSwapRequests();
  target.innerHTML = requests.length ? `<div class="stat-list">${requests.slice(0, 4).map((request) => `<div class="stat-item"><strong>${escapeHTML(request.peerName)}</strong> — ${escapeHTML(request.learnSkill)} for ${escapeHTML(request.teachSkill)} <span class="status-pill">${escapeHTML(request.status)}</span></div>`).join("")}</div><p class="detail-actions"><a class="btn btn-small" href="swap.html">Manage swaps</a></p>` : `<p>No exchanges yet. <a href="swap.html">Find a student to swap skills with.</a></p>`;
}

attachSwapPage();
renderSwapSummary();

function getJoinedCommunities() { return readStorage(STORAGE_KEYS.communities, []); }
function saveJoinedCommunities(list) { writeStorage(STORAGE_KEYS.communities, list); }
function getDiscussions() { return readStorage(STORAGE_KEYS.discussions, []); }
function saveDiscussions(list) { writeStorage(STORAGE_KEYS.discussions, list); }

const communityData = [
  { skill: "HTML & CSS", members: "1,248", focus: "Build accessible pages, share portfolio feedback, and practise responsive layouts.", group: "Saturday Build Lab" },
  { skill: "JavaScript", members: "986", focus: "Debug together, discuss DOM patterns, and review small app projects.", group: "Tuesday Code Circle" },
  { skill: "Python", members: "842", focus: "Solve practical automation and data problems in a supportive study group.", group: "Python Problem Club" },
  { skill: "UI/UX Design", members: "715", focus: "Share case studies, critique flows, and improve product thinking.", group: "Portfolio Review Studio" },
  { skill: "Public Speaking", members: "402", focus: "Practise short talks, receive constructive feedback, and build confidence.", group: "Friday Speaker Practice" },
  { skill: "Entrepreneurship", members: "369", focus: "Validate ideas, discuss customer interviews, and learn from student founders.", group: "Startup Idea Sprint" }
];

function attachProfileImage() {
  const input = document.getElementById("profile-photo-input");
  const preview = document.getElementById("profile-photo-preview");
  if (!input || !preview) return;
  const user = getCurrentUser();
  preview.src = user?.photo || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='100%25' height='100%25' fill='%236d28d9'/%3E%3Ctext x='50%25' y='58%25' text-anchor='middle' font-family='Arial' font-size='34' fill='white'%3EYou%3C/text%3E%3C/svg%3E";
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert("Please choose an image smaller than 2 MB."); input.value = ""; return; }
    const reader = new FileReader();
    reader.onload = () => { preview.src = String(reader.result); const current = getCurrentUser(); if (current) { const updated = { ...current, photo: String(reader.result) }; saveCurrentUser(updated); const users = getUsers(); const index = users.findIndex((entry) => entry.email === current.email); if (index >= 0) { users[index] = updated; saveUsers(users); } } };
    reader.readAsDataURL(file);
  });
}

function renderCommunities() {
  const container = document.getElementById("community-list");
  if (!container) return;
  const joined = getJoinedCommunities();
  const render = (items) => { container.innerHTML = items.map((community) => `<article class="skill-card"><div class="skill-card__top"><h3>${escapeHTML(community.skill)} Community</h3><span class="pill">${community.members} members</span></div><p>${escapeHTML(community.focus)}</p><div class="match-meta"><span class="meta-pill">${escapeHTML(community.group)}</span><span class="meta-pill">Peer mentors</span></div><div class="skill-card__actions"><button class="btn btn-small join-community" data-skill="${escapeHTML(community.skill)}" type="button">${joined.includes(community.skill) ? "Joined" : "Join community"}</button><a class="btn btn-secondary btn-small" href="swap.html">Request mentor</a></div></article>`).join(""); container.querySelectorAll(".join-community").forEach((button) => button.addEventListener("click", () => { const skill = button.dataset.skill; const current = getJoinedCommunities(); if (!current.includes(skill)) { current.push(skill); saveJoinedCommunities(current); } renderCommunities(); renderCommunityDashboard(); })); };
  render(communityData);
  const search = document.getElementById("community-search");
  search?.addEventListener("input", () => { const term = search.value.toLowerCase(); render(communityData.filter((item) => `${item.skill} ${item.focus} ${item.group}`.toLowerCase().includes(term))); });
}

function attachDiscussionForm() {
  const form = document.getElementById("discussion-form");
  if (!form) return;
  const select = document.getElementById("discussion-skill");
  select.innerHTML = communityData.map((community) => `<option value="${escapeHTML(community.skill)}">${escapeHTML(community.skill)} Community</option>`).join("");
  const renderPosts = () => { const box = document.getElementById("discussion-list"); const posts = getDiscussions(); box.innerHTML = posts.length ? posts.map((post) => `<article class="swap-request"><strong>${escapeHTML(post.author)}</strong><span class="status-pill">${escapeHTML(post.skill)}</span><p>${escapeHTML(post.text)}</p></article>`).join("") : `<p class="status-pill">No posts yet. Start the discussion with a focused question.</p>`; };
  form.addEventListener("submit", (event) => { event.preventDefault(); const text = new FormData(form).get("post")?.toString().trim(); if (!text) return; const user = getCurrentUser(); const posts = getDiscussions(); posts.unshift({ author: user?.name || "SkillSwap learner", skill: select.value, text, createdAt: Date.now() }); saveDiscussions(posts.slice(0, 20)); form.reset(); document.getElementById("discussion-status").textContent = "Your post is live in the community."; renderPosts(); });
  renderPosts();
}

function renderCommunityDashboard() {
  const communities = document.getElementById("dashboard-communities");
  if (communities) { const joined = getJoinedCommunities(); communities.innerHTML = joined.length ? `<div class="badge-list">${joined.map((skill) => `<div class="badge-item">${escapeHTML(skill)} Community</div>`).join("")}</div><p class="detail-actions"><a class="btn btn-small" href="communities.html">Explore groups</a></p>` : `<p>Join a focused community and study group.</p><a class="btn btn-small" href="communities.html">Explore communities</a>`; }
  const certificates = document.getElementById("dashboard-certificates");
  if (certificates) { const complete = skillCatalog.filter((skill) => getSkillProgressPercent(skill.id) === 100); certificates.innerHTML = complete.length ? `<p>${complete.length} course certificate${complete.length > 1 ? "s" : ""} earned.</p><div class="badge-list">${complete.map((skill) => `<div class="badge-item">${escapeHTML(skill.title)} — Certified</div>`).join("")}</div>` : `<p>Complete a course to unlock a certificate and begin your mentor path.</p><a class="btn btn-small" href="browse.html">Continue learning</a>`; }
}

attachProfileImage();
renderCommunities();
attachDiscussionForm();
renderCommunityDashboard();
