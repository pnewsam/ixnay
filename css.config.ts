import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/css/index.ts"),
      name: "ixnay",
    },
    rollupOptions: {
      output: {
        assetFileNames: "ixnay.min.[ext]",
      },
    },
  },
});
