import { FC } from "react";
import { useColorMode } from "downtown-lib";
import { Button, DatePicker, Switch, Typography } from "antd";

const App: FC = () => {
    const [mode, changeMode] = useColorMode();

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
            <Typography.Text>Modo atual: {mode}</Typography.Text>
            <Button type="primary" onClick={handleChangeMode}>
                Mudar Modo
            </Button>
        </div>
    );
};

export default App;
