import { TrainingPage } from "@/components/TrainingPage";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("pt", "training");

export default function Page() {
  return <TrainingPage locale="pt" />;
}
