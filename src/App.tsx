import React, { useEffect, useRef } from "react";
import { EquipmentProvider } from "./context/EquipmentContext";
import EquipmentSelection from "./components/EquipmentSelection";
import KonvaDrawingDisplay from "./components/DrawingDisplay";
import { Box, Button } from "@mui/material";
import UserInputForm from "./components/DescriptionInput";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const App: React.FC = () => {
    const appRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load CSV data (if required)
    }, []);

    const handleDownloadPDF = async () => {
        if (!appRef.current) return;

        try {
            const canvas = await html2canvas(appRef.current, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("portrait", "mm", "a4");

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("LED_Screen_Installation.pdf");
        } catch (error) {
            console.error("Failed to generate PDF", error);
        }
    };

    return (
        <EquipmentProvider>
            <div>
                <h1>LED Screen Installation Tool</h1>
                <Box display="flex" flexDirection="row" gap={5} ref={appRef}>
                    <KonvaDrawingDisplay />
                    <Box display="flex" flexDirection="column">
                        <EquipmentSelection />
                        <UserInputForm
                            onSubmit={(data: any) => {
                                console.log("Form Data Submitted", data);
                            }}
                        />
                          <Button onClick={handleDownloadPDF} style={{background:"blue",color:"white"}}>Download </Button>
                    </Box>
                </Box>
              
            </div>
        </EquipmentProvider>
    );
};

export default App;
