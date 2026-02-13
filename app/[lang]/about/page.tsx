import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About PhoneSecurity | Fight Phone Theft",
  description:
    "Learn how PhoneSecurity helps prevent phone theft and protects mobile users worldwide.",
  keywords: [
    "about phone security",
    "prevent phone theft",
    "mobile protection platform",
  ],
};

export default function Page() {
  return <AboutClient />;
}
