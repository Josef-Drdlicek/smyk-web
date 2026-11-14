import { setFormType } from "./form-type";

const ALL = "all";

/** Sidebar filter for the service catalog + "Poptat" buttons that preselect the form. */
export function initServiceFilter() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-filter]")];
  const cards = [...document.querySelectorAll<HTMLElement>("[data-categories]")];

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = btn.dataset.filter!;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      cards.forEach((c) => (c.hidden = id !== ALL && !c.dataset.categories!.split(" ").includes(id)));
    }),
  );

  document.querySelectorAll<HTMLElement>("[data-form-type]").forEach((a) =>
    a.addEventListener("click", () => setFormType(a.dataset.formType!)),
  );
}
