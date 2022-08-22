import type { MantineThemeOverride } from "@mantine/core";
import "dayjs/locale/pt-br";

export default {
    defaultRadius: 8,
    dateFormat: "DD/MM/YYYY",
    primaryColor: "brand",
    primaryShade: 8,
    datesLocale: "pt-br",
    activeStyles: {
        transform: "scale(0.97)",
    },
    colors: {
        brand: [
            "#ffede9",
            "#ffdcd3",
            "#ffcabe",
            "#ffb9a8",
            "#ffa792",
            "#ff957c",
            "#ff8466",
            "#ff7251",
            "#ff613b",
            "#ff4f25",
        ],
    },
} as MantineThemeOverride;
