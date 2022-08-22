import React, { FC, ReactNode } from "react";
import { MantineProvider, Global } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Theme from "../../styles/theme";

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
                    styles={{
                        body: {
                            backgroundColor: "transparent",
                        },
                    }}
                />
                {children}
            </ModalsProvider>
        </MantineProvider>
    );
};

export default CoreProvider;
export { CoreProps };
