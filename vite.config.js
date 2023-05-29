import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import esLintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    esLintPlugin({
      cache: false,
      include: [".src/**/*/js", "/src/**/*/jsx"],
    }),
  ],
});
