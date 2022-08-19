import { useContext } from "react";
import { ColorMode, ColorModeContext } from "../providers/ColorMode";

type ReturnObject = [ColorMode, (swap: ColorMode) => void];

function useColorMode(): ReturnObject {
    const context = useContext(ColorModeContext);

    if (!context) {
        throw new Error(
            "ColorMode: The hook can't be used without a provider instance running.",
        );
    }

    return [context.mode, context.changeMode];
}

export default useColorMode;
