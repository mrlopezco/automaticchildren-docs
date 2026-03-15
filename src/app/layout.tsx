import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

// Run layout at request time so Wrangler vars (e.g. NEXT_PUBLIC_MARKETPLACE_URL) are available
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Automatic Children Docs",
	description: "Documentation for the Automatic Children DevOps extension",
	icons: {
		icon: [
			{ url: "/favico/favicon.ico", sizes: "any" },
			{ url: "/favico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: "/favico/apple-touch-icon.png",
	},
};

/** Visual Studio Marketplace icon (24x24) – storefront / “get” style */
function MarketplaceIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden
		>
			<path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
		</svg>
	);
}

function MarketplaceNavLink({ url }: { url: string }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="nx-inline-flex nx-items-center nx-justify-center nx-opacity-70 nx-transition-opacity hover:nx-opacity-100 focus:nx-opacity-100"
			aria-label="Get extension on Visual Studio Marketplace"
		>
			<MarketplaceIcon />
		</a>
	);
}

function buildNavbar(marketplaceUrl: string | undefined) {
	return (
		<Navbar
			logo={
				<>
					<Image
						src="/automatic-children.png"
						alt=""
						width={28}
						height={28}
						className="mr-2 shrink-0"
					/>
					<span>Automatic Children Docs</span>
				</>
			}
			projectLink="https://github.com/mrlopezco/automaticchildren-docs"
			children={
				marketplaceUrl ? <MarketplaceNavLink url={marketplaceUrl} /> : null
			}
		/>
	);
}

const footer = (
	<Footer>
		© {new Date().getFullYear()} Automatic Children. Documentation for the DevOps
		extension.
	</Footer>
);

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pageMap = await getPageMap();
	// Wrangler vars are available at runtime; match key in wrangler.jsonc (vars)
	const marketplaceUrl =
		process.env.NEXT_PUBLIC_MARKETPLACE_URL ??
		process.env.NEXT_PUBLIC_MARKETPLACE_EXTENSION_URL ??
		undefined;
	const navbar = buildNavbar(marketplaceUrl);

	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head>
				<link rel="icon" href="/favico/favicon.ico" />
				<link rel="icon" href="/favico/favicon-32x32.png" sizes="32x32" type="image/png" />
				<link rel="icon" href="/favico/favicon-16x16.png" sizes="16x16" type="image/png" />
				<link rel="apple-touch-icon" href="/favico/apple-touch-icon.png" />
				<link rel="manifest" href="/favico/site.webmanifest" />
			</Head>
			<body>
				<Layout
					navbar={navbar}
					pageMap={pageMap}
					docsRepositoryBase="https://github.com/mrlopezco/automaticchildren-docs/tree/main"
					footer={footer}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
