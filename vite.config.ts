import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    root: "demo",
    css: {
        postcss: resolve(__dirname, "../postcss.config.ts"),
    },
    build: {
        outDir: "../dist",
        emptyOutDir: false,
    },
    server: {
        open: true,
    },
});
