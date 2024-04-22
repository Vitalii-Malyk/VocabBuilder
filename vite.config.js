import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/VocabBuilder",
  resolve: {
    alias: {
      "@": "/src",
      helpers: "/src/helpers",
      "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
});
