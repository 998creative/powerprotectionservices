import { redirect } from "next/navigation";

export default function LegacyUpsSystemHealthChecksPage() {
  redirect("/services/site-surveys/");
}
