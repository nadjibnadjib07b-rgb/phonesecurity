import type { Metadata } from "next";
import ReportClient from "./ReportClient";

export const metadata: Metadata = {
  title: "Report Stolen Phone | PhoneSecurity",
  description:
    "Report your lost or stolen phone securely using your IMEI number.",
  keywords: [
    "report stolen phone",
    "lost phone declaration",
    "IMEI report",
  ],
};

export default function Page() {
  return <ReportClient />;
}
