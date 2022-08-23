import React from "react";
import ReactDOM from "react-dom/client";
import { CoreProvider } from "downtown-lib";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CoreProvider colorScheme="light">
            <App />
        </CoreProvider>
    </React.StrictMode>,
);
