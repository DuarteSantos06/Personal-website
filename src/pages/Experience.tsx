import Navbar from "@/components/Navbar";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Desenvolvedor Full Stack Senior",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description: "Desenvolvimento de aplicações web escaláveis usando React, Node.js e PostgreSQL. Liderança técnica em projetos de grande escala.",
  },
  {
    type: "work",
    title: "Desenvolvedor Frontend",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Criação de interfaces responsivas e interativas usando React, TypeScript e Tailwind CSS. Colaboração com designers e backend developers.",
  },
  {
    type: "education",
    title: "Bacharelado em Ciência da Computação",
    company: "Universidade Federal",
    period: "2016 - 2020",
    description: "Formação completa em fundamentos de programação, algoritmos, estruturas de dados e engenharia de software.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Experiência
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Minha jornada profissional e acadêmica
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
                
                <div className="bg-gradient-card rounded-lg p-6 shadow-card hover:shadow-glow transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {exp.type === "work" ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      <p className="text-foreground/80">{exp.description}</p>
                    </div>
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

export default Experience;
