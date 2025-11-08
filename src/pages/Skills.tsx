import Navbar from "@/components/Navbar";

const SkillsKnown = [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },

]

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <main className="container mx-auto  px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl  font-bold text-foreground mb-4">
            Skills
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            My technical skills and proficiencies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SkillsKnown.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-lg p-6 shadow-card hover:shadow-glow transition-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-foreground/80">
                  Proficiency Level: {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Skills;