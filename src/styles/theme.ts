import type { MantineThemeOverride } from "@mantine/core";
import "dayjs/locale/pt-br";

export default {
    colorScheme: "dark",
    primaryShade: 9,
    datesLocale: "pt-br",
    dateFormat: "DD/MM/YYYY",
    fontFamily: "Clash Display",
    headings: {
        fontFamily: "Clash Display",
        fontWeight: 600,
    },
    activeStyles: {
        transform: "scale(0.97)",
    },
    components: {
        Input: {
            defaultProps: {
                size: "md",
            },
        },
        Button: {
            defaultProps: {
                size: "md",
            },
            styles: {
                root: { fontFamily: "Clash Display" },
            },
        },
    },
    focusRing: "never",
    primaryColor: "system",
    colors: {
        system: [
            "#fff2f2",
            "#ffd9d9",
            "#ffbfbf",
            "#ffa6a6",
            "#ff8c8c",
            "#ff7373",
            "#ff5959",
            "#ff4040",
            "#ff2626",
            "#ff1818",
        ],
    },
    other: {
        fontWeight: 500,
        bodyBackground: "transparent",
    },
} as MantineThemeOverride;
