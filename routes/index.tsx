import { BackToTopFragment } from "../islands/BackToTopFragment.tsx";
import { BackToTopSpan } from "../islands/BackToTopSpan.tsx";

export default function Home() {
  return (
    <div class="flex flex-col gap-8 justify-center">
      <div class="flex flex-row gap-2 justify-center p-8">
        <BackToTopFragment />
      </div>
      <div class="flex flex-row gap-2 justify-center p-8">
        <BackToTopSpan />
      </div>
    </div>
  );
}
