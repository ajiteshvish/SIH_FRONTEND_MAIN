import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Team = () => {
  const teamMembers = [
    {
      name: "Ajitesh Vishwakarma",
      role: "Full-Stack Web & WebGL Developer",
      initials: "AV",
      color: "bg-primary/10 text-primary",
      image: "/team/Ajitesh_Vishwakarma.jpeg",
    },
    {
      name: "Priyanshu Khare",
      role: "AI & Backend Developer",
      initials: "PK",
      color: "bg-traffic-green/10 text-traffic-green",
      image: "/team/Priyanshu_Khare.jpeg",
    },
    {
      name: "Anurag Jaiswal",
      role: "AI & Product Manager",
      initials: "AJ",
      color: "bg-traffic-amber/10 text-traffic-amber",
      image: "/team/Anurag_Jaiswal.jpeg",
    },
    {
      name: "Bilal Ahmed",
      role: "ML Engineer",
      initials: "BA",
      color: "bg-primary/10 text-primary",
      image: "/team/Bilal_Ahmed.jpeg",
    },
    {
      name: "Samaksh Mandil",
      role: "Backend Developer",
      initials: "SM",
      color: "bg-traffic-green/10 text-traffic-green",
      image: "/team/Samaksh_Mandil.jpeg",
    },
    {
      name: "Aana Pandey",
      role: "Frontend Developer",
      initials: "AP",
      color: "bg-traffic-amber/10 text-traffic-amber",
      image: "/team/Aana_Pandey.jpeg",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet the IndiTwin Team
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Experts in traffic engineering, AI, and urban planning working together to revolutionize city mobility
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-8 sm:p-10 md:p-12 bg-gradient-card border-2 border-border hover:border-primary/50 transition-all hover:shadow-glow-primary hover:-translate-y-3 duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <Avatar className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-primary/20 group-hover:border-primary/50 transition-colors shadow-lg">
                  {member.image && <AvatarImage src={member.image} alt={member.name} className="object-cover" />}
                  <AvatarFallback className={`${member.color} text-3xl sm:text-4xl font-bold`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-medium">{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};
