import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

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

const navbar = (
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
	/>
);

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
  )
}
