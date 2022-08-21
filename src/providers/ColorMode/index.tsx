import React, { FC, createContext, useState, ReactNode, Fragment } from "react";
import { ConfigProvider } from "antd";
import Dark from "../../themes/Dark";
import Light from "../../themes/Light";
import "@fontsource/kanit";

import DarkVariables from "./variables/dark";
import LightVariables from "./variables/light";

type ColorMode = "dark" | "light";

interface ColorModeProviderProps {
    children?: ReactNode;
    mode?: ColorMode;
}

const ColorModeDefault = "light";
const ColorModeContext = createContext<any>(undefined);

const ColorModeProvider: FC<ColorModeProviderProps> = props => {
    const { children, mode = ColorModeDefault } = props;
    const [sysmode, setSysmode] = useState<ColorMode>(mode);

    function changeMode(swap: ColorMode) {
        if (sysmode !== swap) {
            setSysmode(swap);
        }
    }

    return (
        <Fragment>
            <ColorModeContext.Provider value={{ mode: sysmode, changeMode }}>
                {sysmode === "light" ? <Light /> : <Dark />}
                <ConfigProvider prefixCls="dwn">{children}</ConfigProvider>
            </ColorModeContext.Provider>
        </Fragment>
    );
};

type Variables<T> = T extends "light"
    ? typeof LightVariables
    : T extends "dark"
    ? typeof DarkVariables
    : never;

function GetVariables<T extends ColorMode>(theme: T): Variables<T> {
    return theme === "light"
        ? (LightVariables as Variables<T>)
        : (DarkVariables as Variables<T>);
}

export default ColorModeProvider;
export {
    ColorMode,
    ColorModeDefault,
    ColorModeContext,
    ColorModeProviderProps,
    GetVariables,
};
