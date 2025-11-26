import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";

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
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({});
  const [sceneDescription, setSceneDescription] = useState("");

  const handleSubmit = () => {
    if (!sceneDescription.trim()) {
      return;
    }

    // Navigate to chat with the description pre-filled
    navigate("/chat", { state: { initialMessage: sceneDescription } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab="Scene Config" onTabChange={() => {}} showChatTab={false} />
      
      <main className="pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Configure Your Scene
            </h1>
            <p className="text-muted-foreground">
              Select scene elements and describe your traffic simulation scenario
            </p>
          </div>

          <div className="space-y-6 bg-card border border-border rounded-2xl p-6 shadow-lg">
            {Object.entries(sceneData).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <Label htmlFor={category} className="text-base font-semibold">
                  {category}
                </Label>
                <Select
                  value={selectedItems[category] || ""}
                  onValueChange={(value) =>
                    setSelectedItems((prev) => ({ ...prev, [category]: value }))
                  }
                >
                  <SelectTrigger id={category} className="w-full">
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

            <div className="space-y-2 pt-4">
              <Label htmlFor="description" className="text-base font-semibold">
                Describe Your Scene
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your traffic scenario in detail... For example: 'Create a busy intersection with heavy traffic during rush hour, including buses and pedestrians crossing.'"
                value={sceneDescription}
                onChange={(e) => setSceneDescription(e.target.value)}
                className="min-h-[150px] resize-none"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!sceneDescription.trim()}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                Submit & Continue to Chat
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
