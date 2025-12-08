import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Navbar } from "@/components/Navbar";
import { FolderOpen, Sparkles, BookOpen, MapPin } from "lucide-react";

export const SceneConfig = () => {
  const navigate = useNavigate();
  const [projectPath, setProjectPath] = useState("");
  const [extent, setExtent] = useState("");
  const [sceneDescription, setSceneDescription] = useState("");
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(false);

  const handleSubmit = () => {
    if (!projectPath.trim() || !sceneDescription.trim() || !guidelinesAccepted) {
      return;
    }

    // Build a comprehensive message with all selected data (no markdown)
    let fullMessage = "";

    // Add project path (required)
    fullMessage += `RoadRunner Project Path: ${projectPath}\n\n`;

    // Add map import data (commented out for now)
    // if (extent.trim()) {
    //   fullMessage += "Import Map Data:\n";
    //   fullMessage += `Extent: ${extent} meters\n\n`;
    // }

    // Add scene description
    fullMessage += `Scene Description:\n${sceneDescription}`;

    // Navigate to chat with the complete configuration
    navigate("/chat", { state: { initialMessage: fullMessage } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar activeTab="Scene Config" onTabChange={() => {}} showChatTab={false} />
      
      <main className="pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow-primary mb-6">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Configure Your Scene
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your perfect traffic simulation by selecting scene elements and describing your scenario
            </p>
          </div>

          {/* Main Form Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Guidelines Section - FIRST THING USER SEES */}
            <div className="p-8 border-b border-border/50">
              <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">RoadRunner Usage Guidelines</h3>
                    <p className="text-sm text-muted-foreground mb-4">Please read the following guidelines before proceeding:</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-foreground bg-background/50 p-5 rounded-lg border border-border/30 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/50">
                  <div>
                    <h4 className="font-semibold text-base mb-2">1. Check Licence</h4>
                    <p className="text-muted-foreground">When RoadRunner starts, it first checks whether you have a valid licence. The system will show Yes/No indicating whether the licence is available.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-2">2. RoadRunner Start Screen</h4>
                    <p className="text-muted-foreground mb-2">After the licence check, RoadRunner shows two main options:</p>
                    
                    <div className="ml-4 space-y-3">
                      <div>
                        <p className="font-medium">A. Create New Project</p>
                        <ul className="list-disc ml-6 text-muted-foreground space-y-1 mt-1">
                          <li>Enter Project Name: Type the name of the new project</li>
                          <li>Select Save Path: Browse and choose the folder where you want to store the project</li>
                          <li>Select Assets Type: Choose between Base or Base + Add-On</li>
                          <li>Click "Create": The new project will be generated</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">B. Open Existing Project</p>
                        <ul className="list-disc ml-6 text-muted-foreground space-y-1 mt-1">
                          <li>Click on "Open Project"</li>
                          <li>Browse and select the project folder of an existing RoadRunner project</li>
                          <li>The project will open in the editor</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-2">3. Get Started Form</h4>
                    <p className="text-muted-foreground mb-2">When you click "Get Started", fill the form step by step:</p>
                    <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                      <li>Select RoadRunner Project Path (mandatory): Browse and choose your RoadRunner project folder</li>
                      <li>Select Assets: Choose the assets you want the scene to use (Base or Base + Add-On)</li>
                      <li>Describe the Scene: Provide a detailed description of what you want to build</li>
                      <li>Click "Submit": All details will be sent to the chatbot</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base mb-2">4. Build Scene in RoadRunner</h4>
                    <p className="text-muted-foreground">After submitting the form, RoadRunner will open automatically. The system will use the provided details to build or modify the scene inside the selected project. The scene will then load inside RoadRunner for further editing.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Checkbox 
                    id="guidelines" 
                    checked={guidelinesAccepted}
                    onCheckedChange={(checked) => setGuidelinesAccepted(checked as boolean)}
                    className="border-primary data-[state=checked]:bg-primary"
                  />
                  <Label 
                    htmlFor="guidelines" 
                    className="text-sm font-medium cursor-pointer select-none"
                  >
                    I have read and understood the RoadRunner usage guidelines
                  </Label>
                </div>
              </div>
            </div>

            {/* Project Path Section */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <FolderOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <Label htmlFor="projectPath" className="text-lg font-bold text-foreground">
                      Your RoadRunner Project Path <span className="text-destructive">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enter the full path to your RoadRunner project folder (required)
                    </p>
                  </div>
                  <Input
                    id="projectPath"
                    value={projectPath}
                    onChange={(e) => setProjectPath(e.target.value)}
                    placeholder="e.g., C:/Users/YourName/Documents/RoadRunner/MyProject"
                    required
                    className="w-full h-12 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Import Your Map Section - COMMENTED OUT FOR NOW */}
            {/* <div className="bg-gradient-to-r from-primary/5 via-primary/3 to-transparent p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <Label htmlFor="extent" className="text-lg font-bold text-foreground">
                      Import Your Map <span className="text-destructive">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Specify the extent (area size) for your map import in meters (required)
                    </p>
                  </div>
                  
                  <Input
                    id="extent"
                    type="number"
                    step="any"
                    value={extent}
                    onChange={(e) => setExtent(e.target.value)}
                    placeholder="Enter extent in meters (e.g., 500)"
                    required
                    className="w-full h-12 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
            </div> */}

            {/* Scene Description */}
            <div className="p-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-primary">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-lg font-bold text-foreground">
                      Describe Your Scene
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Paint a picture of your traffic simulation scenario
                    </p>
                  </div>
                </div>
                <Textarea
                  id="description"
                  placeholder="Describe your traffic scenario in detail... For example: 'Create a busy intersection with heavy traffic during rush hour, including buses and pedestrians crossing.'"
                  value={sceneDescription}
                  onChange={(e) => setSceneDescription(e.target.value)}
                  className="min-h-[160px] resize-none bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-base leading-relaxed transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleSubmit}
                  disabled={!projectPath.trim() || !sceneDescription.trim() || !guidelinesAccepted}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 px-12 py-6 text-lg font-semibold rounded-xl"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Submit & Continue to Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
