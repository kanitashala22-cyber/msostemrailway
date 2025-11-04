import { useState } from "react";
import Navbar from "@/components/navbar";
import CodeEditor from "@/components/code-editor";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, RotateCcw, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Playground() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
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
        <h1>Welcome to MsoSTEM!</h1>
        <p>Start building amazing websites with HTML and CSS.</p>
        <button class="btn">Get Started</button>
    </div>
</body>
</html>`);


  const [cssCode, setCssCode] = useState(`body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #8B5CF6, #EC4899);
    color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
}

p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.btn {
    background: white;
    color: #8B5CF6;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}`);

  const [projectTitle, setProjectTitle] = useState("My Amazing Project");

  const handleReset = () => {
    setHtmlCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Start coding here...</p>
</body>
</html>`);
    setCssCode(`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    text-align: center;
}`);
  };

  const handleSave = () => {
    const fileName = `${projectTitle.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.html`;
    const blob = new Blob([combinedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "File Downloaded!",
      description: `Your project has been saved as ${fileName}`,
    });
  };

  const combinedCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${projectTitle}</title>
        <style>
            ${cssCode}
        </style>
    </head>
    <body>
        ${htmlCode.replace(/<!DOCTYPE html>[\s\S]*?<body[^>]*>/, '').replace(/<\/body>[\s\S]*<\/html>/, '')}
    </body>
    </html>
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.playground.title.replace(t.playground.titleHighlight, '')} <span className="gradient-text">{t.playground.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.playground.description}
            </p>
          </div>
          
          {/* Project Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Input
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="text-lg font-semibold"
                    placeholder={t.playground.projectTitle}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={handleReset} variant="outline" size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t.playground.reset}
                  </Button>
                  <Button onClick={handleSave} variant="outline" size="sm" data-testid="button-save">
                    <Save className="w-4 h-4 mr-2" />
                    {t.playground.save}
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Code Editors */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <i className="fab fa-html5 mr-2 text-orange-500"></i>
                    {t.playground.htmlTab}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeEditor
                    value={htmlCode}
                    onChange={setHtmlCode}
                    language="html"
                    height="300px"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <i className="fab fa-css3 mr-2 text-blue-500"></i>
                    {t.playground.cssTab}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeEditor
                    value={cssCode}
                    onChange={setCssCode}
                    language="css"
                    height="300px"
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Live Preview */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="w-5 h-5 mr-2 text-success" />
                    {t.playground.previewTab}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-white border-t">
                    <iframe
                      srcDoc={combinedCode}
                      className="w-full h-[650px] border-0"
                      title="Live Preview"
                      sandbox="allow-scripts"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Code Examples */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{t.playground.tryExamples}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="button" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="button">{t.playground.button}</TabsTrigger>
                  <TabsTrigger value="card">{t.playground.card}</TabsTrigger>
                  <TabsTrigger value="navbar">{t.playground.navbar}</TabsTrigger>
                  <TabsTrigger value="gradient">{t.playground.gradient}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="button" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">HTML</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`<button class="btn-primary">
  Click Me!
</button>`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">CSS</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`.btn-primary {
  background: #8B5CF6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #7C3AED;
  transform: translateY(-2px);
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="card" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">HTML</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="card">
  <h3>Card Title</h3>
  <p>Card description goes here.</p>
</div>`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">CSS</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="navbar" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">HTML</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`<nav class="navbar">
  <div class="nav-brand">MsoSTEM</div>
  <div class="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">CSS</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8B5CF6;
}

.nav-links a {
  margin: 0 1rem;
  text-decoration: none;
  color: #374151;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #8B5CF6;
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="gradient" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">HTML</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="gradient-box">
  <h2>Beautiful Gradient</h2>
  <p>Gradients make everything better!</p>
</div>`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">CSS</h4>
                      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">
{`.gradient-box {
  background: linear-gradient(135deg, #8B5CF6, #EC4899);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.gradient-box h2 {
  margin: 0 0 16px 0;
  font-size: 2rem;
}

.gradient-box p {
  margin: 0;
  opacity: 0.9;
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
