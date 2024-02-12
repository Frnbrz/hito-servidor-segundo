import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./src/infrastructure/tests.setup.ts",
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
