import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Line, Circle, Text } from "react-konva";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import './DrawingDisplay.css';

const DrawingDisplay = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [installationType, setInstallationType] = useState<"niche" | "flat-wall">("niche");
  const [distanceFromFloor, setDistanceFromFloor] = useState(18); 
  const [nicheHeight, setNicheHeight] = useState(60); 
  const [nicheWidth, setNicheWidth] = useState(50);
  const [nicheDepth, setNicheDepth] = useState(20); 
  const [screenWidth, setScreenWidth] = useState(48.5); 
  const [screenHeight, setScreenHeight] = useState(28); 

  const scale = 10; 
  const screenCenterX = 400;
  const screenTopY = 550 - distanceFromFloor * scale - screenHeight * scale;


  useEffect(() => {
    if (orientation === "horizontal") {
      setScreenWidth(48.5); 
      setScreenHeight(28); 
    } else if (orientation === "vertical") {
      setScreenWidth(28); 
      setScreenHeight(48.5);
    }
  }, [orientation]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
  
      <div>
        <h3>Configuration Options</h3>
        <label>

          <ToggleButtonGroup
            value={orientation}
            exclusive
            onChange={(event, newOrientation) => {
              if (newOrientation !== null) setOrientation(newOrientation);
            }}
          >
            <ToggleButton value="horizontal" className="toggle-button">Horizontal</ToggleButton>
            <ToggleButton value="vertical" className="toggle-button">Vertical</ToggleButton>
          </ToggleButtonGroup>
        </label>
        <br />
        <label>
       
          <ToggleButtonGroup
            value={installationType}
            exclusive
            onChange={(event, newInstallationType) => {
              if (newInstallationType !== null) setInstallationType(newInstallationType);
            }}
          >
            <ToggleButton value="flat-wall" className="toggle-button">Flat  Wall</ToggleButton>
            <ToggleButton value="niche" className="toggle-button">Niche</ToggleButton>
          </ToggleButtonGroup>
        </label>
        <br />
        <label>
          Distance from Floor to Center (in):
          <input
            type="number"
            value={distanceFromFloor}
            onChange={(e) => setDistanceFromFloor(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Screen Width (in):
          <input
            type="number"
            value={screenWidth}
            onChange={(e) => setScreenWidth(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Screen Height (in):
          <input
            type="number"
            value={screenHeight}
            onChange={(e) => setScreenHeight(Number(e.target.value))}
          />
        </label>
        <br />
        {installationType === "niche" && (
          <><div className="input-container">
          <label>
            Niche Height (in):
            <input
              type="number"
              value={nicheHeight}
              onChange={(e) => setNicheHeight(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Niche Width (in):
            <input
              type="number"
              value={nicheWidth}
              onChange={(e) => setNicheWidth(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Niche Depth (in):
            <input
              type="number"
              value={nicheDepth}
              onChange={(e) => setNicheDepth(Number(e.target.value))}
            />
          </label>
        </div></>
        )}
      </div>


      <Stage width={800} height={600} style={{ border: "1px solid #ccc" }}>
        <Layer>
          {/* Centerline */}
          <Line
            points={[400, 0, 400, 600]}
            stroke="gray"
            strokeWidth={1}
            dash={[4, 4]}
          />
          <Text x={410} y={290} text="Centerline of Display" fontSize={12} fill="gray" />

          {/* Floor Line */}
          <Line points={[0, 550, 800, 550]} stroke="gray" strokeWidth={1} />
          <Text x={10} y={560} text="Floor Line" fontSize={12} fill="gray" />

          {/* LED Screen */}
          <Rect
            x={400 - (screenWidth * scale) / 2} 
            y={screenTopY}
            width={screenWidth * scale}
            height={screenHeight * scale}
            fill="#ADD8E6"
            stroke="black"
            strokeWidth={2}
          />
          <Text
            x={400 - (screenWidth * scale) / 2}
            y={screenTopY - 20}
            text={`Screen (${screenWidth}" x ${screenHeight}")`}
            fontSize={14}
            fill="black"
          />
             {/* Power Outlet*/}
          <Rect
            x={400 - 30}
            y={550 - distanceFromFloor * scale + (screenHeight * scale) / 2 + 10}
            width={60}
            height={30}
            stroke="black"
            dash={[4, 4]}
          />
          <Text
            x={400 - 25}
            y={550 - distanceFromFloor * scale + (screenHeight * scale) / 2 + 45}
            text="Power Outlet"
            fontSize={12}
            fill="black"
          />

         
          <Line
            points={[
              400,
              550,
              400,
              screenTopY + (screenHeight * scale) / 2,
            ]}
            stroke="red"
            strokeWidth={1}
            dash={[4, 4]}
          />
          <Text
            x={410}
            y={(550 + screenTopY + (screenHeight * scale) / 2) / 2}
            text={`${distanceFromFloor}"`}
            fontSize={12}
            fill="red"
          />

     
          {installationType === "niche" && (
            <Rect
              x={400 - nicheWidth * scale / 2 - nicheDepth * scale / 2}
              y={screenTopY - 10}
              width={nicheWidth * scale + nicheDepth * scale}
              height={nicheHeight * scale + 20}
              stroke="blue"
              strokeWidth={1}
              dash={[6, 4]}
            />
          )}
          <Circle
            x={screenCenterX}
            y={screenTopY + (screenHeight * scale) / 2}
            radius={5}
            fill="red"
          />
          <Text
            x={screenCenterX + 10}
            y={screenTopY + (screenHeight * scale) / 2 - 10}
            text="Intended Screen Center"
            fontSize={12}
            fill="red"
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawingDisplay;
