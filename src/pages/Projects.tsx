import Navbar from "@/components/Navbar";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Aplicação de gerenciamento de tarefas com colaboração em tempo real e notificações.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio moderno e responsivo para showcase de projetos e habilidades.",
    tech: ["React", "TypeScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard interativo de previsão do tempo com gráficos e mapas integrados.",
    tech: ["React", "Chart.js", "Weather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Projetos
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Alguns dos meus trabalhos mais recentes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Código
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
