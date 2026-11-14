import { contact } from "../data/site";
import { buildVCard, vCardFileName } from "../lib/contact";

/** "Uložit do kontaktů": downloads a .vcf generated from site data. */
export function initVCard() {
  document.querySelectorAll("[data-vcard]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const url = URL.createObjectURL(new Blob([buildVCard(contact)], { type: "text/vcard" }));
      const a = Object.assign(document.createElement("a"), { href: url, download: vCardFileName(contact) });
      a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    }),
  );
}
