import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "fr.mrsquaare.tasksync",
  appName: "Task Sync",
  webDir: "dist",
  server:
    process.env.NODE_ENV === "development"
      ? {
          url: "http://localhost:5173",
          cleartext: true,
        }
      : undefined,
};

export default config;
