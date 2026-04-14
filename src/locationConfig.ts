import type { LocationConfig } from "./types";

const locationConfig: LocationConfig = {
  slug: "jones-beach-ny",
  displayName: "Jones Beach, NY",
  mode: "ocean",
  chartOrder: ["temperature","waveHeight"],
  finalSources: {
  "noaa": {
    "waveStation": "44025",
    "temperatureStation": "44025"
  }
}
};

export default locationConfig;
