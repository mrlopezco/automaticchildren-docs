"use client";

import cn from "clsx";
import { Button } from "nextra/components";

function DownloadIcon({ width = "16" }: { width?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={width}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" y1="15" x2="12" y2="3" />
		</svg>
	);
}

export function DownloadExample({
	href,
	label = "Download this example",
}: {
	href: string;
	label?: string;
}) {
	async function handleDownload() {
		try {
			const res = await fetch(href);
			if (!res.ok) throw new Error("Download failed");
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = href.split("/").pop() ?? "example.json";
			a.click();
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("Download example failed:", err);
		}
	}

	// Same structure as Copy page: bordered wrapper + Button with same className pattern
	return (
		<div className="p-2 mt-3 x:border x:inline-flex x:rounded-md x:items-stretch nextra-border x:overflow-hidden">
			<Button
				type="button"
				onClick={handleDownload}
				className={({ hover }: { hover?: boolean }) =>
					cn(
						"x:ps-2 x:pe-1 x:flex x:gap-2 x:text-sm x:font-medium x:items-center",
						hover && "x:bg-gray-200 x:text-gray-900 x:dark:bg-primary-100/5 x:dark:text-gray-50",
					)
				}
			>
				<DownloadIcon width="16" />
				{label}
			</Button>
		</div>
	);
}

