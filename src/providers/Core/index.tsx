import React, { FC, ReactNode } from "react";
import { MantineProvider, MantineTheme, Global } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Theme from "../../styles/theme";
import Fonts from "./fonts";

// Styles object for styling, on emotion
declare module "@emotion/react" {
    export interface Theme extends MantineTheme {}
}

interface CoreProps {
    children: ReactNode;
    colorScheme?: "dark" | "light";
}

const CoreProvider: FC<CoreProps> = props => {
    const { children, colorScheme = "light" } = props;
    return (
        <MantineProvider
            theme={{ ...Theme, colorScheme }}
            withGlobalStyles
            withNormalizeCSS
        >
            <ModalsProvider>
                <Global
                    styles={theme => ({
                        body: {
                            backgroundColor: theme.other.bodyBackground,
                        },
                        "*": {
                            fontWeight: theme.other.fontWeight,
                        },
                    })}
                />
                <Fonts />
                {children}
            </ModalsProvider>
        </MantineProvider>
    );
};

export default CoreProvider;
export { CoreProps };
