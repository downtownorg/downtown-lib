import React, { FC } from "react";
import { Global, css } from "@emotion/react";

import Extralight from "../../assets/fonts/ClashDisplay-Extralight.woff2";
import Light from "../../assets/fonts/ClashDisplay-Light.woff2";
import Regular from "../../assets/fonts/ClashDisplay-Regular.woff2";
import Medium from "../../assets/fonts/ClashDisplay-Medium.woff2";
import SemiBold from "../../assets/fonts/ClashDisplay-SemiBold.woff2";
import Bold from "../../assets/fonts/ClashDisplay-Bold.woff2";

const Fonts: FC = () => {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: "Clash Display";
                    src: url(${Extralight}) format("woff2");
                    font-weight: 200;
                    font-display: swap;
                    font-style: normal;
                }

                @font-face {
                    font-family: "Clash Display";
                    src: url(${Light}) format("woff2");
                    font-weight: 300;
                    font-display: swap;
                    font-style: normal;
                }

                @font-face {
                    font-family: "Clash Display";
                    src: url(${Regular}) format("woff2");
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }

                @font-face {
                    font-family: "Clash Display";
                    src: url(${Medium}) format("woff2");
                    font-weight: 500;
                    font-display: swap;
                    font-style: normal;
                }

                @font-face {
                    font-family: "Clash Display";
                    src: url(${SemiBold}) format("woff2");
                    font-weight: 600;
                    font-display: swap;
                    font-style: normal;
                }

                @font-face {
                    font-family: "Clash Display";
                    src: url(${Bold}) format("woff2");
                    font-weight: 700;
                    font-display: swap;
                    font-style: normal;
                }
            `}
        />
    );
};

export default Fonts;
