import { permanentRedirect } from "next/navigation";
import { pageCopy } from "@/data/site";

export default function CVPage() {
  permanentRedirect(pageCopy.cv.file);
}
