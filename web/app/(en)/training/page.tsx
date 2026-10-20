import { TrainingPage } from "@/components/TrainingPage";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("en", "training");

export default function Page() {
  return <TrainingPage locale="en" />;
}
