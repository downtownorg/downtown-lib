import { FC } from "react";
import { useColorMode, useVariables } from "downtown-lib";
import { Button, Typography } from "antd";

const App: FC = () => {
    const [mode, changeMode] = useColorMode();
    const variables = useVariables();

    const handleChangeMode = () => {
        changeMode(mode === "dark" ? "light" : "dark");
    };

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
            <Typography.Text style={{ color: variables.success }}>
                Modo atual: {mode}
            </Typography.Text>
            <Button type="primary" onClick={handleChangeMode}>
                Mudar Modo
            </Button>
        </div>
    );
};

export default App;
