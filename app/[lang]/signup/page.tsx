import type { Metadata } from "next";
import SignUpClient from "./SignUpClient";

export const metadata: Metadata = {
  title: "Create Account | PhoneSecurity",
  description:
    "Create your PhoneSecurity account to manage and protect your mobile device.",
  keywords: [
    "create account",
    "phone security account",
    "register phone",
  ],
};

export default function Page() {
  return <SignUpClient />;
}
