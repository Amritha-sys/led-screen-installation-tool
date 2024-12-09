import React from "react";

interface CanvasProps {
    model: string;
    orientation: string;
    installationType: string;
    floorDistance: number;
    nicheDepth: number;
}

const Canvas: React.FC<CanvasProps> = ({
    model,
    orientation,
    installationType,
    floorDistance,
    nicheDepth,
}) => {
    return (
        <div>
            <h3>Diagram</h3>
            <p>Model: {model}</p>
            <p>Orientation: {orientation}</p>
            <p>Installation Type: {installationType}</p>
            <p>Floor Distance: {floorDistance} inches</p>
            {installationType === "Niche" && <p>Niche Depth: {nicheDepth} inches</p>}
            <div style={{ border: "1px dashed black", width: "200px", height: "100px" }}>
                <p>Diagram will go here.</p>
            </div>
        </div>
    );
};

export default Canvas;
