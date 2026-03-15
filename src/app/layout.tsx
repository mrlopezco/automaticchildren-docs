import type { Metadata } from "next"
import Image from "next/image"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"
import "./globals.css"

export const dynamic = "force-dynamic"

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
}

/** Updated SVG Icon Component */
function MarketplaceIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 193 193"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath="url(#clip0_new)">
        <g clipPath="url(#clip1_new)">
          <mask
            id="mask0_new"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="177"
            height="177"
          >
            <path
              d="M40.6211 157.524L11.2134 135.467C10.2965 134.786 9.55244 133.899 9.04142 132.877C8.5304 131.855 8.26668 130.728 8.27155 129.586V63.4144C8.26668 62.2721 8.5304 61.1447 9.04142 60.1232C9.55244 59.1016 10.2965 58.2145 11.2134 57.5334L40.6211 35.4762C39.8311 36.218 39.2341 37.1414 38.8819 38.1663C38.5297 39.1912 38.433 40.2865 38.6001 41.3572V151.643C38.433 152.714 38.5297 153.809 38.8819 154.834C39.2341 155.859 39.8311 156.782 40.6211 157.524Z"
              fill="white"
            />
            <path
              d="M181.456 38.8951C180.244 38.0992 178.825 37.6773 177.375 37.682C176.436 37.6744 175.504 37.8522 174.634 38.2052C173.763 38.5581 172.971 39.0793 172.302 39.7388L171.789 40.2544L113.117 96.5001L80.6548 127.637L50.6212 156.421L50.1057 156.937C49.4375 157.597 48.6453 158.119 47.7747 158.473C46.904 158.826 45.9721 159.004 45.0325 158.996C43.4419 158.993 41.8948 158.477 40.6211 157.524L11.2134 135.467C12.7075 136.589 14.5731 137.1 16.4305 136.895C18.2879 136.69 19.9973 135.785 21.2108 134.364L53.8554 96.4642L80.6548 65.3637L127.601 10.8439C128.282 10.0365 129.132 9.38792 130.091 8.94356C131.05 8.4992 132.094 8.26983 133.151 8.27152C134.601 8.26684 136.02 8.68874 137.231 9.48467L181.456 38.8951Z"
              fill="white"
            />
            <path
              d="M181.456 154.105L137.342 183.515C135.841 184.495 134.037 184.901 132.261 184.658C130.486 184.415 128.857 183.539 127.675 182.192L80.6548 127.637L53.8554 96.4642L21.2108 58.5975C19.9865 57.1909 18.2755 56.2994 16.4211 56.102C14.5668 55.9046 12.7064 56.416 11.2134 57.5334L40.6211 35.4762C41.8948 34.5234 43.4419 34.007 45.0325 34.0038C45.9721 33.9959 46.904 34.1738 47.7747 34.5272C48.6453 34.8807 49.4375 35.4028 50.1057 36.0634L50.6212 36.579L80.6548 65.3637L113.117 96.5001L171.789 152.746L172.302 153.261C172.971 153.921 173.763 154.442 174.634 154.795C175.504 155.148 176.436 155.326 177.375 155.318C178.825 155.323 180.244 154.901 181.456 154.105Z"
              fill="white"
            />
            <path
              d="M184.729 45.0325V147.968C184.73 149.181 184.432 150.376 183.861 151.446C183.29 152.517 182.464 153.43 181.456 154.105L137.342 183.515C138.35 182.84 139.176 181.926 139.747 180.855C140.317 179.784 140.615 178.589 140.614 177.375V15.6248C140.598 14.4022 140.281 13.2025 139.691 12.1316C139.101 11.0607 138.256 10.1516 137.231 9.48467L181.456 38.8951C182.461 39.5728 183.286 40.4866 183.856 41.5565C184.427 42.6265 184.726 43.8199 184.729 45.0325Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_new)">
            <path
              d="M40.6211 157.524L11.2134 135.467C10.2965 134.786 9.55244 133.898 9.04142 132.877C8.5304 131.855 8.26668 130.728 8.27155 129.586V63.4143C8.26668 62.272 8.5304 61.1446 9.04142 60.1231C9.55244 59.1015 10.2965 58.2144 11.2134 57.5333L40.6211 35.4761C39.8311 36.2179 39.2341 37.1413 38.8819 38.1662C38.5297 39.1911 38.433 40.2864 38.6001 41.3571V151.643C38.433 152.714 38.5297 153.809 38.8819 154.834C39.2341 155.859 39.8311 156.782 40.6211 157.524Z"
              fill="#5E438F"
            />
            <path
              d="M181.455 38.8951C180.244 38.0992 178.825 37.6773 177.375 37.682C176.436 37.6744 175.504 37.8522 174.633 38.2052C173.763 38.5581 172.971 39.0793 172.302 39.7388L171.789 40.2544L140.539 70.2163L113.117 96.5001L80.6543 127.637L50.6207 156.421L50.1052 156.937C49.437 157.597 48.6448 158.119 47.7742 158.473C46.9035 158.826 45.9716 159.004 45.032 158.996C43.4414 158.993 41.8943 158.477 40.6206 157.524L11.2129 135.467C12.7069 136.589 14.5726 137.1 16.43 136.895C18.2874 136.69 19.9968 135.785 21.2103 134.364L37.6815 115.249L53.8549 96.4643L80.6543 65.3637L127.6 10.8439C128.282 10.0365 129.132 9.38792 130.091 8.94356C131.049 8.4992 132.094 8.26983 133.15 8.27152C134.6 8.26684 136.019 8.68874 137.231 9.48467L181.455 38.8951Z"
              fill="url(#paint0_linear_new)"
            />
            <path
              d="M181.455 154.105L137.341 183.516C135.841 184.496 134.037 184.901 132.261 184.658C130.485 184.415 128.857 183.54 127.675 182.192L80.6543 127.637L53.8549 96.4644L37.6815 77.7158L21.2103 58.5978C19.986 57.1911 18.2749 56.2997 16.4206 56.1022C14.5663 55.9048 12.7059 56.4162 11.2129 57.5335L40.6206 35.4764C41.8943 34.5236 43.4414 34.0072 45.032 34.0041C45.9716 33.9961 46.9035 34.174 47.7742 34.5275C48.6448 34.8809 49.437 35.403 50.1052 36.0637L50.6207 36.5792L80.6543 65.3638L113.117 96.5002L140.578 122.823L171.789 152.746L172.302 153.262C172.971 153.921 173.763 154.442 174.633 154.795C175.504 155.148 176.436 155.326 177.375 155.318C178.825 155.323 180.244 154.901 181.455 154.105Z"
              fill="url(#paint1_linear_new)"
            />
            <path
              d="M184.729 45.0321V147.967C184.73 149.181 184.432 150.375 183.861 151.446C183.29 152.516 182.464 153.43 181.456 154.105L137.341 183.515C138.35 182.84 139.176 181.926 139.746 180.855C140.317 179.784 140.615 178.589 140.614 177.375V15.6244C140.598 14.4019 140.281 13.2021 139.691 12.1312C139.101 11.0603 138.256 10.1512 137.231 9.48428L181.456 38.8947C182.461 39.5724 183.285 40.4862 183.856 41.5562C184.426 42.6261 184.726 43.8196 184.729 45.0321Z"
              fill="url(#paint2_linear_new)"
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_new"
          x1="151.642"
          y1="8.27149"
          x2="20.6141"
          y2="140.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7252AA" />
          <stop offset="1" stopColor="#7252AA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_new"
          x1="24.8145"
          y1="40.4371"
          x2="147.966"
          y2="178.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AE7FE2" />
          <stop offset="1" stopColor="#9A70D4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_new"
          x1="160.457"
          y1="5.93579"
          x2="160.457"
          y2="183.367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D59DFF" />
          <stop offset="1" stopColor="#C18EF1" />
        </linearGradient>
        <clipPath id="clip0_new">
          <rect
            width="176.457"
            height="176.457"
            fill="white"
            transform="translate(8.27148 8.27148)"
          />
        </clipPath>
        <clipPath id="clip1_new">
          <rect
            width="176.457"
            height="176.457"
            fill="white"
            transform="translate(8.27148 8.27148)"
          />
        </clipPath>
      </defs>
    </svg>
  )
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
  )
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
    >
      {marketplaceUrl ? <MarketplaceNavLink url={marketplaceUrl} /> : null}
    </Navbar>
  )
}

const footer = (
  <Footer>
    © {new Date().getFullYear()} Automatic Children. Documentation for the
    DevOps extension.
  </Footer>
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pageMap = await getPageMap()
  const marketplaceUrl =
    process.env.NEXT_PUBLIC_MARKETPLACE_URL ??
    process.env.NEXT_PUBLIC_MARKETPLACE_EXTENSION_URL ??
    undefined
  const navbar = buildNavbar(marketplaceUrl)

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favico/favicon.ico" />
        <link
          rel="icon"
          href="/favico/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favico/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
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
