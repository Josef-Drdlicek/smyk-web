// Pure helpers that turn contact data into links and files. Shared by server and client code.
import type { Contact } from "../data/site";

export const digitsOnly = (phone: string) => phone.replace(/[^\d+]/g, "");

export const telHref = (phone: string) => `tel:${digitsOnly(phone)}`;

export const mailtoHref = (email: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${email}${query ? `?${query}` : ""}`;
};

// "?&body=" is the form both iOS and Android accept.
export const smsHref = (phone: string, body: string) => `sms:${digitsOnly(phone)}?&body=${encodeURIComponent(body)}`;

export const officeAddress = (c: Contact) => `${c.office.street}, ${c.office.zip} ${c.office.city}`;

export const mapHref = (c: Contact) => `https://maps.google.com/?q=${encodeURIComponent(officeAddress(c))}`;

export const buildVCard = (c: Contact) =>
  [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${c.lastName};${c.firstName};;;`,
    `FN:${c.firstName} ${c.lastName}`,
    `ORG:${c.company}`,
    `TITLE:${c.role}`,
    `TEL;TYPE=CELL:${digitsOnly(c.phone)}`,
    `EMAIL;TYPE=WORK:${c.email}`,
    `ADR;TYPE=WORK:;;${c.office.street};${c.office.city};;${c.office.zip};${c.office.country}`,
    `URL:${c.web}`,
    "END:VCARD",
  ].join("\r\n");

export const vCardFileName = (c: Contact) =>
  `${c.firstName}-${c.lastName}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "") + ".vcf";
