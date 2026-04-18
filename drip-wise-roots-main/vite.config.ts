import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",   // 🔥 THIS IS THE FIX
  plugins: [react(), tsconfigPaths()],
});