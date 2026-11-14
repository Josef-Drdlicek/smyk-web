const FEEDBACK_MS = 1600;

function flash(btn: HTMLElement) {
  const label = btn.querySelector("span");
  const copiedLabel = btn.dataset.copiedLabel;
  const original = label?.textContent;
  btn.classList.add("done");
  if (label && copiedLabel) label.textContent = copiedLabel;
  window.setTimeout(() => {
    btn.classList.remove("done");
    if (label && original) label.textContent = original;
  }, FEEDBACK_MS);
}

/**
 * [data-copy="text"] copies a fixed string;
 * [data-copy-field="name"] copies the current text of the matching [data-field] element.
 */
export function initClipboard() {
  document.querySelectorAll<HTMLElement>("[data-copy], [data-copy-field]").forEach((btn) =>
    btn.addEventListener("click", async () => {
      const field = btn.dataset.copyField;
      const text = field
        ? document.querySelector(`[data-field="${CSS.escape(field)}"]`)?.textContent ?? ""
        : btn.dataset.copy ?? "";
      try {
        await navigator.clipboard.writeText(text.trim());
        flash(btn);
      } catch {
        /* Clipboard blocked (insecure context or denied); the text stays visible on the page. */
      }
    }),
  );
}
