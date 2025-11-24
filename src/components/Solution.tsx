import { Card } from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  CheckCircle2,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";

export const Solution = () => {
  const features = [
    {
      icon: Activity,
      title: "3D Traffic Visualization",
      description: "Animated map with real-time vehicle flows and congestion patterns",
      color: "text-primary",
      glow: "shadow-glow-primary",
    },
    {
      icon: Zap,
      title: "Scenario Testing",
      description: "Try new traffic plans safely in simulation before deployment",
      color: "text-traffic-amber",
      glow: "shadow-glow-amber",
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered forecasting of congestion and bottlenecks",
      color: "text-traffic-green",
      glow: "shadow-glow-green",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Insights",
      description: "Comprehensive KPIs and actionable recommendations for planners",
      color: "text-primary",
      glow: "shadow-glow-primary",
    },
  ];

  const benefits = [
    { icon: CheckCircle2, text: "Reduced congestion by up to 40%", color: "text-traffic-green" },
    { icon: Shield, text: "Improved safety and accident prevention", color: "text-primary" },
    { icon: LineChart, text: "Data-driven decision making", color: "text-traffic-amber" },
    { icon: Zap, text: "Cost savings from better planning", color: "text-traffic-green" },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Digital twins for real-world traffic challenges
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="p-4 sm:p-6 md:p-8 mb-12 bg-gradient-card border-primary/30 animate-slide-up">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
            <div className="w-full">
              <div className="mb-4">
                <div className="text-xs sm:text-sm text-primary font-semibold mb-1">Problem Statement ID: 25100</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Accelerating High-Fidelity Road Network Modeling for Indian Traffic Simulations</h3>
                <div className="text-xs sm:text-sm text-muted-foreground mb-4 flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-0">
                  <span className="font-semibold">Organization:</span> <span className="sm:ml-1">MathWorks India Pvt. Ltd.</span>
                  <span className="hidden sm:inline mx-2">|</span>
                  <span className="font-semibold">Category:</span> <span className="sm:ml-1">Software</span>
                  <span className="hidden sm:inline mx-2">|</span>
                  <span className="font-semibold">Theme:</span> <span className="sm:ml-1">Transportation & Logistics</span>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p className="leading-relaxed">
                  Urban traffic congestion in Indian cities is worsened by the limitations of current urban planning software, which often assumes ideal, well-maintained road conditions typical of developed countries. Such software fails to account for the unpredictable and nuanced realities of Indian roads—such as potholes, temporary barricades, partial lane closures, construction activities, and erratic driver behaviors.
                </p>
                
                <p className="leading-relaxed">
                  Manually modeling these complex and dynamic road features into digital twins for realistic traffic simulations is both tedious and time-consuming, often requiring significant engineering effort before any meaningful simulation can be conducted.
                </p>
                
                <div className="bg-primary/5 p-3 sm:p-4 rounded-lg border border-primary/20 mt-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Our Solution Approach:</h4>
                  <p className="leading-relaxed text-sm sm:text-base">
                    IndiTwin addresses this challenge by leveraging MATLAB, Simulink, Automated Driving Toolbox, RoadRunner, and generative AI to accelerate the creation of highly detailed digital twins of existing Indian road junctions and networks. Our solution enables users to easily incorporate typical Indian road features and simulate hyper-local vehicular behaviors, empowering traffic management agencies to run realistic simulations for crisis handling, congestion management, and infrastructure planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* How It Works */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">How IndiTwin Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Ingests real-time and historical traffic data from multiple sources",
              "Builds a virtual replica (digital twin) of your city's road network",
              "Simulates 'what-if' scenarios including new signals, lane changes, and policies",
              "Uses AI to predict congestion patterns and optimize traffic flows",
            ].map((step, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-card border-border hover:border-primary/40 transition-all hover:${feature.glow} group`}
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:border-primary/40 transition-all hover:shadow-glow-primary group"
              >
                <div className="flex items-center gap-4">
                  <benefit.icon className={`w-6 h-6 ${benefit.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
