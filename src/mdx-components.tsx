import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { DownloadExample } from "@/components/DownloadExample";

const themeComponents = getThemeComponents();

export function useMDXComponents(
	components?: Record<string, unknown>,
) {
	return {
		...themeComponents,
		DownloadExample,
		...components,
	};
}
