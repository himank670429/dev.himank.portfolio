import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
