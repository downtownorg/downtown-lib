import { useContext } from "react";
import { ColorModeContext, GetVariables } from "../providers/ColorMode";

import DarkVariables from "../providers/ColorMode/variables/dark";
import LightVariables from "../providers/ColorMode/variables/light";

export default function useVariables():
    | typeof DarkVariables
    | typeof LightVariables {
    const context = useContext(ColorModeContext);

    if (!context) {
        throw new Error(
            "ColorMode: The hook can't be used without a provider instance running.",
        );
    }

    return GetVariables(context.mode);
}
