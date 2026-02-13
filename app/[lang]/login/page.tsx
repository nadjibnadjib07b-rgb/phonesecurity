import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Login | PhoneSecurity",
  description:
    "Access your PhoneSecurity account to manage your phone information securely.",
  keywords: [
    "login phone security",
    "user login",
    "secure account access",
  ],
};

export default function Page() {
  return <LoginClient />;
}
