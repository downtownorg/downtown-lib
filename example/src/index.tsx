import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeProvider } from "downtown-lib";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ColorModeProvider mode="dark">
            <App />
        </ColorModeProvider>
    </React.StrictMode>,
);
