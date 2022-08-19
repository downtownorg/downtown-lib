import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "./dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "./dist/esm/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({ babelHelpers: "bundled" }),
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            terser(),
        ],
        external: ["react", "react-dom", "antd", /\.css$/],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
