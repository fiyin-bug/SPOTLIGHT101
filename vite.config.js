import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: [
    "**/*.jpg",
    "**/*.JPG",
    "**/*.jpeg",
    "**/*.JPEG",
    "**/*.png",
    "**/*.PNG",
    "**/*.gif",
    "**/*.GIF",
    "**/*.svg",
    "**/*.SVG",
    "**/*.webp",
    "**/*.WEBP"
  ]
  // Ensure JPG files are treated as assets
});
