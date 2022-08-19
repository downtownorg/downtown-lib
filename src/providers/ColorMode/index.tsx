import React, { FC, createContext, useState, ReactNode, Fragment } from "react";
import { ConfigProvider } from "antd";
import Dark from "../../themes/Dark";
import Light from "../../themes/Light";
import "@fontsource/kanit";

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
            <Light />
            <ColorModeContext.Provider value={{ mode: sysmode, changeMode }}>
                {sysmode === "light" ? <Light /> : <Dark />}
                <ConfigProvider prefixCls="dwn">{children}</ConfigProvider>
            </ColorModeContext.Provider>
        </Fragment>
    );
};

export default ColorModeProvider;
export {
    ColorMode,
    ColorModeDefault,
    ColorModeContext,
    ColorModeProviderProps,
};
