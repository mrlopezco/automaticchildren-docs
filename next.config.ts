import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
	// Add Nextra-specific options here (e.g. contentDirBasePath if needed)
});

const nextConfig: NextConfig = {
	/* config options here */
	turbopack: {
		resolveAlias: {
			"next-mdx-import-source-file": "./src/mdx-components.tsx",
		},
	},
};

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

export default withNextra(nextConfig);
