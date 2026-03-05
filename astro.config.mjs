// @ts-check

import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	session: {
		// unstorage memory driver: prevents @astrojs/cloudflare from
		// auto-injecting a "SESSION" KV binding that we don't use.
		driver: "memory",
	},
});
