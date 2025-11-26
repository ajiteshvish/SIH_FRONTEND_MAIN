import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Brain, Code, Route, Users } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Ajitesh Vishwakarma",
      role: "Traffic Systems Engineer",
      description: "Specializes in urban mobility modeling and intelligent transportation systems",
      initials: "AV",
      color: "bg-primary/10 text-primary",
      icon: Route,
    },
    {
      name: "Priyanshu Khare",
      role: "AI & Simulation Lead",
      description: "Builds AI models for real-time traffic prediction and optimization",
      initials: "PK",
      color: "bg-traffic-green/10 text-traffic-green",
      icon: Brain,
    },
    {
      name: "Anurag Jaiswal",
      role: "Product Manager",
      description: "Drives product vision and ensures IndiTwin meets city planner needs",
      initials: "AJ",
      color: "bg-traffic-amber/10 text-traffic-amber",
      icon: Users,
    },
    {
      name: "Bilal Ahmed",
      role: "Frontend Developer",
      description: "Creates intuitive interfaces for complex traffic data visualization",
      initials: "BA",
      color: "bg-primary/10 text-primary",
      icon: Code,
    },
    {
      name: "Samaksh Mandil",
      role: "Backend Developer",
      description: "Develops robust APIs and manages data infrastructure",
      initials: "SM",
      color: "bg-traffic-green/10 text-traffic-green",
      icon: Code,
    },
    {
      name: "Aana Pandey",
      role: "UX Designer",
      description: "Designs user-centered experiences for traffic management systems",
      initials: "AP",
      color: "bg-traffic-amber/10 text-traffic-amber",
      icon: Users,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet the IndiTwin Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Experts in traffic engineering, AI, and urban planning working together to revolutionize city mobility
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 md:p-8 bg-gradient-card border-border hover:border-primary/40 transition-all hover:shadow-glow-primary hover:-translate-y-2 duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative mx-auto sm:mx-0">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarFallback className={member.color}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 p-1.5 sm:p-2 rounded-full bg-background border border-border group-hover:border-primary/40 transition-colors">
                    <member.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};
