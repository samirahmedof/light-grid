import { defineConfig } from "vite";

export default defineConfig({
    root: "demo",
    css: {
        postcss: "../postcss.config.js",
    },
    build: {
        outDir: "../dist",
        emptyOutDir: false,
    },
    server: {
        open: true,
    },
});
