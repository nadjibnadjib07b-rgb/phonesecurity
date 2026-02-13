import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard | Manage Your Phone",
  description:
    "Manage, secure and save your phone information in your personal dashboard.",
  keywords: [
    "user dashboard",
    "phone management",
    "secure phone data",
  ],
};

export default function Page() {
  return <DashboardClient />;
}
