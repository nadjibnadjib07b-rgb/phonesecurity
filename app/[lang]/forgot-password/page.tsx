import type { Metadata } from "next";
import ForgotClient from "./ForgotClient";

export const metadata: Metadata = {
  title: "Reset Password | PhoneSecurity",
  description:
    "Reset your PhoneSecurity account password securely.",
  keywords: [
    "reset password",
    "recover account",
    "forgot password",
  ],
};

export default function Page() {
  return <ForgotClient />;
}
