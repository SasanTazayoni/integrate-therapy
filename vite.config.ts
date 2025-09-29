import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/integrate-therapy/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text"],
    },
  },
});
