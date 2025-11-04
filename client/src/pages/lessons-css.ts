// CSS Styling & Design Course - 12 comprehensive lessons
// Beginner to intermediate level with interactive playground examples

export const CSS_LESSONS = [
  { 
    id: 1, 
    title: "What is CSS? - Styling Your First Page", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        h1 { color: purple; font-family: Arial; }
        p { color: #666; line-height: 1.6; }
        .highlight { background-color: yellow; }
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
    <h1>Welcome to CSS!</h1>
    <p>This text is styled with CSS.</p>
    <p class="highlight">This paragraph has a yellow background!</p>
</body>
</html>`,
    content: {
      title: "What is CSS? - Styling Your First Page",
      description: "Welcome to the amazing world of CSS! CSS (Cascading Style Sheets) transforms plain HTML into beautiful, professional websites. Let's start your journey into web design! 🎨",
      sections: [
        {
          title: "What is CSS?",
          content: "CSS stands for **Cascading Style Sheets**. Think of it as the makeup artist for websites:\\n\\n• **Cascading**: Styles flow down from parent to child elements\\n• **Style**: Controls how things look (colors, fonts, layout)\\n• **Sheets**: Organized collections of style rules\\n\\nIf HTML is the skeleton, CSS is the skin, clothes, and makeup that makes websites beautiful!"
        },
        {
          title: "How CSS Works",
          content: "CSS works by selecting HTML elements and applying styles:\\n\\n1. **Selector**: Targets which HTML element to style\\n2. **Property**: What aspect to change (color, size, etc.)\\n3. **Value**: How to change it\\n\\nExample: `h1 { color: purple; }` makes all h1 headings purple!"
        },
        {
          title: "Three Ways to Add CSS",
          content: "You can add CSS in three ways:\\n\\n• **Inline**: `<p style=\"color: red;\">Text</p>`\\n• **Internal**: `<style>` tag in the `<head>`\\n• **External**: Separate `.css` file\\n\\n**Best practice**: Use external CSS files for better organization!"
        },
        {
          title: "Try It Yourself! 🎨",
          content: "In the playground, experiment with:\\n1. Change the h1 color from purple to your favorite color\\n2. Try different fonts: `font-family: Georgia;`\\n3. Add more styles to the paragraph\\n4. Create a new class and apply it to text\\n\\nWatch how your changes instantly transform the appearance!"
        }
      ]
    }
  },
  { 
    id: 2, 
    title: "CSS Selectors - Targeting HTML Elements", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Element selector */
        h1 { color: #2c3e50; }
        
        /* Class selector */
        .intro { font-size: 18px; color: #3498db; }
        
        /* ID selector */
        #special { background-color: #f39c12; padding: 10px; }
        
        /* Multiple selectors */
        h2, h3 { color: #e74c3c; }
    </style>
</head>
<body>
    <h1>CSS Selectors Demo</h1>
    <p class="intro">This paragraph uses a class selector.</p>
    <p id="special">This paragraph uses an ID selector.</p>
    <h2>This heading uses a group selector</h2>
    <h3>So does this one!</h3>
</body>
</html>`,
    content: {
      title: "CSS Selectors - Targeting HTML Elements",
      description: "Selectors are how you tell CSS which HTML elements to style. Master selectors and you control exactly how your website looks! 🎯",
      sections: [
        {
          title: "Element Selectors",
          content: "Target HTML elements by their tag name:\\n\\n```css\\nh1 { color: blue; }\\np { font-size: 16px; }\\ndiv { background-color: lightgray; }\\n```\\n\\n**Use for**: Styling all elements of the same type"
        },
        {
          title: "Class Selectors (.class)",
          content: "Target elements with specific class attributes:\\n\\n**HTML**: `<p class=\"highlight\">Text</p>`\\n**CSS**: `.highlight { background-color: yellow; }`\\n\\n• Use a dot (.) before the class name\\n• Can be used on multiple elements\\n• **Most commonly used** selector type"
        },
        {
          title: "ID Selectors (#id)",
          content: "Target a specific element with a unique ID:\\n\\n**HTML**: `<div id=\"header\">Content</div>`\\n**CSS**: `#header { background-color: navy; }`\\n\\n• Use a hash (#) before the ID name\\n• Should be **unique** on the page\\n• Higher specificity than classes"
        },
        {
          title: "Selector Practice! 🎪",
          content: "In the playground, try:\\n1. Add a new class `.warning` with red text\\n2. Style all `<p>` elements with a margin\\n3. Create an ID `#footer` with a dark background\\n4. Use multiple selectors: `h1, h2, h3 { font-family: Georgia; }`\\n\\nExperiment and see how different selectors work!"
        }
      ]
    }
  },
  { 
    id: 3, 
    title: "Colors, Backgrounds & Typography", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .color-demo { color: #e74c3c; }
        .hex-color { color: #3498db; }
        .rgb-color { color: rgb(46, 204, 113); }
        .background-demo { background-color: #f39c12; padding: 15px; color: white; }
        .gradient-bg { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 20px; color: white; }
        .typography { font-size: 24px; font-weight: bold; text-align: center; }
    </style>
</head>
<body>
    <h1 class="typography">Beautiful Colors & Typography</h1>
    <p class="color-demo">This text is colored with hexadecimal!</p>
    <p class="hex-color">Hex colors are web-safe and precise.</p>
    <p class="rgb-color">RGB colors offer fine control.</p>
    <div class="background-demo">Background colors make content pop!</div>
    <div class="gradient-bg">Gradients add modern flair!</div>
</body>
</html>`,
    content: {
      title: "Colors, Backgrounds & Typography",
      description: "Make your websites visually stunning with colors, backgrounds, and beautiful typography. Learn to create professional, eye-catching designs! 🌈",
      sections: [
        {
          title: "CSS Color Systems",
          content: "CSS offers multiple ways to specify colors:\\n\\n• **Named colors**: `color: red;` (140+ named colors)\\n• **Hexadecimal**: `color: #ff0000;` (most common)\\n• **RGB**: `color: rgb(255, 0, 0);`\\n• **RGBA**: `color: rgba(255, 0, 0, 0.5);` (with transparency)\\n• **HSL**: `color: hsl(0, 100%, 50%);` (hue, saturation, lightness)"
        },
        {
          title: "Background Properties",
          content: "Control element backgrounds beyond just colors:\\n\\n• **Background color**: `background-color: #f0f0f0;`\\n• **Background image**: `background-image: url('image.jpg');`\\n• **Background size**: `background-size: cover;`\\n• **Background position**: `background-position: center;`\\n• **Gradients**: `background: linear-gradient(to right, blue, red);`"
        },
        {
          title: "Typography Fundamentals",
          content: "Typography makes text readable and beautiful:\\n\\n• **Font family**: `font-family: Arial, sans-serif;`\\n• **Font size**: `font-size: 18px;` or `font-size: 1.2em;`\\n• **Font weight**: `font-weight: bold;` or `font-weight: 300;`\\n• **Text alignment**: `text-align: center;`\\n• **Line height**: `line-height: 1.5;` (for readability)"
        },
        {
          title: "Design Practice! 🎨",
          content: "In the playground, experiment with:\\n1. Try different color formats: hex, rgb, hsl\\n2. Create a gradient background with your favorite colors\\n3. Change the font-family to Google Fonts\\n4. Adjust font-size and line-height for readability\\n5. Add text shadows: `text-shadow: 2px 2px 4px rgba(0,0,0,0.5);`\\n\\nMake it beautiful and uniquely yours!"
        }
      ]
    }
  },
  { 
    id: 4, 
    title: "The Box Model - Spacing and Sizing", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .box-demo {
            width: 200px;
            height: 100px;
            background-color: #3498db;
            color: white;
            text-align: center;
            
            /* Box model properties */
            padding: 20px;
            border: 5px solid #2c3e50;
            margin: 30px;
        }
        .padding-demo { background-color: #e74c3c; padding: 15px; margin: 10px; }
        .margin-demo { background-color: #f39c12; margin: 20px; padding: 10px; }
        .border-demo { border: 3px dashed #9b59b6; padding: 15px; margin: 10px; }
    </style>
</head>
<body>
    <h1>CSS Box Model Demo</h1>
    <div class="box-demo">Content Area</div>
    <div class="padding-demo">Padding creates space inside</div>
    <div class="margin-demo">Margin creates space outside</div>
    <div class="border-demo">Borders frame the content</div>
</body>
</html>`,
    content: {
      title: "The Box Model - Spacing and Sizing",
      description: "Master the CSS Box Model - the foundation of layout and spacing. Understanding this concept is crucial for creating well-designed websites! 📦",
      sections: [
        {
          title: "What is the Box Model?",
          content: "Every HTML element is a rectangular box with four areas:\\n\\n1. **Content**: The actual text/images\\n2. **Padding**: Space between content and border\\n3. **Border**: Line around the padding\\n4. **Margin**: Space outside the border\\n\\n**Total width** = content + padding + border + margin"
        },
        {
          title: "Padding - Internal Spacing",
          content: "Padding creates space **inside** an element:\\n\\n• **All sides**: `padding: 20px;`\\n• **Specific sides**: `padding-top: 10px; padding-right: 15px;`\\n• **Shorthand**: `padding: 10px 15px 20px 25px;` (top, right, bottom, left)\\n• **Two values**: `padding: 10px 20px;` (top/bottom, left/right)\\n\\n**Remember**: Padding adds to the element's size!"
        },
        {
          title: "Margin - External Spacing",
          content: "Margin creates space **outside** an element:\\n\\n• **Auto centering**: `margin: 0 auto;` (centers block elements)\\n• **Negative margins**: `margin-top: -10px;` (overlapping)\\n• **Margin collapse**: Vertical margins merge between elements\\n• **Same syntax** as padding for shorthand\\n\\n**Tip**: Use margins to separate elements from each other!"
        },
        {
          title: "Border Properties",
          content: "Borders frame your content with style:\\n\\n• **Border width**: `border-width: 2px;`\\n• **Border style**: `border-style: solid;` (solid, dashed, dotted)\\n• **Border color**: `border-color: #333;`\\n• **Shorthand**: `border: 2px solid #333;`\\n• **Individual sides**: `border-left: 3px solid red;`\\n\\n**Border radius**: `border-radius: 10px;` for rounded corners!"
        },
        {
          title: "Box Model Practice! 📏",
          content: "In the playground, experiment with:\\n1. Change padding values and see how it affects spacing\\n2. Try different border styles: dotted, dashed, double\\n3. Use `border-radius` to create rounded corners\\n4. Add `box-sizing: border-box;` to change box model behavior\\n5. Create a card design using padding, borders, and margins\\n\\nUnderstanding the box model is key to CSS mastery!"
        }
      ]
    }
  },
  { 
    id: 5, 
    title: "Flexbox - Modern Layout Made Easy", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ecf0f1;
            padding: 20px;
            margin: 10px 0;
        }
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 5px;
            border-radius: 5px;
            min-width: 100px;
            text-align: center;
        }
        .flex-column {
            display: flex;
            flex-direction: column;
            height: 200px;
            background-color: #f39c12;
            padding: 10px;
        }
        .flex-grow { flex: 1; background-color: #e74c3c; }
    </style>
</head>
<body>
    <h1>Flexbox Layout Demo</h1>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
    <div class="flex-column">
        <div class="flex-item">Top</div>
        <div class="flex-item flex-grow">Middle (grows)</div>
        <div class="flex-item">Bottom</div>
    </div>
</body>
</html>`,
    content: {
      title: "Flexbox - Modern Layout Made Easy",
      description: "Flexbox revolutionizes CSS layout! Create responsive, flexible designs that automatically adapt to different screen sizes. Say goodbye to layout frustrations! 💪",
      sections: [
        {
          title: "What is Flexbox?",
          content: "Flexbox (Flexible Box Layout) makes CSS layout simple:\\n\\n• **One-dimensional** layout (either row or column)\\n• **Automatic** space distribution\\n• **Easy** alignment and centering\\n• **Responsive** by default\\n• **No floats** or positioning needed\\n\\n**To start**: Add `display: flex;` to a container!"
        },
        {
          title: "Flex Container Properties",
          content: "Control the flex container (parent element):\\n\\n• **Direction**: `flex-direction: row | column;`\\n• **Wrap**: `flex-wrap: wrap | nowrap;`\\n• **Justify (main axis)**: `justify-content: center | space-between | space-around;`\\n• **Align (cross axis)**: `align-items: center | flex-start | flex-end;`\\n• **Gap**: `gap: 10px;` (space between items)"
        },
        {
          title: "Flex Item Properties",
          content: "Control individual flex items (children):\\n\\n• **Grow**: `flex-grow: 1;` (take available space)\\n• **Shrink**: `flex-shrink: 0;` (resist shrinking)\\n• **Basis**: `flex-basis: 200px;` (starting size)\\n• **Shorthand**: `flex: 1;` (grow: 1, shrink: 1, basis: 0)\\n• **Align self**: `align-self: center;` (override container alignment)"
        },
        {
          title: "Common Flexbox Patterns",
          content: "Master these useful patterns:\\n\\n• **Center anything**: `justify-content: center; align-items: center;`\\n• **Space between**: `justify-content: space-between;`\\n• **Equal columns**: `flex: 1;` on all items\\n• **Sidebar layout**: Fixed sidebar + `flex: 1` main content\\n• **Responsive navigation**: `flex-direction: column;` on mobile"
        },
        {
          title: "Flexbox Workshop! 🔧",
          content: "In the playground, try building:\\n1. A navigation bar with logo left, links right\\n2. A card layout with equal-height cards\\n3. A centered modal dialog\\n4. A sticky footer layout\\n5. Change `flex-direction` and see the layout flip!\\n\\nFlexbox makes complex layouts simple and intuitive!"
        }
      ]
    }
  },
  { 
    id: 6, 
    title: "CSS Grid - Advanced Layout Control", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: auto 200px auto;
            gap: 15px;
            background-color: #ecf0f1;
            padding: 15px;
        }
        .grid-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .header { grid-column: 1 / -1; background-color: #2c3e50; }
        .sidebar { background-color: #e74c3c; }
        .main { background-color: #27ae60; }
        .ads { background-color: #f39c12; }
        .footer { grid-column: 1 / -1; background-color: #9b59b6; }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item header">Header</div>
        <div class="grid-item sidebar">Sidebar</div>
        <div class="grid-item main">Main Content</div>
        <div class="grid-item ads">Ads</div>
        <div class="grid-item footer">Footer</div>
    </div>
</body>
</html>`,
    content: {
      title: "CSS Grid - Advanced Layout Control",
      description: "CSS Grid is the most powerful layout system in CSS! Create complex, two-dimensional layouts with incredible precision and flexibility. Perfect for modern web design! 🏗️",
      sections: [
        {
          title: "What is CSS Grid?",
          content: "CSS Grid Layout excels at two-dimensional layouts:\\n\\n• **Two-dimensional**: Controls both rows AND columns\\n• **Precise placement**: Put items exactly where you want\\n• **Responsive**: Adapts to different screen sizes\\n• **Overlap capable**: Items can overlap if needed\\n• **Complementary** to Flexbox (use both together!)\\n\\n**To start**: Add `display: grid;` to a container!"
        },
        {
          title: "Grid Container Setup",
          content: "Define your grid structure on the container:\\n\\n• **Columns**: `grid-template-columns: 200px 1fr 100px;`\\n• **Rows**: `grid-template-rows: auto 200px auto;`\\n• **Fractional units**: `1fr` means 'take available space'\\n• **Repeat**: `grid-template-columns: repeat(3, 1fr);`\\n• **Gap**: `gap: 20px;` (space between grid items)"
        },
        {
          title: "Grid Item Placement",
          content: "Control where items are placed in the grid:\\n\\n• **Column span**: `grid-column: 1 / 3;` (start at 1, end before 3)\\n• **Row span**: `grid-row: 1 / -1;` (-1 means last line)\\n• **Shorthand**: `grid-area: 1 / 1 / 3 / 3;` (row-start / col-start / row-end / col-end)\\n• **Named areas**: Create template layouts with names\\n• **Auto placement**: Let Grid place items automatically"
        },
        {
          title: "Grid vs Flexbox",
          content: "When to use Grid vs Flexbox:\\n\\n**Use CSS Grid for:**\\n• Two-dimensional layouts (rows AND columns)\\n• Complex page layouts\\n• Precise item placement\\n• Card grids and galleries\\n\\n**Use Flexbox for:**\\n• One-dimensional layouts (row OR column)\\n• Component alignment\\n• Navigation bars\\n• Centering content"
        },
        {
          title: "Grid Workshop! 🏗️",
          content: "In the playground, experiment with:\\n1. Change `grid-template-columns` to different values\\n2. Make the header span all columns: `grid-column: 1 / -1;`\\n3. Try `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` for responsive columns\\n4. Add more grid items and see auto-placement work\\n5. Create a photo gallery layout\\n\\nGrid gives you ultimate layout control!"
        }
      ]
    }
  },
  { 
    id: 7, 
    title: "Responsive Design & Media Queries", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .responsive-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .card {
            background-color: #3498db;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 768px) {
            .container { padding: 10px; }
            .card { padding: 15px; font-size: 14px; }
            h1 { font-size: 24px; }
        }
        
        @media (min-width: 1024px) {
            .container { padding: 40px; }
            .card { padding: 30px; }
            h1 { font-size: 36px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Design Demo</h1>
        <div class="responsive-grid">
            <div class="card">Card 1 - Responsive</div>
            <div class="card">Card 2 - Mobile-friendly</div>
            <div class="card">Card 3 - Adapts to screen</div>
        </div>
    </div>
</body>
</html>`,
    content: {
      title: "Responsive Design & Media Queries",
      description: "Make your websites look perfect on every device! Learn responsive design techniques that automatically adapt to phones, tablets, and desktops. Essential for modern web development! 📱💻",
      sections: [
        {
          title: "What is Responsive Design?",
          content: "Responsive design makes websites adapt to any screen size:\\n\\n• **Flexible layouts**: Adjust to different screen widths\\n• **Flexible images**: Scale with the container\\n• **Media queries**: Apply different styles for different devices\\n• **Mobile-first**: Design for mobile, then enhance for larger screens\\n• **Better user experience**: Works on phones, tablets, and desktops"
        },
        {
          title: "The Viewport Meta Tag",
          content: "Essential for responsive design:\\n\\n```html\\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n```\\n\\n**What it does:**\\n• `width=device-width`: Match the screen's width\\n• `initial-scale=1.0`: Don't zoom in or out\\n• **Always include** this in your HTML head!"
        },
        {
          title: "Media Queries",
          content: "Apply CSS rules based on device characteristics:\\n\\n```css\\n/* Mobile styles (default) */\\n.container { padding: 10px; }\\n\\n/* Tablet styles */\\n@media (min-width: 768px) {\\n  .container { padding: 20px; }\\n}\\n\\n/* Desktop styles */\\n@media (min-width: 1024px) {\\n  .container { padding: 40px; }\\n}\\n```\\n\\n**Common breakpoints**: 768px (tablet), 1024px (desktop)"
        },
        {
          title: "Responsive Units",
          content: "Use relative units for flexible designs:\\n\\n• **Percentages**: `width: 50%;` (relative to parent)\\n• **Viewport units**: `width: 100vw;` (viewport width)\\n• **em/rem**: `font-size: 1.2rem;` (relative to font size)\\n• **Flexible grids**: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\\n\\n**Avoid fixed units** like pixels for responsive elements!"
        },
        {
          title: "Responsive Workshop! 📐",
          content: "In the playground, test responsiveness:\\n1. Resize your browser window and watch elements adapt\\n2. Add a new breakpoint: `@media (max-width: 480px)`\\n3. Try different viewport units: `vw`, `vh`, `vmin`, `vmax`\\n4. Create a responsive navigation that stacks on mobile\\n5. Use `object-fit: cover;` for responsive images\\n\\nResponsive design ensures your site works everywhere!"
        }
      ]
    }
  },
  { 
    id: 8, 
    title: "CSS Animations & Transitions", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .transition-demo {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .transition-demo:hover {
            background-color: #e74c3c;
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .animation-demo {
            background-color: #f39c12;
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            text-align: center;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        
        .loading-spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <h1>CSS Animations & Transitions</h1>
    <div class="transition-demo">Hover me for transitions!</div>
    <div class="animation-demo">Bouncing</div>
    <div class="loading-spinner"></div>
</body>
</html>`,
    content: {
      title: "CSS Animations & Transitions",
      description: "Bring your websites to life with smooth animations and transitions! Learn to create engaging, interactive experiences that delight users and make your site stand out. ✨",
      sections: [
        {
          title: "CSS Transitions",
          content: "Smooth changes between CSS property values:\\n\\n```css\\n.button {\\n  background-color: blue;\\n  transition: background-color 0.3s ease;\\n}\\n.button:hover {\\n  background-color: red;\\n}\\n```\\n\\n**Properties:**\\n• `transition-property`: What to animate\\n• `transition-duration`: How long (0.3s, 500ms)\\n• `transition-timing-function`: ease, linear, ease-in-out\\n• `transition-delay`: Wait before starting"
        },
        {
          title: "CSS Animations",
          content: "Complex, repeating animations with keyframes:\\n\\n```css\\n@keyframes slideIn {\\n  0% { transform: translateX(-100%); }\\n  100% { transform: translateX(0); }\\n}\\n\\n.element {\\n  animation: slideIn 1s ease-out;\\n}\\n```\\n\\n**Animation properties:**\\n• `animation-name`: Reference to @keyframes\\n• `animation-duration`: How long per cycle\\n• `animation-iteration-count`: How many times (infinite)\\n• `animation-direction`: normal, reverse, alternate"
        },
        {
          title: "Transform Properties",
          content: "Transform elements without affecting layout:\\n\\n• **Translate**: `transform: translateX(50px);` (move)\\n• **Scale**: `transform: scale(1.2);` (resize)\\n• **Rotate**: `transform: rotate(45deg);` (spin)\\n• **Skew**: `transform: skewX(15deg);` (slant)\\n• **Combine**: `transform: translateX(20px) scale(1.1) rotate(10deg);`\\n\\n**Great for hover effects** and animations!"
        },
        {
          title: "Animation Best Practices",
          content: "Create smooth, performant animations:\\n\\n• **Use transform and opacity**: Hardware accelerated\\n• **Avoid animating layout properties**: width, height, margin\\n• **Keep durations reasonable**: 0.2s-0.5s for micro-interactions\\n• **Provide reduced motion**: Respect user preferences\\n• **Use ease curves**: Natural-feeling motion\\n\\n**Performance tip**: Animate transform and opacity only!"
        },
        {
          title: "Animation Studio! 🎬",
          content: "In the playground, create animations:\\n1. Add a fade-in animation to the heading\\n2. Create a pulsing effect with scale transform\\n3. Make a sliding navigation menu\\n4. Build a CSS-only loading indicator\\n5. Combine multiple transforms for complex motion\\n\\nAnimations add personality and engagement to your sites!"
        }
      ]
    }
  },
  { 
    id: 9, 
    title: "Positioning & Z-Index", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .container { position: relative; height: 400px; background-color: #ecf0f1; padding: 20px; }
        
        .static { background-color: #3498db; padding: 10px; margin: 10px; color: white; }
        
        .relative {
            position: relative;
            background-color: #e74c3c;
            padding: 10px;
            margin: 10px;
            color: white;
            left: 50px;
            top: 20px;
        }
        
        .absolute {
            position: absolute;
            background-color: #f39c12;
            padding: 10px;
            color: white;
            top: 100px;
            right: 20px;
            z-index: 10;
        }
        
        .fixed {
            position: fixed;
            background-color: #9b59b6;
            padding: 10px;
            color: white;
            bottom: 20px;
            right: 20px;
            z-index: 100;
        }
        
        .sticky {
            position: sticky;
            top: 0;
            background-color: #27ae60;
            padding: 10px;
            color: white;
            z-index: 50;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="static">Static positioning (default)</div>
        <div class="relative">Relative positioning (moved 50px left, 20px down)</div>
        <div class="absolute">Absolute positioning (top-right of container)</div>
        <div class="sticky">Sticky positioning (sticks to top when scrolling)</div>
    </div>
    <div class="fixed">Fixed positioning (bottom-right of viewport)</div>
    <div style="height: 1000px; background: linear-gradient(to bottom, #f1f1f1, #ddd);"></div>
</body>
</html>`,
    content: {
      title: "Positioning & Z-Index",
      description: "Master precise element placement and layering! Learn to position elements exactly where you want them and control their stacking order. Essential for complex layouts! 📐",
      sections: [
        {
          title: "CSS Position Types",
          content: "Five types of positioning in CSS:\\n\\n• **Static**: Default flow (no positioning)\\n• **Relative**: Relative to its normal position\\n• **Absolute**: Relative to nearest positioned ancestor\\n• **Fixed**: Relative to the viewport (doesn't scroll)\\n• **Sticky**: Switches between relative and fixed\\n\\nEach type behaves differently and serves specific purposes!"
        },
        {
          title: "Positioning Properties",
          content: "Control exact placement with offset properties:\\n\\n• **Top**: `top: 20px;` (from top edge)\\n• **Right**: `right: 10px;` (from right edge)\\n• **Bottom**: `bottom: 0;` (from bottom edge)\\n• **Left**: `left: 50px;` (from left edge)\\n\\n**Note**: These only work with `position` other than `static`!"
        },
        {
          title: "Z-Index & Stacking",
          content: "Control which elements appear on top:\\n\\n• **Z-index**: Higher numbers appear on top\\n• **Stacking context**: Groups elements for layering\\n• **Default z-index**: auto (usually 0)\\n• **Range**: Can be negative or very large numbers\\n\\n```css\\n.modal { position: fixed; z-index: 1000; }\\n.overlay { position: absolute; z-index: 100; }\\n```"
        },
        {
          title: "Common Positioning Patterns",
          content: "Useful positioning techniques:\\n\\n• **Centered modal**: Absolute positioning with transform\\n• **Sticky navigation**: `position: sticky; top: 0;`\\n• **Corner badges**: Absolute positioning in relative container\\n• **Overlay effects**: Absolute positioning with high z-index\\n• **Fixed sidebars**: Fixed positioning for persistent navigation"
        },
        {
          title: "Positioning Workshop! 🎯",
          content: "In the playground, experiment with:\\n1. Try scrolling to see sticky and fixed positioning\\n2. Change z-index values and observe layering\\n3. Create a tooltip that appears on hover\\n4. Build a modal dialog with overlay\\n5. Position elements at exact coordinates\\n\\nPositioning gives you pixel-perfect control!"
        }
      ]
    }
  },
  { 
    id: 10, 
    title: "CSS Variables & Modern Features", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #e74c3c;
            --spacing: 20px;
            --border-radius: 8px;
            --font-size-large: 24px;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .theme-demo {
            background-color: var(--primary-color);
            color: white;
            padding: var(--spacing);
            margin: var(--spacing);
            border-radius: var(--border-radius);
            font-size: var(--font-size-large);
            box-shadow: var(--shadow);
        }
        
        .secondary {
            background-color: var(--secondary-color);
        }
        
        /* Dark theme */
        .dark-theme {
            --primary-color: #2c3e50;
            --secondary-color: #34495e;
            background-color: #1a1a1a;
            color: white;
        }
        
        /* Modern CSS features */
        .modern-features {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            padding: var(--spacing);
            margin: var(--spacing);
            border-radius: var(--border-radius);
            backdrop-filter: blur(10px);
            clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
        }
    </style>
</head>
<body>
    <div class="theme-demo">Primary Theme Box</div>
    <div class="theme-demo secondary">Secondary Theme Box</div>
    <div class="modern-features">Modern CSS Features</div>
    
    <button onclick="toggleTheme()">Toggle Dark Theme</button>
    
    <script>
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
        }
    </script>
</body>
</html>`,
    content: {
      title: "CSS Variables & Modern Features",
      description: "Unlock the power of modern CSS! Learn CSS custom properties (variables), advanced selectors, and cutting-edge features that make your CSS more maintainable and powerful. 🚀",
      sections: [
        {
          title: "CSS Custom Properties (Variables)",
          content: "Store and reuse values throughout your CSS:\\n\\n```css\\n:root {\\n  --primary-color: #3498db;\\n  --spacing: 20px;\\n}\\n\\n.button {\\n  background-color: var(--primary-color);\\n  padding: var(--spacing);\\n}\\n```\\n\\n**Benefits:**\\n• **Maintainable**: Change values in one place\\n• **Dynamic**: Can be modified with JavaScript\\n• **Scope-aware**: Can be overridden in specific contexts"
        },
        {
          title: "Advanced Selectors",
          content: "Powerful selectors for precise targeting:\\n\\n• **Attribute selectors**: `[data-theme=\"dark\"]`\\n• **Pseudo-classes**: `:nth-child(odd)`, `:not(.excluded)`\\n• **Pseudo-elements**: `::before`, `::after`, `::first-line`\\n• **Combinators**: `>` (child), `+` (adjacent), `~` (sibling)\\n\\n**Example**: `article > p:first-child::first-letter`"
        },
        {
          title: "Modern CSS Properties",
          content: "Cutting-edge CSS features for advanced designs:\\n\\n• **CSS Grid**: `display: grid;` for complex layouts\\n• **Backdrop filter**: `backdrop-filter: blur(10px);` for glass effects\\n• **Clip path**: `clip-path: polygon(...)` for custom shapes\\n• **CSS gradients**: `conic-gradient()`, `radial-gradient()`\\n• **Custom fonts**: `@font-face` and `font-display`"
        },
        {
          title: "CSS Architecture",
          content: "Organize CSS for large projects:\\n\\n• **CSS custom properties**: For theming and consistency\\n• **Modular CSS**: Component-based organization\\n• **Naming conventions**: BEM, SMACSS methodologies\\n• **CSS layers**: `@layer` for cascade control\\n• **Container queries**: `@container` for element-based responsive design"
        },
        {
          title: "Modern CSS Workshop! ⚡",
          content: "In the playground, explore:\\n1. Create a complete design system with CSS variables\\n2. Build a dark/light theme switcher\\n3. Use `calc()` with variables: `width: calc(100% - var(--spacing) * 2);`\\n4. Try advanced selectors like `:nth-child()` and `:not()`\\n5. Experiment with `clip-path` for unique shapes\\n\\nModern CSS features give you incredible design power!"
        }
      ]
    }
  },
  { 
    id: 11, 
    title: "Forms Styling & User Experience", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .form-container {
            max-width: 500px;
            margin: 0 auto;
            padding: 30px;
            background-color: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2c3e50;
        }
        
        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }
        
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        input:invalid {
            border-color: #e74c3c;
        }
        
        .submit-btn {
            background-color: #3498db;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        .submit-btn:hover {
            background-color: #2980b9;
        }
        
        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .checkbox-group input[type="checkbox"] {
            width: auto;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Beautiful Contact Form</h2>
        <form>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" name="subject">
                    <option value="">Choose a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <div class="form-group">
                <div class="checkbox-group">
                    <input type="checkbox" id="newsletter" name="newsletter">
                    <label for="newsletter">Subscribe to newsletter</label>
                </div>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>
</body>
</html>`,
    content: {
      title: "Forms Styling & User Experience",
      description: "Transform basic HTML forms into beautiful, user-friendly interfaces! Learn to style form elements, improve usability, and create forms that users love to fill out. 📝",
      sections: [
        {
          title: "Form Element Styling",
          content: "Style form inputs for better appearance:\\n\\n```css\\ninput, textarea, select {\\n  padding: 12px;\\n  border: 2px solid #ddd;\\n  border-radius: 6px;\\n  font-size: 16px;\\n}\\n\\ninput:focus {\\n  border-color: #3498db;\\n  outline: none;\\n}\\n```\\n\\n**Key properties**: padding, border, border-radius, font-size, transition"
        },
        {
          title: "Focus States & Accessibility",
          content: "Make forms accessible and user-friendly:\\n\\n• **Focus indicators**: Clear visual feedback when focused\\n• **Label association**: Proper `for` and `id` connections\\n• **Error states**: Visual indicators for validation\\n• **High contrast**: Ensure sufficient color contrast\\n• **Touch targets**: Minimum 44px for mobile interaction\\n\\n**Never remove outlines** without providing alternatives!"
        },
        {
          title: "Form Layout Techniques",
          content: "Organize form elements effectively:\\n\\n• **Form groups**: Wrap labels and inputs together\\n• **Flexbox/Grid**: For complex form layouts\\n• **Spacing**: Consistent margins between form groups\\n• **Responsive design**: Stack elements on mobile\\n• **Visual hierarchy**: Use typography to guide users\\n\\n**Best practice**: Group related fields together"
        },
        {
          title: "Advanced Form Features",
          content: "Enhance forms with modern techniques:\\n\\n• **Custom checkboxes**: Style with `::before` and `::after`\\n• **Floating labels**: Animated label positioning\\n• **Input validation**: CSS `:valid` and `:invalid` states\\n• **Progress indicators**: Show completion status\\n• **Conditional fields**: Show/hide based on selections\\n\\n**Validation states** provide immediate feedback to users!"
        },
        {
          title: "Form UX Workshop! 📋",
          content: "In the playground, improve the form:\\n1. Add custom styling to checkboxes and radio buttons\\n2. Create floating label animations\\n3. Style validation states with `:valid` and `:invalid`\\n4. Add loading states to the submit button\\n5. Make the form responsive for mobile devices\\n\\nGreat form design increases conversion rates!"
        }
      ]
    }
  },
  { 
    id: 12, 
    title: "Final Project - Complete Website Design", 
    completed: false,
    playgroundCode: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2c3e50;
            --accent-color: #e74c3c;
            --text-color: #333;
            --bg-color: #f8f9fa;
            --spacing: 20px;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
        }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing); }
        
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: var(--spacing) 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo { font-size: 24px; font-weight: bold; }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: var(--spacing);
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }
        
        .nav-links a:hover { opacity: 0.8; }
        
        .hero {
            background: linear-gradient(rgba(52, 152, 219, 0.8), rgba(52, 152, 219, 0.8)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"><path fill="%23f0f0f0" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z"></path></svg>');
            color: white;
            text-align: center;
            padding: 100px 0;
        }
        
        .hero h1 { font-size: 48px; margin-bottom: var(--spacing); }
        .hero p { font-size: 20px; margin-bottom: calc(var(--spacing) * 2); }
        
        .btn {
            display: inline-block;
            background-color: var(--accent-color);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 25px;
            transition: transform 0.3s ease;
        }
        
        .btn:hover { transform: translateY(-2px); }
        
        .features {
            padding: calc(var(--spacing) * 3) 0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing);
        }
        
        .feature {
            background: white;
            padding: var(--spacing);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .feature:hover { transform: translateY(-5px); }
        
        .feature h3 { color: var(--primary-color); margin-bottom: 10px; }
        
        footer {
            background-color: var(--secondary-color);
            color: white;
            text-align: center;
            padding: var(--spacing) 0;
        }
        
        @media (max-width: 768px) {
            .nav-links { display: none; }
            .hero h1 { font-size: 32px; }
            .hero { padding: 60px 0; }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">YourBrand</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Welcome to Your Amazing Website</h1>
            <p>Create beautiful, responsive websites with modern CSS</p>
            <a href="#features" class="btn">Get Started</a>
        </div>
    </section>
    
    <section id="features" class="container">
        <div class="features">
            <div class="feature">
                <h3>Responsive Design</h3>
                <p>Your website looks perfect on all devices and screen sizes</p>
            </div>
            <div class="feature">
                <h3>Modern CSS</h3>
                <p>Built with the latest CSS features and best practices</p>
            </div>
            <div class="feature">
                <h3>Fast Performance</h3>
                <p>Optimized for speed and smooth user experience</p>
            </div>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`,
    content: {
      title: "Final Project - Complete Website Design",
      description: "Put everything together! Create a complete, professional website using all the CSS skills you've learned. This is your chance to showcase your CSS mastery! 🏆",
      sections: [
        {
          title: "Project Overview",
          content: "Build a complete website that demonstrates your CSS skills:\\n\\n**Required features:**\\n• **Responsive design** that works on all devices\\n• **Modern layout** using Flexbox and/or Grid\\n• **Custom color scheme** with CSS variables\\n• **Smooth animations** and hover effects\\n• **Professional typography** and spacing\\n• **Interactive elements** and user feedback"
        },
        {
          title: "Design System Planning",
          content: "Start with a solid foundation:\\n\\n**1. Color palette**: Choose 3-5 colors that work well together\\n**2. Typography scale**: Define font sizes and weights\\n**3. Spacing system**: Consistent margins and padding\\n**4. Component library**: Buttons, cards, forms, navigation\\n**5. Responsive breakpoints**: Mobile, tablet, desktop\\n\\n**Tip**: Use CSS custom properties for your design system!"
        },
        {
          title: "Layout Architecture",
          content: "Structure your website effectively:\\n\\n**Header**: Navigation with logo and menu links\\n**Hero section**: Eye-catching banner with call-to-action\\n**Content sections**: Features, about, services, etc.\\n**Footer**: Contact info and additional links\\n\\n**Layout techniques**: Use CSS Grid for main layout, Flexbox for components"
        },
        {
          title: "Advanced Features",
          content: "Enhance your website with modern techniques:\\n\\n**CSS Variables**: Create a maintainable design system\\n**Animations**: Smooth transitions and hover effects\\n**Responsive images**: Optimize for different screen sizes\\n**Accessibility**: Proper contrast, focus states, semantic HTML\\n**Performance**: Minimize CSS, optimize loading\\n\\n**Dark mode**: Modern user preference\\n**Accessibility features**: Focus indicators, proper contrast"
        },
        {
          title: "Final Challenge! 🚀",
          content: "Complete your CSS mastery:\\n1. Customize the provided template with your own content\\n2. Add your personal color scheme and branding\\n3. Implement additional sections (portfolio, blog, etc.)\\n4. Add advanced animations and micro-interactions\\n5. Ensure everything works perfectly on mobile\\n\\n**Congratulations!** You've mastered CSS - now go build amazing websites!"
        }
      ]
    }
  }
];