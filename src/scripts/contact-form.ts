import { contact, formCopy } from "../data/site";
import { mailtoHref } from "../lib/contact";

interface Inquiry { type: string; name: string; phone: string; location: string; message: string }

const readInquiry = (f: HTMLFormElement): Inquiry => {
  const data = new FormData(f);
  const get = (k: string) => String(data.get(k) ?? "").trim();
  return { type: get("typ"), name: get("jmeno"), phone: get("telefon"), location: get("lokalita"), message: get("zprava") };
};

/**
 * No backend yet: the form opens the visitor's mail client with a prefilled message.
 * To switch to a Cloudflare Worker endpoint later, replace only the submit step below.
 */
export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const status = form?.querySelector<HTMLElement>("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = readInquiry(form);
    status.hidden = false;
    if (!q.name || !q.phone) {
      status.textContent = formCopy.missingFields;
      form.querySelector<HTMLInputElement>(q.name ? '[name="telefon"]' : '[name="jmeno"]')?.focus();
      return;
    }
    window.location.href = mailtoHref(contact.email, formCopy.subjectPrefix + q.type, formCopy.emailBody(q));
    status.textContent = formCopy.sent;
  });
}
