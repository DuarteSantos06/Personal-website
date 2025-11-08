import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Desenvolvedor Full Stack
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Olá, sou
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Desenvolvedor</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Especializado em criar experiências web modernas e escaláveis. 
            Transformo ideias em código limpo e eficiente.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button size="lg" className="gap-2 shadow-glow">
                Ver Projetos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/experience">
              <Button size="lg" variant="outline">
                Experiência
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:email@example.com"
              className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-card p-8 rounded-lg shadow-card hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-foreground font-medium mb-2">Anos de Experiência</div>
              <div className="text-muted-foreground text-sm">Desenvolvendo soluções web</div>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-card hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground font-medium mb-2">Projetos Concluídos</div>
              <div className="text-muted-foreground text-sm">Para clientes satisfeitos</div>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg shadow-card hover:shadow-glow transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-foreground font-medium mb-2">Tecnologias</div>
              <div className="text-muted-foreground text-sm">Dominadas e em uso</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
