import React from "react";
import { Stage, Layer, Rect, Text, Line } from "react-konva";

interface DrawingCanvasProps {
    orientation: string;
    screenSize: string;
    floorDistance: number;
    nicheDepth: number;
    receptacleBoxLocation: { x: number; y: number };
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
    orientation,
    screenSize,
    floorDistance,
    nicheDepth,
    receptacleBoxLocation,
}) => {
    return (
        <Stage width={600} height={400}>
            <Layer>
                <Text text="LED Screen Installation Diagram" x={10} y={10} fontSize={20} />
                <Rect
                    x={200}
                    y={150}
                    width={orientation === "Horizontal" ? 300 : 100}
                    height={orientation === "Horizontal" ? 100 : 300}
                    stroke="black"
                    strokeWidth={2}
                />
                <Text
                    text={`Screen Size: ${screenSize}`}
                    x={200}
                    y={130}
                    fontSize={16}
                    align="center"
                />
                <Line
                    points={[50, 150, receptacleBoxLocation.x, receptacleBoxLocation.y]}
                    stroke="gray"
                    dash={[4, 4]}
                />
                <Rect
                    x={receptacleBoxLocation.x}
                    y={receptacleBoxLocation.y}
                    width={40}
                    height={40}
                    fill="transparent"
                    stroke="red"
                    strokeWidth={2}
                />
                <Text
                    text={`Floor Distance: ${floorDistance} inches`}
                    x={10}
                    y={300}
                    fontSize={14}
                />
                <Text
                    text={`Niche Depth: ${nicheDepth} inches`}
                    x={10}
                    y={320}
                    fontSize={14}
                />
            </Layer>
        </Stage>
    );
};

export default DrawingCanvas;
