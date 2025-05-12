import "@fontsource/shrikhand";
// Supports weights 100-900
import "@fontsource-variable/roboto";
import "./styles/tailwind.css";

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

export async function loader() {
  return {
    ENV: {
      UMAMI_WEBSITE_URL: process.env.UMAMI_WEBSITE_URL,
      UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
    },
  };
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          id="umami-analytics-script"
          data-website-id={data.ENV.UMAMI_WEBSITE_ID}
          src={data.ENV.UMAMI_WEBSITE_URL}
          async
        />
      </head>
      <body className="bg-bgw-pink">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
