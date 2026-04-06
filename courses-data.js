const phaseGradients = {
  0: "linear-gradient(135deg, #0f8b6d 0%, #13b889 100%)",
  1: "linear-gradient(135deg, #2d6cdf 0%, #6b7cff 100%)",
  2: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
  3: "linear-gradient(135deg, #7c3aed 0%, #b453ff 100%)",
  4: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
  5: "linear-gradient(135deg, #be123c 0%, #fb7185 100%)",
};

function getPhaseGradient(phase) {
  return phaseGradients[phase] || phaseGradients[0];
}

const curriculum = [
  {
    phase: 0,
    phaseTitle: "Developer Mindset and Tools",
    duration: "1 week",
    week: 1,
    classes: [
      {
        classNumber: 1,
        title: "Introduction to Frontend Development",
        duration: "60-90 min",
        topics: [
          "What is frontend development?",
          "HTML, CSS, and JavaScript roles",
          "Career paths in web development",
          "Course overview and expectations",
        ],
        youtubeId: null,
        resources: ["Video", "Slides", "Exercise"],
        learningObjectives: [
          "Understand what frontend development is",
          "Differentiate between HTML, CSS, and JavaScript",
          "See real-world examples of each technology",
        ],
      },
      {
        classNumber: 2,
        title: "Setting Up Your Toolkit",
        duration: "60-90 min",
        topics: [
          "VS Code installation and extensions",
          "Chrome DevTools basics",
          "Terminal and command line",
          "First HTML file",
        ],
        youtubeId: null,
        resources: ["Tutorial", "Guide", "Setup Checklist"],
        learningObjectives: [
          "Install and configure VS Code",
          "Understand basic terminal commands",
          "Create and preview first HTML file",
        ],
      },
    ],
  },
  {
    phase: 1,
    phaseTitle: "HTML Foundations",
    duration: "2 weeks",
    week: 2,
    classes: [
      {
        classNumber: 3,
        title: "HTML Document Structure and Text",
        duration: "60-90 min",
        topics: [
          "DOCTYPE and HTML structure",
          "Head and body elements",
          "Headings and paragraphs",
          "Text formatting tags",
        ],
        youtubeId: null,
        resources: ["Video", "Slides", "Code Examples"],
        learningObjectives: [
          "Understand HTML document skeleton",
          "Use headings and paragraphs correctly",
          "Apply inline text formatting",
        ],
      },
      {
        classNumber: 4,
        title: "Links, Images, and Lists",
        duration: "60-90 min",
        topics: [
          "Anchor tags and links",
          "Images and alt text",
          "Ordered and unordered lists",
          "Nested lists",
        ],
        youtubeId: null,
        resources: ["Interactive Tutorial", "Code Snippets"],
        learningObjectives: [
          "Create absolute and relative links",
          "Embed images with proper alt text",
          "Build ordered and unordered lists",
        ],
      },
      {
        classNumber: 5,
        title: "Tables and Forms (Part 1)",
        duration: "60-90 min",
        topics: [
          "Table structure",
          "Colspan and rowspan",
          "Form basics",
          "Input types",
        ],
        youtubeId: null,
        resources: ["Examples", "Practice"],
        learningObjectives: [
          "Create structured HTML tables",
          "Merge cells using colspan and rowspan",
          "Build basic form inputs",
        ],
      },
      {
        classNumber: 6,
        title: "Forms (Part 2) and Semantic HTML",
        duration: "60-90 min",
        topics: [
          "Advanced form inputs",
          "Labels and accessibility",
          "Semantic elements",
          "Mini project: Personal bio page",
        ],
        youtubeId: null,
        resources: ["Project Brief", "Solution"],
        learningObjectives: [
          "Master all form input types",
          "Understand semantic HTML structure",
          "Build complete contact form",
        ],
      },
    ],
  },
  {
    phase: 2,
    phaseTitle: "CSS Fundamentals",
    duration: "3 weeks",
    week: 4,
    classes: [
      {
        classNumber: 7,
        title: "How CSS Works and Selectors",
        duration: "60-90 min",
        topics: [
          "CSS methods (inline, internal, external)",
          "Basic selectors",
          "Cascade and specificity",
          "Pseudo-classes and pseudo-elements",
        ],
        youtubeId: null,
        resources: ["Visual Guide", "Selector Reference"],
        learningObjectives: [
          "Apply CSS via external stylesheets",
          "Use various CSS selectors correctly",
          "Understand specificity and cascade",
        ],
      },
      {
        classNumber: 8,
        title: "The Box Model and Typography",
        duration: "60-90 min",
        topics: [
          "Content, padding, border, margin",
          "Box-sizing",
          "Font properties",
          "Text styling",
        ],
        youtubeId: null,
        resources: ["Interactive Demo", "Code Examples"],
        learningObjectives: [
          "Understand and manipulate the box model",
          "Style typography effectively",
          "Use DevTools to inspect boxes",
        ],
      },
      {
        classNumber: 9,
        title: "Display and Positioning",
        duration: "60-90 min",
        topics: [
          "Display property values",
          "Position property",
          "Z-index",
          "Centering techniques",
        ],
        youtubeId: null,
        resources: ["Positioning Guide"],
        learningObjectives: [
          "Master the display property",
          "Control element positioning",
          "Create fixed navigation bars",
        ],
      },
      {
        classNumber: 10,
        title: "Flexbox (Part 1)",
        duration: "60-90 min",
        topics: [
          "Flex container and items",
          "Main and cross axes",
          "Justify-content and align-items",
          "Common layouts",
        ],
        youtubeId: null,
        resources: ["Flexbox Playground", "Patterns"],
        learningObjectives: [
          "Understand Flexbox container and items",
          "Master main and cross axis",
          "Create common layouts",
        ],
      },
      {
        classNumber: 11,
        title: "Flexbox (Part 2) and CSS Grid (Part 1)",
        duration: "60-90 min",
        topics: [
          "Flex item properties",
          "Grid basics",
          "Grid template",
          "Gap property",
        ],
        youtubeId: null,
        resources: ["Grid Guide", "Examples"],
        learningObjectives: [
          "Control individual flex items",
          "Understand CSS Grid fundamentals",
          "Create basic grid layouts",
        ],
      },
      {
        classNumber: 12,
        title: "CSS Grid (Part 2) and Responsive Design",
        duration: "60-90 min",
        topics: [
          "Grid placement",
          "Media queries",
          "Mobile-first approach",
          "Responsive units",
          "Mini project: Responsive grid",
        ],
        youtubeId: null,
        resources: ["Project", "Solution"],
        learningObjectives: [
          "Place items in grid",
          "Build responsive designs",
          "Implement mobile-first approach",
        ],
      },
    ],
  },
  {
    phase: 3,
    phaseTitle: "JavaScript Core",
    duration: "6 weeks",
    week: 7,
    classes: [
      {
        classNumber: 13,
        title: "JS Basics: Variables and Data Types",
        duration: "60-90 min",
        topics: [
          "Adding JavaScript to HTML",
          "let, const, var",
          "Data types",
          "typeof operator",
        ],
        youtubeId: null,
        resources: ["Reference", "Exercises"],
        learningObjectives: [
          "Add JavaScript to HTML",
          "Declare variables with let and const",
          "Understand JavaScript data types",
        ],
      },
      {
        classNumber: 14,
        title: "Operators and Conditionals",
        duration: "60-90 min",
        topics: [
          "Arithmetic operators",
          "Comparison operators",
          "Logical operators",
          "if/else, switch, ternary",
        ],
        youtubeId: null,
        resources: ["Operator Guide", "Code Examples"],
        learningObjectives: [
          "Use arithmetic and comparison operators",
          "Write if/else statements",
          "Understand truthy and falsy values",
        ],
      },
      {
        classNumber: 15,
        title: "Loops",
        duration: "60-90 min",
        topics: [
          "For loop",
          "While loop",
          "break and continue",
          "Looping through arrays",
        ],
        youtubeId: null,
        resources: ["Loop Patterns"],
        learningObjectives: [
          "Use for, while, and do-while loops",
          "Loop through arrays",
          "Understand break and continue",
        ],
      },
      {
        classNumber: 16,
        title: "Functions (Part 1)",
        duration: "60-90 min",
        topics: [
          "Function declaration",
          "Parameters and arguments",
          "Return statement",
          "Function scope",
        ],
        youtubeId: null,
        resources: ["Functions Guide"],
        learningObjectives: [
          "Declare and invoke functions",
          "Understand parameters and return",
          "Understand function scope",
        ],
      },
      {
        classNumber: 17,
        title: "Functions (Part 2) and Arrays (Part 1)",
        duration: "60-90 min",
        topics: [
          "Arrow functions",
          "Array creation",
          "Array methods",
          "Shopping list project",
        ],
        youtubeId: null,
        resources: ["Project Brief"],
        learningObjectives: [
          "Write arrow functions",
          "Create and manipulate arrays",
          "Use basic array methods",
        ],
      },
      {
        classNumber: 18,
        title: "Arrays (Part 2) - Higher Order Methods",
        duration: "60-90 min",
        topics: [
          "forEach, map, filter",
          "reduce",
          "find, some, every",
          "Method chaining",
        ],
        youtubeId: null,
        resources: ["Array Methods Reference"],
        learningObjectives: [
          "Use forEach, map, filter, reduce",
          "Transform arrays without loops",
          "Chain array methods",
        ],
      },
      {
        classNumber: 19,
        title: "Objects",
        duration: "60-90 min",
        topics: [
          "Object literals",
          "Dot versus bracket notation",
          "Object methods",
          "Object utilities",
        ],
        youtubeId: null,
        resources: ["Objects Guide"],
        learningObjectives: [
          "Create and manipulate objects",
          "Access properties correctly",
          "Understand object references",
        ],
      },
      {
        classNumber: 20,
        title: "The DOM (Part 1) - Selecting and Manipulating",
        duration: "60-90 min",
        topics: [
          "What is the DOM?",
          "Selecting elements",
          "Modifying content",
          "Getting and setting properties",
        ],
        youtubeId: null,
        resources: ["DOM Reference"],
        learningObjectives: [
          "Understand the DOM",
          "Select elements using various methods",
          "Modify element content",
        ],
      },
      {
        classNumber: 21,
        title: "The DOM (Part 2) - Styling and Classes",
        duration: "60-90 min",
        topics: [
          "Modifying styles",
          "classList methods",
          "Creating elements",
          "Removing elements",
        ],
        youtubeId: null,
        resources: ["DOM Manipulation Guide"],
        learningObjectives: [
          "Modify element styles",
          "Add, remove, toggle CSS classes",
          "Create dynamic elements",
        ],
      },
      {
        classNumber: 22,
        title: "Events (Part 1)",
        duration: "60-90 min",
        topics: [
          "Adding event listeners",
          "Common event types",
          "Event object",
          "Event bubbling",
        ],
        youtubeId: null,
        resources: ["Events Guide"],
        learningObjectives: [
          "Add event listeners to elements",
          "Understand the event object",
          "Handle common events",
        ],
      },
      {
        classNumber: 23,
        title: "Events (Part 2) and Forms",
        duration: "60-90 min",
        topics: [
          "Form submission",
          "Reading form values",
          "Form validation",
          "Event delegation",
        ],
        youtubeId: null,
        resources: ["Form Handling Guide"],
        learningObjectives: [
          "Handle form submission",
          "Read and validate form input",
          "Use event delegation",
        ],
      },
      {
        classNumber: 24,
        title: "LocalStorage and JSON",
        duration: "60-90 min",
        topics: [
          "JSON stringify and parse",
          "localStorage methods",
          "Storing objects",
          "Persistent notes app project",
        ],
        youtubeId: null,
        resources: ["Project Starter"],
        learningObjectives: [
          "Store and retrieve data in LocalStorage",
          "Convert between JSON and objects",
          "Build persistent applications",
        ],
      },
      {
        classNumber: 25,
        title: "Async JavaScript and Fetch API",
        duration: "60-90 min",
        topics: [
          "Sync versus async",
          "Promises",
          "async/await",
          "Fetch API",
          "Weather dashboard project",
        ],
        youtubeId: null,
        resources: ["API Guide", "Project"],
        learningObjectives: [
          "Understand async/await",
          "Fetch data from APIs",
          "Handle API responses",
        ],
      },
      {
        classNumber: 26,
        title: "Error Handling and Debugging",
        duration: "60-90 min",
        topics: [
          "try/catch/finally",
          "Custom errors",
          "DevTools debugging",
          "Error handling best practices",
        ],
        youtubeId: null,
        resources: ["Debugging Guide"],
        learningObjectives: [
          "Use try/catch for error handling",
          "Debug using Chrome DevTools",
          "Throw custom errors",
        ],
      },
    ],
  },
  {
    phase: 4,
    phaseTitle: "Integration Projects",
    duration: "2 weeks",
    week: 14,
    classes: [
      {
        classNumber: 27,
        title: "Building a Complete Project (Part 1)",
        duration: "60-90 min",
        topics: [
          "Project planning",
          "Wireframing",
          "HTML structure",
          "E-commerce site setup",
        ],
        youtubeId: null,
        resources: ["Project Template"],
        learningObjectives: [
          "Plan projects before coding",
          "Create wireframes",
          "Set up project structure",
        ],
      },
      {
        classNumber: 28,
        title: "Building a Complete Project (Part 2)",
        duration: "60-90 min",
        topics: [
          "Dynamic rendering",
          "Filtering and sorting",
          "Product display",
          "E-commerce grid",
        ],
        youtubeId: null,
        resources: ["Code Examples"],
        learningObjectives: [
          "Dynamically render products",
          "Implement category filtering",
          "Add sorting functionality",
        ],
      },
      {
        classNumber: 29,
        title: "Shopping Cart Functionality",
        duration: "60-90 min",
        topics: [
          "Cart data structure",
          "Add/remove items",
          "Cart persistence",
          "Checkout flow",
        ],
        youtubeId: null,
        resources: ["API Design Guide"],
        learningObjectives: [
          "Implement cart data structure",
          "Add and remove items",
          "Calculate totals",
        ],
      },
      {
        classNumber: 30,
        title: "Form Validation and Deployment",
        duration: "60-90 min",
        topics: [
          "Form validation",
          "Error messages",
          "Deployment to GitHub Pages",
          "Final project review",
        ],
        youtubeId: null,
        resources: ["Deployment Guide"],
        learningObjectives: [
          "Implement form validation",
          "Deploy site to GitHub Pages",
          "Complete full project",
        ],
      },
    ],
  },
  {
    phase: 5,
    phaseTitle: "Advanced Concepts and Capstone",
    duration: "2 weeks",
    week: 15,
    classes: [
      {
        classNumber: 31,
        title: 'Closures, "this", and ES6+ Features',
        duration: "60-90 min",
        topics: [
          "Closures",
          'The "this" keyword',
          "Destructuring",
          "Spread and rest operators",
          "Modern ES6+ features",
        ],
        youtubeId: null,
        resources: ["ES6+ Reference"],
        learningObjectives: [
          "Understand closures",
          'Master the "this" keyword',
          "Use destructuring and spread",
        ],
      },
      {
        classNumber: 32,
        title: "Event Loop and Performance",
        duration: "60-90 min",
        topics: [
          "Event loop visualization",
          "Debouncing and throttling",
          "Performance optimization",
          "Measuring performance",
        ],
        youtubeId: null,
        resources: ["Performance Guide"],
        learningObjectives: [
          "Understand event loop",
          "Implement debouncing/throttling",
          "Optimize performance",
        ],
      },
      {
        classNumber: 33,
        title: "Accessibility and Security",
        duration: "60-90 min",
        topics: [
          "Web accessibility (WCAG)",
          "ARIA labels",
          "XSS prevention",
          "Input sanitization",
        ],
        youtubeId: null,
        resources: ["A11y Guide", "Security Guide"],
        learningObjectives: [
          "Implement accessibility",
          "Understand and prevent XSS",
          "Sanitize user input",
        ],
      },
      {
        classNumber: 34,
        title: "Build Tools and Testing",
        duration: "60-90 min",
        topics: [
          "Vite setup",
          "ES modules",
          "Unit testing with Vitest",
          "Test coverage",
        ],
        youtubeId: null,
        resources: ["Build Tools Guide"],
        learningObjectives: [
          "Set up Vite",
          "Write simple unit tests",
          "Understand build process",
        ],
      },
      {
        classNumber: 35,
        title: "Capstone Project Kickoff",
        duration: "60-90 min",
        topics: [
          "Project planning",
          "Requirements gathering",
          "Git setup",
          "Project structure",
        ],
        youtubeId: null,
        resources: ["Project Template"],
        learningObjectives: [
          "Plan complete project",
          "Create requirements",
          "Set up version control",
        ],
      },
      {
        classNumber: 36,
        title: "Capstone Presentations and Wrap-Up",
        duration: "60-90 min",
        topics: [
          "Student presentations",
          "Peer feedback",
          "Code review",
          "Next steps and career guidance",
        ],
        youtubeId: null,
        resources: ["Career Guide"],
        learningObjectives: [
          "Present your project",
          "Get peer feedback",
          "Plan next learning steps",
        ],
      },
    ],
  },
];

function getSampleCourses(count = 6) {
  const allClasses = [];

  curriculum.forEach((phase) => {
    phase.classes.forEach((course) => {
      allClasses.push({
        ...course,
        phase: phase.phase,
        phaseTitle: phase.phaseTitle,
        phaseBackground: getPhaseGradient(phase.phase),
      });
    });
  });

  const featuredClassNumbers = [1, 6, 12, 18, 25, 36];
  const featured = allClasses.filter((course) =>
    featuredClassNumbers.includes(course.classNumber),
  );

  return featured.slice(0, count);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { curriculum, phaseGradients, getPhaseGradient, getSampleCourses };
}
