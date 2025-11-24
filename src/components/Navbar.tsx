import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showChatTab: boolean;
}

export const Navbar = ({ activeTab, onTabChange, showChatTab }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseTabs = ["Home", "Solution", "Team"];
  const tabs = showChatTab ? [...baseTabs, "Chat"] : baseTabs;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      activeTab === "Home" 
        ? "bg-transparent border-b border-transparent" 
        : "bg-background/95 backdrop-blur-md border-b border-border"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IndiTwin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-2 animate-slide-up ${
            activeTab === "Home" ? "bg-black/20 backdrop-blur-sm rounded-lg p-2" : ""
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab
                    ? activeTab === "Home" ? "bg-white/10 text-primary" : "bg-primary/10 text-primary"
                    : activeTab === "Home" ? "text-white/80 hover:bg-white/5 hover:text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
