import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { FolderOpen, Layers, Building2, Wrench, FileText, Sparkles, BookOpen, MapPin } from "lucide-react";

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
  const [simulationType, setSimulationType] = useState("");
  const [projectPath, setProjectPath] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [extent, setExtent] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({});
  const [sceneDescription, setSceneDescription] = useState("");
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(false);

  const handleSubmit = () => {
    if (!simulationType || !projectPath.trim() || !sceneDescription.trim() || !guidelinesAccepted) {
      return;
    }

    // Build a comprehensive message with all selected data (no markdown)
    let fullMessage = "";

    // Add simulation type (required)
    fullMessage += `Simulation Type: ${simulationType}\n\n`;

    // Add project path (required)
    fullMessage += `RoadRunner Project Path: ${projectPath}\n\n`;

    // Add map import data if provided
    if (latitude.trim() || longitude.trim() || extent.trim()) {
      fullMessage += "Import Map Data:\n";
      if (latitude.trim()) fullMessage += `Latitude: ${latitude}\n`;
      if (longitude.trim()) fullMessage += `Longitude: ${longitude}\n`;
      if (extent.trim()) fullMessage += `Extent: ${extent}\n`;
      fullMessage += "\n";
    }

    // Add selected scene elements (exclude "None" selections)
    const selectedCategories = Object.entries(selectedItems).filter(([_, value]) => value && value !== "None");
    if (selectedCategories.length > 0) {
      fullMessage += "Selected Scene Elements:\n";
      selectedCategories.forEach(([category, item]) => {
        fullMessage += `${category}: ${item}\n`;
      });
      fullMessage += "\n";
    }

    // Add scene description
    fullMessage += `Scene Description:\n${sceneDescription}`;

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

                <div className="space-y-4 text-sm text-foreground bg-background/50 p-5 rounded-lg border border-border/30 max-h-96 overflow-y-auto">
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

            {/* Simulation Type Section - After Guidelines */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <Layers className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <Label htmlFor="simulationType" className="text-lg font-bold text-foreground">
                      Simulation Type <span className="text-destructive">*</span>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Choose the type of traffic simulation you want to create (required)
                    </p>
                  </div>
                  <Select
                    value={simulationType}
                    onValueChange={setSimulationType}
                  >
                    <SelectTrigger 
                      id="simulationType" 
                      className="w-full h-12 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <SelectValue placeholder="Select simulation type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Indian">Indian</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Project Path Section */}
            <div className="bg-gradient-to-r from-muted/20 via-muted/10 to-transparent p-8 border-b border-border/50">
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

            {/* Import Your Map Section */}
            <div className="bg-gradient-to-r from-primary/5 via-primary/3 to-transparent p-8 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <Label className="text-lg font-bold text-foreground">
                      Import Your Map
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Provide geographic coordinates to import a real-world map (optional)
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="latitude" className="text-sm font-medium text-foreground">
                        Latitude
                      </Label>
                      <Input
                        id="latitude"
                        type="number"
                        step="any"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        placeholder="e.g., 28.6139"
                        className="w-full h-11 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="longitude" className="text-sm font-medium text-foreground">
                        Longitude
                      </Label>
                      <Input
                        id="longitude"
                        type="number"
                        step="any"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        placeholder="e.g., 77.2090"
                        className="w-full h-11 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="extent" className="text-sm font-medium text-foreground">
                        Extent (meters)
                      </Label>
                      <Input
                        id="extent"
                        type="number"
                        step="any"
                        value={extent}
                        onChange={(e) => setExtent(e.target.value)}
                        placeholder="e.g., 500"
                        className="w-full h-11 text-base bg-background/80 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground italic">
                    💡 Tip: Use Google Maps to find coordinates. Right-click on a location and select the coordinates to copy them.
                  </p>
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
                          <SelectItem value="None">None</SelectItem>
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
                  disabled={!simulationType || !projectPath.trim() || !sceneDescription.trim() || !guidelinesAccepted}
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
