import Navbar from "@/components/Navbar";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior Consultant-Projects department",
    company: "In-Nova Junior enterprise",
    period: "2025- Present",
    description: "-Responsible for the development, maintenance, and optimization of web and mobile platforms.\n-Used project management and collaboration tools such as Jira, Microsoft Teams, and Git.\n-Led teams responsible for the planning and organization of events.",
  },
  {
    type: "work",
    title: "Ambassador",
    company: "NTT Data",
    period: "2025-Present",
    description: "-Responsible for building and maintaining relationships between the company and university students.\n-Collecting and analyzing feedback from students.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            My professional journey
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
                      <p className="text-foreground/80 whitespace-pre-line">{exp.description}</p>
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
