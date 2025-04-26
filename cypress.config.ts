import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as dotenv from "dotenv";

dotenv.config();

const env = process.env.ENV || "DEV"; // Por defecto, usa DEV
const baseUrls = {
  DEV: process.env.DEV_BASE_URL,
  STAGING: process.env.STAGING_BASE_URL,
  PROD: process.env.PROD_BASE_URL,
};

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",    
    video: false,
    baseUrl: baseUrls[env] || "https://www.webdriveruniversity.com",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
