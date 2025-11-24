import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { Solution } from "@/components/Solution";
import { Team } from "@/components/Team";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showChatTab, setShowChatTab] = useState(false);

  const handleGetStarted = () => {
    setShowChatTab(true);
    setActiveTab("Chat");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Hero onGetStarted={handleGetStarted} />;
      case "Solution":
        return <Solution />;
      case "Team":
        return <Team />;
      case "Chat":
        return <ChatInterface />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className={`min-h-screen ${activeTab === "Home" ? "bg-[#0a0e1a]" : "bg-background"}`}>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} showChatTab={showChatTab} />
      <main className={activeTab === "Home" ? "" : "pt-16"}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
