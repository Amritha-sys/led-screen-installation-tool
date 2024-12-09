import React, { createContext, useContext, useState } from "react";

interface EquipmentContextProps {
    selectedModel: string;
    setSelectedModel: (value: string) => void;
    mountType: string;
    setMountType: (value: string) => void;
    mediaPlayer: string;
    setMediaPlayer: (value: string) => void;
    receptacleBox: string;
    setReceptacleBox: (value: string) => void;
}

const EquipmentContext = createContext<EquipmentContextProps | undefined>(undefined);

export const EquipmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedModel, setSelectedModel] = useState("");
    const [mountType, setMountType] = useState("");
    const [mediaPlayer, setMediaPlayer] = useState("");
    const [receptacleBox, setReceptacleBox] = useState("");

    return (
        <EquipmentContext.Provider
            value={{ selectedModel, setSelectedModel, mountType, setMountType, mediaPlayer, setMediaPlayer, receptacleBox, setReceptacleBox }}
        >
            {children}
        </EquipmentContext.Provider>
    );
};

export const useEquipmentContext = () => {
    const context = useContext(EquipmentContext);
    if (!context) {
        throw new Error("useEquipmentContext must be used within an EquipmentProvider");
    }
    return context;
};
