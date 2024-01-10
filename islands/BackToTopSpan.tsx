import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact/jsx-runtime";

export const BackToTopSpan = (
  { ...props }: JSX.HTMLAttributes<HTMLAnchorElement>,
) => {
  if (IS_BROWSER) {
    return (
      <span>
        {document.scrollingElement && (
          <a
            class={"text-sm cursor-pointer"}
            onClick={() => {
              const scrollEl = document.scrollingElement;
              if (scrollEl) scrollEl.scrollTop = 0;
            }}
            {...props}
          >
            Back to Top (span)
          </a>
        )}
      </span>
    );
  } else {
    return <span class="text-sm cursor-wait">Back to Top (SSR) (span)</span>;
  }
};
