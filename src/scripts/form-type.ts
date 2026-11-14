import type { FormType } from "../data/site";

/** Preselects the "Mám zájem o" radio in the contact form. */
export function setFormType(value: FormType | string) {
  const radio = document.querySelector<HTMLInputElement>(`input[name="typ"][value="${CSS.escape(value)}"]`);
  if (radio) radio.checked = true;
}
