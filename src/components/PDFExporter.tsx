import React from "react";
import jsPDF from "jspdf";
import { Button } from "@mui/material";

const PDFExporter: React.FC = () => {
    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.text("LED Screen Installation Diagram", 20, 20);
        doc.save("LED_Screen_Installation.pdf");
    };

    return <Button onClick={handleExportPDF} style={{backgroundColor:"green",color:"white"}}>Download PDF</Button>;
};

export default PDFExporter;
