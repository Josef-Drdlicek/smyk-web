import { contact, paths, type Path } from "../data/site";
import { smsHref } from "../lib/contact";
import { setFormType } from "./form-type";

const SWAP_MS = 180;

type Field = "pre" | "highlight" | "post" | "lede" | "sampleMessage";

const fieldValue = (p: Path, f: Field): string =>
  f === "lede" || f === "sampleMessage" ? p[f] : p.headline[f];

/** Tabs that swap hero copy and the contact sample message per visitor intent (sell / buy / rent / valuation). */
export function initPathTabs() {
  const hero = document.getElementById("hero");
  const tabs = [...document.querySelectorAll<HTMLButtonElement>("[role=tab][data-path]")];
  if (!hero || !tabs.length) return;

  let currentId = paths[0].id;

  const render = (p: Path) => {
    const swaps = document.querySelectorAll("[data-swap]");
    swaps.forEach((el) => el.classList.add("out"));
    window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-field]").forEach((el) => {
        el.textContent = fieldValue(p, el.dataset.field as Field);
      });
      document.querySelectorAll<HTMLAnchorElement>("[data-sms]").forEach((a) => (a.href = smsHref(contact.phone, p.sampleMessage)));
      swaps.forEach((el) => el.classList.remove("out"));
    }, SWAP_MS);
  };

  const select = (id: string, focus = false) => {
    const p = paths.find((x) => x.id === id);
    if (!p || id === currentId) return;
    currentId = id;
    tabs.forEach((t) => {
      const on = t.dataset.path === id;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    hero.setAttribute("aria-labelledby", `tab-${id}`);
    render(p);
    setFormType(p.formType);
  };

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t.dataset.path!));
    t.addEventListener("keydown", (e) => {
      const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      select(tabs[(i + step + tabs.length) % tabs.length].dataset.path!, true);
    });
  });
}
