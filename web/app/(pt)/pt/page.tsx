import { HomePage } from "@/components/HomePage";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("pt");

export default function Page() {
  return <HomePage locale="pt" />;
}
