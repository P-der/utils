// rollup.config.js
// umd
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import common from "./rollup.js";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.aio.js",
        format: "umd",
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        resolve({
            main: true,
            extensions: [".js"],
        }),
        commonjs({
            include: "node_modules/**",
        }),
        common.getCompiler(),
    ],
};
