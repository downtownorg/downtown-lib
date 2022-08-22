import { FC } from "react";
import { Button } from "@mantine/core";

const App: FC = () => {
    return (
        <div
            style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                gap: "5px",
                flexDirection: "column",
                padding: "5px",
            }}
        >
            <Button variant="outline">Iniciar os testes</Button>
        </div>
    );
};

export default App;
