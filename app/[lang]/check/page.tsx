import type { Metadata } from "next";
import CheckClient from "./CheckClient";

export const metadata: Metadata = {
  title: "Check IMEI | Verify Stolen Phone Status",
  description:
    "Check if a phone has been reported stolen using its IMEI number before buying it.",
  keywords: [
    "IMEI verification",
    "check stolen phone",
    "IMEI status",
    "verify phone",
  ],
};

export default function Page() {
  return <CheckClient />;
}
