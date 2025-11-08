import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Full stack developer
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hey, i'm 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Duarte</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate full stack developer focused on building modern, efficient, and user-friendly web applications.
            
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                Projects
              </Button>
            </Link>
            <Link to="/experience">
              <Button size="lg" variant="outline">
                Experience
              </Button>
            </Link>
            <Link to="/Education">
              <Button size="lg" variant="outline">
                Education
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/DuarteSantos06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/duarte-santos-42660634a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:djp.sanntos06@gmail.com"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="/Duarte_SantosCVNovembro.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
            <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
              CV
            </span>
            </a>
          </div>
        </div>

        
      </main>
    </div>
  );
};

export default Index;
