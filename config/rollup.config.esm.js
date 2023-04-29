// rollup.config.js
// ES output
import common from "./rollup.js";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.esm.js",
        format: "es",
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [common.getCompiler()],
};
