import { useState, useRef } from "react";
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
import { FolderOpen, Layers, Building2, Wrench, FileText, Sparkles, Upload } from "lucide-react";

// Scene configuration data structure
const sceneData = {
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
  "Props - Trees": [
    "Ash01", "Azalea01", "Beech01", "Birch01", "Bush_Lg01", "Bush_Med01", "Bush_Med02", "Bush_Med03", "Bush_Med04", "Bush_Med05",
    "Bush_Sm01", "Bush_Sm02", "Bush_Sm03", "Bush_Sm04", "Bush_Sm05", "Bush_Sm06", "CalPalm_Full_Lg01", "CalPalm_Full_Lg02",
    "CalPalm_Full_Lg03", "CalPalm_Full_Lg_Curve01", "CalPalm_Full_Med01", "CalPalm_Full_Sm01", "CalPalm_Half_Lg01", "CalPalm_Half_Lg02",
    "CalPalm_Half_Lg03", "CalPalm_Half_Med01", "CalPalm_Half_Med_Curve01", "CalPalm_Half_Sm01", "CalPalm_Half_Sm02", "CalPalm_Trim_Lg01",
    "CalPalm_Trim_Lg02", "CalPalm_Trim_Lg03", "CalPalm_Trim_Med01", "CalPalm_Trim_Med02", "CalPalm_Trim_Med_Curve01", "CalPalm_Trim_Med_Curve02",
    "CalPalm_Trim_Sm_Curve01", "Camphor01", "CoulPine_Lg01", "CoulPine_Lg02", "CoulPine_Lg03", "CoulPine_Lg04", "CoulPine_Med01",
    "CoulPine_Med02", "CoulPine_Med03", "CoulPine_Med04", "CoulPine_Med05", "CoulPine_Med06", "CoulPine_Sm01", "CoulPine_Sm02",
    "CoulPine_Sm03", "CoulPine_Sm04", "CoulPine_Sm05", "CoulPine_Sm06", "Cypress_Lg01", "Cypress_Med01", "Cypress_Sm01", "Elm01",
    "Eucalyptus_Lg01", "Eucalyptus_Lg02", "Eucalyptus_Lg03", "Eucalyptus_Lg04", "Eucalyptus_Lg05", "Eucalyptus_Med01", "Eucalyptus_Med02",
    "Eucalyptus_Med03", "Eucalyptus_Med04", "Eucalyptus_Sm01", "Eucalyptus_Sm02", "Eucalyptus_Sm03", "Eucalyptus_Sm04", "Gingko01",
    "GingkoFall", "Hydrangea01", "Maple01", "TridentMaple", "Yoshino_Cherry_Blooming", "Yoshino_Cherry_Leaves", "Zelkova01"
  ],
  "Road Styles": [
    "CountryRoad", "Freeway", "FreewayOneWay", "Highway", "HighwayPassing", "MainStreetCenterTurn", "MainStreetCenterTurnBike",
    "MainStreetMedian", "MainStreetMedianBike", "OneWay", "Ramp", "Residential", "ResidentialMarked", "Simple"
  ],
  "Scene Templates": [
    "3 Way Median", "3 Way Stop", "3 Way Through Stop", "4 Way Permitted", "4 Way Protected", "4 Way Roundabout 1", "4 Way Roundabout 2",
    "4 Way Roundabout 3", "4 Way Stop", "4 Way Yield", "90deg Turn 20m", "Bridge Crossing", "Freeway Bridge", "Freeway Interchange",
    "Freeway Offramps 1", "Straight 40m"
  ],
  "Scene Templates - Germany": [
    "3 Way Median", "3 Way Stop", "3 Way Through Stop", "4 Way Permitted", "4 Way Protected", "4 Way Roundabout 1", "4 Way Roundabout 2",
    "4 Way Roundabout 3", "4 Way Stop", "4 Way Yield", "90deg Turn 20m", "Bridge Crossing", "Freeway Bridge", "Freeway Interchange",
    "Freeway Offramps 1", "Straight 40m"
  ],
  "Scene Templates - Parking Lot": [
    "InnerParking_01", "InnerParking_02", "InnerParking_03", "SideCorner_01", "SideCorner_02", "SideExit_01", "SideExit_02",
    "SideExit_03", "SideParking_01", "SideParking_02", "SideParking_03", "TrafficIsland"
  ],
  "Scene Templates - UK": [
    "3 Way Stop", "3 Way Through Stop", "4 Way Permitted", "4 Way Protected", "4 Way Roundabout 1", "4 Way Roundabout 2",
    "4 Way Roundabout 3", "4 Way Stop", "4 Way Yield", "90deg Turn 20m", "Bridge Crossing", "Freeway Bridge", "Freeway Interchange",
    "Freeway Offramps 1", "Straight 40m", "Three Way Median"
  ],
  "Signs - UK": [
    "Sign_322.1A", "Sign_400yds", "Sign_501", "Sign_504.1_01", "Sign_504.1_02", "Sign_504.1_03", "Sign_670V20", "Sign_670V30",
    "Sign_670V40", "Sign_670V50", "Sign_670V60", "Sign_670V70", "Sign_AverageSpeedCheck", "Sign_BikeLaneStart", "Sign_BusLane",
    "Sign_BusStop", "Sign_DisabledParking", "Sign_End", "Sign_KeepClear", "Sign_NoStopping-164", "Sign_Roundabout", "Sign_STOP"
  ],
  "Stencils": [
    "Stencil_10_Stretched", "Stencil_15_Stretched", "Stencil_20_Stretched", "Stencil_25_Stretched", "Stencil_30_Stretched",
    "Stencil_AHEAD", "Stencil_ArrowType1Long", "Stencil_ArrowType1Medium", "Stencil_ArrowType1Short", "Stencil_Bicycle1",
    "Stencil_BIKE", "Stencil_BUS", "Stencil_Disabled", "Stencil_PedCrossing", "Stencil_STOP", "Stencil_Yield"
  ],
  "Stencils - UK": [
    "Stencil_AheadOnly", "Stencil_Bike", "Stencil_BusLane", "Stencil_BusOnly", "Stencil_BusStop", "Stencil_GiveWay",
    "Stencil_KeepClear", "Stencil_LeftOnly", "Stencil_RightOnly", "Stencil_SchoolKeepClear", "Stencil_Slow",
    "Stencil_SpeedLimit_30", "Stencil_SpeedLimit_40", "Stencil_Stop", "Stencil_TurnLeft", "Stencil_TurnRight"
  ],
  "Vehicles": [
    "Ambulance", "Backhoe", "CementTruck", "CompactCar", "DeliveryVan", "GarbageTruck", "PickupTruck", "SchoolBus",
    "Sedan", "SemiTruck", "SemiTruck_Trailer01", "SemiTruck_Trailer02", "SemiTruck_Trailer03", "SemiTruck_Trailer04",
    "Suv", "UtilityTruck"
  ],
};

export const SceneConfig = () => {
  const navigate = useNavigate();
  const [projectPath, setProjectPath] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({});
  const [sceneDescription, setSceneDescription] = useState("");
  const folderInputRef = useRef<HTMLInputElement>(null);

  const handleFolderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Get the path from the first file
      const firstFile = files[0];
      const path = firstFile.webkitRelativePath || firstFile.name;
      const folderPath = path.split('/')[0];
      setProjectPath(folderPath);
    }
  };

  const handleBrowseFolderClick = () => {
    folderInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!sceneDescription.trim()) {
      return;
    }

    // Build a comprehensive message with all selected data
    let fullMessage = "";

    // Add project path if provided
    if (projectPath) {
      fullMessage += `**RoadRunner Project Path:** ${projectPath}\n\n`;
    }

    // Add selected scene elements
    const selectedCategories = Object.entries(selectedItems).filter(([_, value]) => value);
    if (selectedCategories.length > 0) {
      fullMessage += "**Selected Scene Elements:**\n";
      selectedCategories.forEach(([category, item]) => {
        fullMessage += `- **${category}:** ${item}\n`;
      });
      fullMessage += "\n";
    }

    // Add scene description
    fullMessage += `**Scene Description:**\n${sceneDescription}`;

    // Navigate to chat with the complete configuration
    navigate("/chat", { state: { initialMessage: fullMessage } });
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
                      Your RoadRunner Project Folder
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Browse and select your RoadRunner project folder
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      ref={folderInputRef}
                      type="file"
                      onChange={handleFolderSelect}
                      className="hidden"
                      {...({ webkitdirectory: "", directory: "" } as any)}
                      multiple
                    />
                    <div className="flex gap-2">
                      <Input
                        value={projectPath}
                        placeholder="No folder selected"
                        readOnly
                        className="flex-1 h-12 text-base bg-background/60 border-border/50 cursor-pointer"
                        onClick={handleBrowseFolderClick}
                      />
                      <Button
                        type="button"
                        onClick={handleBrowseFolderClick}
                        variant="outline"
                        className="h-12 px-6 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        Browse
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scene Elements Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* All Categories - Dropdowns */}
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
