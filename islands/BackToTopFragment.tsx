import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact/jsx-runtime";

export const BackToTopFragment = (
  { ...props }: JSX.HTMLAttributes<HTMLAnchorElement>,
) => {
  if (IS_BROWSER) {
    return (
      <>
        {document.scrollingElement && (
          <a
            class={"text-sm cursor-pointer"}
            onClick={() => {
              const scrollEl = document.scrollingElement;
              if (scrollEl) scrollEl.scrollTop = 0;
            }}
            {...props}
          >
            Back to Top (Fragment)
          </a>
        )}
      </>
    );
  } else {
    return (
      <>
        <span class="text-sm cursor-wait">Back to Top (SSR) (Fragment)</span>
      </>
    );
  }
};
