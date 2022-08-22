import React, { FC, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Theme from "../../styles/theme";

interface CoreProps {
    children: ReactNode;
}

const CoreProvider: FC<CoreProps> = props => {
    const { children } = props;
    return (
        <MantineProvider theme={Theme} withGlobalStyles withNormalizeCSS>
            <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
    );
};

export default CoreProvider;
