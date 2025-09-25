import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true, // Recommended for virtual hosted sites
        secure: false, // Optional: if you are using http
      },
    },
  },
});
