import Navbar from "@/components/Navbar";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    icon: "graduation",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal",
    period: "2016 - 2020",
    description: "Formação completa em fundamentos de programação, algoritmos, estruturas de dados e engenharia de software. Projeto final focado em desenvolvimento web.",
  },
  {
    icon: "award",
    title: "Certificação React Professional",
    institution: "Meta",
    period: "2021",
    description: "Certificação oficial em desenvolvimento React com foco em melhores práticas, performance e arquitetura de aplicações.",
  },
  {
    icon: "book",
    title: "Curso Full Stack JavaScript",
    institution: "Rocketseat",
    period: "2020",
    description: "Bootcamp intensivo cobrindo Node.js, React, React Native, TypeScript e ferramentas modernas de desenvolvimento.",
  },
  {
    icon: "award",
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    period: "2022",
    description: "Certificação em desenvolvimento e manutenção de aplicações na plataforma AWS, incluindo Lambda, DynamoDB e API Gateway.",
  },
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "graduation":
      return <GraduationCap className="w-6 h-6 text-primary" />;
    case "award":
      return <Award className="w-6 h-6 text-primary" />;
    case "book":
      return <BookOpen className="w-6 h-6 text-primary" />;
    default:
      return <GraduationCap className="w-6 h-6 text-primary" />;
  }
};

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Educação
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Minha formação acadêmica e certificações
          </p>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
                
                <div className="bg-gradient-card rounded-lg p-6 shadow-card hover:shadow-glow transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {getIcon(item.icon)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                      <p className="text-foreground/80">{item.description}</p>
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

export default Education;
