import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "PhoneSecurity | Protect Your Phone",
  description:
    "Fight mobile phone theft, verify IMEI numbers, and help return stolen devices to their rightful owners.",
};

export default function Page() {
  return <HomeClient />;
}
