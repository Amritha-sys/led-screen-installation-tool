import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { EquipmentProvider } from "./context/EquipmentContext";

ReactDOM.render(
    <EquipmentProvider>
        <App />
    </EquipmentProvider>,
    document.getElementById("root")
);
