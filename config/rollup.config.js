// rollup.config.js
// commonjs

import common from "./rollup.js";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: common.getCompiler(),
};
