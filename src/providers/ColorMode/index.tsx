import React, {
    FC,
    createContext,
    useState,
    ReactNode,
    Fragment,
    useEffect,
} from "react";
import { ConfigProvider } from "antd";
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
const RequestURL = "https://Downtown-lib-Server.februh.repl.co";

const ColorModeProvider: FC<ColorModeProviderProps> = props => {
    const { children, mode = ColorModeDefault } = props;
    const [sysmode, setSysmode] = useState<ColorMode>(mode);
    const [loadedCss, setLoadedCss] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    async function loadTheme(swap: ColorMode) {
        const request = await fetch(`${RequestURL}/themes/${swap}`);
        const text = await request.text();
        return text;
    }

    async function changeMode(swap: ColorMode) {
        if (sysmode !== swap) {
            const css = await loadTheme(swap);
            setLoadedCss(css);
            setSysmode(swap);
        }
    }

    useEffect(() => {
        async function load() {
            const css = await loadTheme(sysmode);
            setLoadedCss(css);
            setLoading(false);
        }

        load();
    }, []);

    return (
        <Fragment>
            <ColorModeContext.Provider value={{ mode: sysmode, changeMode }}>
                <style>{loadedCss}</style>
                <ConfigProvider prefixCls="dwn">
                    {!loading ? children : <Fragment />}
                </ConfigProvider>
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
