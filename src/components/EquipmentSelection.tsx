import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Dropdown from "./Dropdown";
import "./EquipmentSelection.css";

const EquipmentSelection: React.FC = () => {
  const [screenModels, setScreenModels] = useState<string[]>([]);
  const [mediaPlayers, setMediaPlayers] = useState<string[]>([]);
  const [mountTypes, setMountTypes] = useState<string[]>([]);
  const [receptacleBoxes, setReceptacleBoxes] = useState<string[]>([]);

  const [selectedScreen, setSelectedScreen] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedMount, setSelectedMount] = useState("");
  const [selectedBox, setSelectedBox] = useState("");

  useEffect(() => {
    // Load Excel data
    const fetchData = async () => {
      const response = await fetch("/PDF_Builder.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      const screenSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Screen MFR"]);
      const mediaSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Media Player MFR"]);
      const mountsSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Mounts"]);
      const receptacleSheet = XLSX.utils.sheet_to_json(workbook.Sheets["Receptacle Box"]);

      // Map data to dropdown options
      setScreenModels(screenSheet.map((row: any) => row["Screen MFR"]));
      setMediaPlayers(mediaSheet.map((row: any) => row["MFG. PART"]));
      setMountTypes(mountsSheet.map((row: any) => row["MFG. PART"]));
      setReceptacleBoxes(receptacleSheet.map((row: any) => row["MFG. PART"]));
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="dropdown-container">
        <Dropdown
          label="LED Screen Model"
          options={screenModels}
          value={selectedScreen}
          onChange={setSelectedScreen}
        />
      </div>
      <div className="dropdown-container">
        <Dropdown
          label="Media Player"
          options={mediaPlayers}
          value={selectedPlayer}
          onChange={setSelectedPlayer}
        />
      </div>
      <div className="dropdown-container">
        <Dropdown
          label="Mount Type"
          options={mountTypes}
          value={selectedMount}
          onChange={setSelectedMount}
        />
      </div>
      {/* Uncomment to use Receptacle Box dropdown */}
      {/* <div className="dropdown-container">
        <Dropdown
          label="Receptacle Box"
          options={receptacleBoxes}
          value={selectedBox}
          onChange={setSelectedBox}
        />
      </div> */}
    </div>
  );
};

export default EquipmentSelection;
