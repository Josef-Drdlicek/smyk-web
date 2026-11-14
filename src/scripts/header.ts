const SCROLLED_AFTER_PX = 40;

/** Transparent header over the hero turns solid on scroll; on small screens a toggle opens the nav. */
export function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const toggle = header?.querySelector<HTMLButtonElement>("[data-menu]");
  const nav = header?.querySelector<HTMLElement>("[data-nav]");
  if (!header || !toggle || !nav) return;

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > SCROLLED_AFTER_PX);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = (open: boolean) => {
    header.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("open")));
  nav.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}
