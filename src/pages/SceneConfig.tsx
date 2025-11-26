import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { FolderOpen, Layers, Building2, Wrench, FileText, Sparkles } from "lucide-react";

// Scene configuration data structure
const sceneData = {
  "Root Level Files": [
    "BigTownCarsBldgs_HDMap",
    "BigTownClosed_HDMap",
    "BigTown_HDMap",
    "BuildingsScene",
    "CurvedTown_HDMap",
    "DemoStaticMap",
    "IndianTown_HDMap",
    "IndiaRealisticRoads",
    "LongRoadBuildings",
    "LongRoadTrees",
    "LongRoad_6Lane_CenterMark",
    "LongRoad_EnvObjects",
    "LongRoad_Town",
    "MCP_Demo_Map",
    "MCP_Everything_Map",
    "MegaTown_HDMap",
    "RealBigTown_HDMap",
    "RealTownHD",
    "SingleBuilding",
    "Town14Roads",
    "Town8Roads",
    "TownRealisticRoads",
    "Town_HDMap",
  ],
  Assemblies: [
    "ElectricPoles01",
    "ElectricPoles02",
    "ElectricPoles03",
    "ElectricPoles04",
    "PermittedLeft1",
    "PermittedLeft2",
    "PermittedLeft3",
    "ProtectedLeft1",
    "ProtectedLeft2",
    "ProtectedLeft3",
    "ProtectedLeft4",
    "StopSign",
    "YieldSign",
  ],
  Buildings: [
    "BusDepot_84mx86m_3storey",
    "BusStation_20mx100m_1storey",
    "Downtown_14mX15m_Corner_01_5storey",
    "Downtown_14mX15m_Corner_02_5storey",
    "Downtown_15mX15m_01_5storey",
    "Downtown_15mX15m_02_5storey",
    "Downtown_15mX30m_01_5storey",
    "Downtown_15mX30m_11storey",
    "Downtown_15mX30m_Corner_10storey",
    "Downtown_20mX30m_Corner_02_3storey",
    "Downtown_30mX15m_01_5storey",
    "Downtown_30mX30m_02_5storey",
    "Downtown_30mX30m_6storey",
    "Downtown_30mX30m_8storey",
    "Downtown_30mX30m_Corner_01_2storey",
    "Downtown_30mx30m_Corner_01_5storey",
    "Downtown_30mX30m_OffsetHeights",
    "Downtown_30mX45m_Corner_5storey",
    "Downtown_60mX60m_01_10storey",
    "Downtown_6mX15m_01_2storey",
    "Downtown_6mX15m_02_2storey",
    "Downtown_8mX15m_01_4storey",
    "Downtown_8mX15m_02_4storey",
    "Downtown_9mX14m_01_1storey",
    "GasStation_38mx30m_1storey",
    "GasStation_Sign01",
  ],
  "Buildings - Houses": [
    "House01_BeachColors",
    "House01_Blue",
    "House01_Cream",
    "House04_BeachColors",
    "House04_Blue",
    "House04_Cream",
    "House08_BeachColors",
    "House08_Blue",
    "House08_Cream",
  ],
  Damage: [
    "AsphaltPatch01",
    "Cracks01",
    "DirtPath01",
    "LinearCracks01",
    "OilPath01",
    "PartingLines01",
    "TarStreaks01",
  ],
  Extrusions: [
    "BridgeRailing",
    "ConstantSlopeBarrier",
    "Fence",
    "FShapeBarrier",
    "GuardRail",
    "GuardRail02",
    "HighwayBorderwall01",
    "HighwayBorderwall02",
    "HighwayBorderwall03",
    "HighwayFence01",
    "JerseyBarrier",
    "LargeFence01",
    "MetalFencePost01",
    "StandardRailroad01",
    "StandardRailroad02",
    "StoneRockyWall",
    "WoodenFence01",
    "WoodenFence02",
  ],
  Markings: [
    "ChevronRegion",
    "ContinentalCrosswalk",
    "CrosshatchRegion",
    "Crosswalk",
    "DashedCrosswalk",
    "DashedDoubleWhite",
    "DashedDoubleYellow",
    "DashedShortSingleWhite",
    "DashedShortSingleYellow",
    "DashedSingleWhite",
    "DashedSingleYellow",
    "DashedSolidWhite",
    "DashedSolidYellow",
    "EmptyMaterial",
    "FreewayDashedSingleWhite",
    "LadderCrosswalk",
    "LaneMarking1",
    "LaneMarking2",
    "LaneMarking3",
    "LaneMarkingYellow1",
    "LaneMarkingYellow2",
    "LaneMarkingYellow3",
    "SimpleCrosswalk",
    "SolidDoubleWhite",
    "SolidDoubleYellow",
    "SolidSingleWhite",
    "SolidSingleYellow",
    "SolidSingleYellowWide",
    "StopLine",
    "StripedRegion",
    "StripedRegion_Yellow",
  ],
  "Props - Construction": [
    "Barricade01",
    "Barricade02",
    "ConstructionCart",
    "Dumpster_Lg01",
    "Dumpster_Sm01",
    "FencePost01",
    "Gantry",
    "Trashcan01",
  ],
  "Props - Electric Poles": [
    "Arrester_Lg01",
    "Arrester_Lg02",
    "Arrester_Lg03",
    "Arrester_Lg04",
    "Arrester_Lg05",
    "Arrester_Lg06",
    "Arrester_Med01",
    "Arrester_Med02",
    "Arrester_Med03",
    "Arrester_Sm01",
    "DoubleCrossarm_Full_Lg",
    "DoubleCrossarm_Full_Med",
    "DoubleCrossarm_Full_Sm",
    "DoubleCrossarm_Half_Med",
    "DoubleCrossarm_Half_Sm",
    "DoubleUtilityPole_65ft",
    "DoubleUtility_Crossarm01",
    "DoubleUtility_Crossarm02",
    "DoubleUtility_Support01",
    "ElectricalTower01_100ft",
    "ElectricalTower02_100ft",
    "ElectricalTower03_100ft",
    "ElectricalTower04_100ft",
    "ElectricalTower05_100ft",
    "ElectricalTower06_100ft",
    "Fuse01",
    "Fuse02",
    "FuseBox",
    "Insulator01",
    "PoleStep",
    "Side_Insulator01",
    "SingleCrossarm_Full_Lg",
    "SingleCrossarm_Full_Med",
    "SingleCrossarm_Full_Sm",
    "SingleCrossarm_Half_Med",
    "SingleCrossarm_Half_Sm",
    "Transformer01",
    "Transformer_Bundle01",
    "UtilityPole_30ft",
    "UtilityPole_40ft",
    "UtilityPole_50ft",
    "UtilityPole_60ft",
  ],
  "Props - Misc": [
    "Rock01",
    "Rock02",
    "Rock03",
    "Rock04",
    "Rocks",
    "Wall",
  ],
  "Props - Traffic Control": [
    "ArrowBoard01",
    "ArrowBoard03",
    "Barricade01",
    "Barricade02",
    "BottDot01",
    "BottDot02",
  ],
};

export const SceneConfig = () => {
  const navigate = useNavigate();
  const [projectPath, setProjectPath] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({});
  const [sceneDescription, setSceneDescription] = useState("");

  const handleSubmit = () => {
    if (!sceneDescription.trim()) {
      return;
    }

    // Navigate to chat with the description pre-filled
    navigate("/chat", { state: { initialMessage: sceneDescription } });
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Root")) return <Layers className="w-5 h-5" />;
    if (category.includes("Building")) return <Building2 className="w-5 h-5" />;
    if (category.includes("Props")) return <Wrench className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
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
            {/* Project Path Section - Highlighted */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <FolderOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <Label htmlFor="projectPath" className="text-lg font-bold text-foreground">
                      Your RoadRunner Project Path
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Specify the location of your RoadRunner project files
                    </p>
                  </div>
                  <Input
                    id="projectPath"
                    type="text"
                    placeholder="e.g., C:/Projects/RoadRunner/MyProject"
                    value={projectPath}
                    onChange={(e) => setProjectPath(e.target.value)}
                    className="w-full h-12 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Scene Elements Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(sceneData).map(([category, items]) => (
                  <div 
                    key={category} 
                    className="group space-y-3 p-5 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {getCategoryIcon(category)}
                      </div>
                      <Label htmlFor={category} className="text-base font-semibold text-foreground cursor-pointer">
                        {category}
                      </Label>
                    </div>
                    <Select
                      value={selectedItems[category] || ""}
                      onValueChange={(value) =>
                        setSelectedItems((prev) => ({ ...prev, [category]: value }))
                      }
                    >
                      <SelectTrigger 
                        id={category} 
                        className="w-full h-11 bg-background/60 border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <SelectValue placeholder={`Select ${category.toLowerCase()}...`} />
                      </SelectTrigger>
                      <SelectContent>
                        {items.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>

              {/* Scene Description */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
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
                  disabled={!sceneDescription.trim()}
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
