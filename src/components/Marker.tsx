import React, { useState } from "react";
import { Stage, Layer, Arrow, Text } from "react-konva";

const DraggableArrowWithText = () => {
  const [arrowPoints, setArrowPoints] = useState({ x1: 100, y1: 100, x2: 200, y2: 150 });
  const [arrowLabel, setArrowLabel] = useState("Drag me!");
  const [labelPosition, setLabelPosition] = useState({ x: 150, y: 120 });

  const handleDragMove = (e: any, point: "start" | "end") => {
    const { x, y } = e.target.position();

    // Update points dynamically based on the dragged part
    if (point === "start") {
      setArrowPoints((prev) => ({ ...prev, x1: x, y1: y }));
    } else {
      setArrowPoints((prev) => ({ ...prev, x2: x, y2: y }));
    }

    // Update the label position to stay near the middle of the arrow
    setLabelPosition({
      x: (arrowPoints.x1 + arrowPoints.x2) / 2,
      y: (arrowPoints.y1 + arrowPoints.y2) / 2 - 20,
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrowLabel(e.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Input for Editing Label */}
      <div>
        <h3>Edit Arrow Label</h3>
        <label>
          Label Text:
          <input
            type="text"
            value={arrowLabel}
            onChange={handleTextChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>

      {/* Konva Canvas */}
      <Stage width={800} height={400} style={{ border: "1px solid #ccc" }}>
        <Layer>
          {/* Draggable Start Point */}
          <Arrow
            points={[arrowPoints.x1, arrowPoints.y1, arrowPoints.x2, arrowPoints.y2]}
            stroke="blue"
            fill="blue"
            strokeWidth={3}
            pointerLength={10}
            pointerWidth={10}
          />

          {/* Text Label for the Arrow */}
          <Text
            x={labelPosition.x}
            y={labelPosition.y}
            text={arrowLabel}
            fontSize={16}
            fill="black"
            draggable
          />

          {/* Drag Handles */}
          <Text
            x={arrowPoints.x1 - 10}
            y={arrowPoints.y1 - 20}
            text="Start"
            fontSize={12}
            fill="red"
            draggable
            onDragMove={(e) => handleDragMove(e, "start")}
          />
          <Text
            x={arrowPoints.x2 - 10}
            y={arrowPoints.y2 - 20}
            text="End"
            fontSize={12}
            fill="red"
            draggable
            onDragMove={(e) => handleDragMove(e, "end")}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default DraggableArrowWithText;
