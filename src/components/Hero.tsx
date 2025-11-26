import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex items-center overflow-hidden bg-[#0a0e1a]">
      {/* SimplePoly City 3D Animation - Full Screen */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe 
          title="SimplePoly City - Low Poly Assets"
          src="https://sketchfab.com/models/d1e9d4d0f7054c8ba36eb1a4fc41aca0/embed?autostart=1&preload=1&ui_theme=dark"
          className="w-full h-full"
          style={{ 
            border: 'none',
            minWidth: '100%',
            minHeight: '100%'
          }}
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          loading="eager"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* Content - Left Aligned */}
      <div className="relative z-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 sm:mb-12 tracking-tight animate-slide-up text-left">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            IndiTwin
          </span>
        </h1>

        <div className="flex justify-start">
          <Button
            onClick={() => navigate('/scene-config')}
            size="lg"
            className="relative px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Get Started
            <span className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity" />
          </Button>
        </div>
      </div>
    </section>
  );
};
