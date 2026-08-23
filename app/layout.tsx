import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://togethernotes.com"),
  title: {
    default: "Together Notes — Markdown notes in a git repo your agents can use",
    template: "%s — Together Notes",
  },
  description:
    "A native Mac & iPhone notes app that stores everything as plain Markdown in a git repository you own — so your AI agents can read and write your notes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://togethernotes.com",
    siteName: "Together Notes",
    title: "The notes app your agents already know how to use",
    description:
      "Plain Markdown in your own git repo. Native on Mac and iPhone. Nothing is ever lost. $19.99, once.",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 910,
        alt: "Together Notes on iPhone showing an agent commit pulled into a research note",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The notes app your agents already know how to use",
    description:
      "Plain Markdown in your own git repo. Native on Mac and iPhone. Nothing is ever lost. $19.99, once.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
