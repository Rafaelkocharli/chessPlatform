export default {
  preset: "ts-jest/presets/default-esm", // Use the ESM preset
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true, // Enable ESM support
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Map .js imports to .ts files
  },
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ESM
};
