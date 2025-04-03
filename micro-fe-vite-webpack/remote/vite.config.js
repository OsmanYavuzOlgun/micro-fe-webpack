import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "vite_host",
      filename: "remoteEntry.js",
      remotes: {
        wp_host: {
          external: "http://localhost:8080/remoteEntry.js",
          from: "url"
        }
      },
      exposes: {
        "./Button": "./src/Button",
        "./Header": "./src/Header",
        "./store": "./src/store",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
        jotai: {
          singleton: true,
        }
      },      
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
