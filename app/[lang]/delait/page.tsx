import type { Metadata } from "next";
import DelaitClient from "./DelaitClient";

export const metadata: Metadata = {
  title: "Remove Stolen Report | PhoneSecurity",
  description:
    "Remove a stolen phone report using your IMEI number and recovery code.",
  keywords: [
    "remove stolen report",
    "delete IMEI report",
    "phone recovery",
  ],
};

export default function Page() {
  return <DelaitClient />;
}
