import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
    server: {
        port: 3001,
    },
    html: {
        template: "./public/index.html",
    },
    output: {
        distPath: "./build",
    },
    plugins: [
        pluginReact({ fastRefresh: true }),
        pluginBabel({
            include: /\.(?:jsx|tsx)$/,
            babelLoaderOptions(opts) {
                opts.plugins?.unshift("babel-plugin-react-compiler");
            },
        }),
    ],
});
