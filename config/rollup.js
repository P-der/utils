import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

const { default: pkg } = await import("../package.json", {
    assert: { type: "json" },
});
var version = pkg.version;

var banner = `/*!
 * ${pkg.name} ${version}
 * Licensed under MIT
 */
`;

function getCompiler() {
    return [
        babel({
            babelHelpers: "runtime",
            babelrc: false,
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: {
                            browsers:
                                "last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10",
                            node: "0.12",
                        },
                        modules: false,
                        loose: false,
                    },
                ],
            ],
            plugins: [
                [
                    "@babel/plugin-transform-runtime",
                    {
                        corejs: 2,
                        helpers: false,
                        regenerator: false,
                    },
                ],
            ],
            exclude: "node_modules/**",
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ];
}

export default {
    name: "utils",
    banner,
    getCompiler,
};
