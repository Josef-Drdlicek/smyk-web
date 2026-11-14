import { defineConfig } from "astro/config";

// Static output: Cloudflare serves dist/ as Workers static assets, no adapter needed.
export default defineConfig({
  output: "static",
});
