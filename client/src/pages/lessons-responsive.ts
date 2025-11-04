export const RESPONSIVE_LESSONS = [
  { 
    id: 1, 
    title: "Arduino Uno Board", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Mobile-first: Start with mobile styles */
        .container {
            padding: 15px;
            background-color: #3498db;
            color: white;
        }
        
        h1 { font-size: 24px; }
        p { font-size: 16px; }
        
        /* Tablet: 768px and up */
        @media (min-width: 768px) {
            .container { padding: 30px; }
            h1 { font-size: 32px; }
        }
        
        /* Desktop: 1024px and up */
        @media (min-width: 1024px) {
            .container { 
                max-width: 1200px;
                margin: 0 auto;
                padding: 50px;
            }
            h1 { font-size: 40px; }
        }
    </style>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VD8ZK8GZVE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VD8ZK8GZVE');
    </script>
</head>
<body>
    <div class="container">
        <h1>Mobile-First Design</h1>
        <p>This design starts with mobile and enhances for larger screens!</p>
        <p>Resize your browser to see it adapt.</p>
    </div>
</body>
</html>`,
    content: {
      title: "Arduino Uno Board",
      description: "Hands-on Arduino robotics for beginners: learn to build and program devices that tackle real-world problems while boosting creativity.",
      sections: [
        {
          title: "What is Mobile-First Design?",
          content: "Mobile-first means designing for mobile devices FIRST, then enhancing for larger screens:\\n\\n• **Start small**: Design for the smallest screen first\\n• **Progressive enhancement**: Add features for bigger screens\\n• **Better performance**: Mobile users don't load desktop CSS\\n• **Focus on essentials**: Mobile forces you to prioritize\\n\\n**Why mobile-first?** Over 60% of web traffic is from mobile devices!"
        },
        {
          title: "Mobile-First vs Desktop-First",
          content: "**Desktop-First (old way):**\\n• Design for desktop, then remove features for mobile\\n• Uses max-width media queries\\n• Results in bloated mobile experience\\n\\n**Mobile-First (modern way):**\\n• Design for mobile, then add features for desktop\\n• Uses min-width media queries\\n• Lean, fast mobile experience\\n• Enhanced desktop experience\\n\\n**Best practice**: Always use mobile-first!"
        },
        {
          title: "Min-Width Media Queries",
          content: "Mobile-first uses `min-width` media queries:\\n\\n```css\\n/* Mobile styles (default) */\\n.container { padding: 15px; }\\n\\n/* Tablet and up */\\n@media (min-width: 768px) {\\n  .container { padding: 30px; }\\n}\\n\\n/* Desktop and up */\\n@media (min-width: 1024px) {\\n  .container { padding: 50px; }\\n}\\n```\\n\\n**The logic**: 'If screen is AT LEAST this wide, apply these styles'"
        },
        {
          title: "Mobile-First Practice! 📱",
          content: "In the playground, try:\\n1. View the page and resize your browser\\n2. Add a new breakpoint at 600px for small tablets\\n3. Change colors at different breakpoints\\n4. Add `display: flex;` for larger screens only\\n\\nMobile-first is the foundation of modern responsive design!"
        }
      ]
    }
  },
  { 
    id: 2, 
    title: "Media Queries & Breakpoints", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            transition: background-color 0.3s;
        }
        
        .device-indicator {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .grid {
            display: grid;
            gap: 15px;
        }
        
        .card {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Mobile (default) */
        body { background-color: #e74c3c; }
        .device-indicator::before { content: "📱 Mobile"; }
        .grid { grid-template-columns: 1fr; }
        
        /* Tablet: 600px - 899px */
        @media (min-width: 600px) {
            body { background-color: #f39c12; }
            .device-indicator::before { content: "📱 Tablet"; }
            .grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        /* Desktop: 900px+ */
        @media (min-width: 900px) {
            body { background-color: #3498db; }
            .device-indicator::before { content: "💻 Desktop"; }
            .grid { grid-template-columns: repeat(3, 1fr); }
        }
    </style>
</head>
<body>
    <div class="device-indicator"></div>
    <h1 style="color: white; text-align: center;">Resize Browser to See Breakpoints!</h1>
    <div class="grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
    </div>
</body>
</html>`,
    content: {
      title: "Media Queries & Breakpoints",
      description: "Master media queries and breakpoints - the key to responsive design! Learn when and how to adjust your layout for different screen sizes. 📐",
      sections: [
        {
          title: "What are Media Queries?",
          content: "Media queries let you apply CSS based on device characteristics:\\n\\n```css\\n@media (min-width: 768px) {\\n  .container { padding: 30px; }\\n}\\n```\\n\\n**What this does:**\\n• Checks if screen is at least 768px wide\\n• If yes, applies the CSS inside\\n• If no, ignores it\\n\\n**Use cases**: Responsive layouts, device-specific styling"
        },
        {
          title: "Common Breakpoint Values",
          content: "Industry-standard breakpoints:\\n\\n• **600px**: Large phones / small tablets\\n• **768px**: Tablets (portrait)\\n• **900px**: Tablets (landscape) / small laptops\\n• **1024px**: Laptops\\n• **1200px**: Desktops\\n\\n**Remember**: These are guidelines! Let YOUR content guide your breakpoints."
        },
        {
          title: "Media Query Features",
          content: "You can target many device features:\\n\\n• **Width**: `(min-width: 768px)`, `(max-width: 1200px)`\\n• **Height**: `(min-height: 600px)`\\n• **Orientation**: `(orientation: landscape)`\\n• **Resolution**: `(min-resolution: 2dppx)` for retina\\n• **Hover**: `(hover: hover)` for devices with mouse\\n\\n**Combine with 'and'**: `(min-width: 768px) and (orientation: landscape)`"
        },
        {
          title: "Content-Based Breakpoints",
          content: "**Device-based (not recommended):**\\n• Target specific devices (iPhone, iPad)\\n• Breaks when new devices come out\\n\\n**Content-based (recommended):**\\n• Add breakpoints where YOUR content needs them\\n• Test by resizing browser\\n• When layout looks awkward, add a breakpoint\\n\\n**Best practice**: Start with 3-4 main breakpoints, add more only if needed!"
        },
        {
          title: "Breakpoint Workshop! 📐",
          content: "In the playground, experiment with:\\n1. Resize your browser and watch the background color change\\n2. Add a new breakpoint at 1200px with grid-template-columns: repeat(4, 1fr)\\n3. Try max-width queries: `@media (max-width: 599px)`\\n4. Add orientation queries: `@media (orientation: landscape)`\\n5. Combine conditions with 'and'\\n\\nMaster breakpoints to create perfectly responsive layouts!"
        }
      ]
    }
  }
];
