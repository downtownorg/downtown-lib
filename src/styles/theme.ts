import type { MantineThemeOverride } from "@mantine/core";
import "dayjs/locale/pt-br";

export default {
    primaryShade: 8,
    datesLocale: "pt-br",
    dateFormat: "DD/MM/YYYY",
    fontFamily: "Clash Display",
    headings: {
        fontFamily: "Clash Display",
    },
    activeStyles: {
        transform: "scale(0.97)",
    },
    components: {
        Button: {
            styles: {
                root: { fontFamily: "Clash Display" },
            },
        },
    },
    primaryColor: "system",
    colors: {
        system: [
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
    other: {
        fontWeight: 500,
        bodyBackground: "transparent",
    },
} as MantineThemeOverride;
