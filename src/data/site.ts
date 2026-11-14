// Single source of truth for all site content. Components and client scripts read from here;
// nothing user-facing should be hardcoded elsewhere.
import type { IconName } from "../lib/icons";

export interface Contact {
  firstName: string;
  lastName: string;
  /** Czech case forms of the first name, used in button copy. */
  nameForms: { accusative: string; dative: string };
  role: string;
  company: string;
  phone: string;
  email: string;
  web: string;
  office: { label: string; street: string; zip: string; city: string; country: string };
  legal: { address: string; ico: string };
  replyNote: string;
  /** Portrait under public/, e.g. "/jan-smejkal.jpg". Shown in the "O mně" section once set. */
  photo?: string;
}

export type FormType = "prodej" | "koupi" | "pronájem" | "ocenění";
export type ServiceCategory = "prodej" | "koupe" | "pronajem" | "finance";

export interface Path {
  id: string;
  tab: string;
  formType: FormType;
  headline: { pre: string; highlight: string; post: string };
  lede: string;
  sampleMessage: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  categories: ServiceCategory[];
  tags: string[];
  formType: FormType;
}

export interface Filter { id: ServiceCategory | "all"; label: string; icon: IconName }
export interface Step { title: string; description: string }
export interface Stat { value: string; title: string; description: string }
export interface Section { id: string; nav: string; eyebrow: string; title?: { pre: string; highlight: string; post?: string }; lede?: string; note?: string }

export const contact: Contact = {
  firstName: "Jan",
  lastName: "Smejkal",
  nameForms: { accusative: "Jana", dative: "Janovi" },
  role: "Realitní makléř",
  company: "OK REAL ESTATE s.r.o.",
  phone: "+420 606 153 573",
  email: "jan.smejkal@okrealestate.cz",
  web: "https://www.okrealestate.cz/",
  office: { label: "Pobočka Brno", street: "Jihlavská 796/7a", zip: "612 00", city: "Brno", country: "Česká republika" },
  legal: { address: "Mánesova 3014/16, 612 00 Brno", ico: "09752773" },
  replyNote: "Odpovídám týž den",
};

export const fullName = `${contact.firstName} ${contact.lastName}`;

export const brand = {
  tagline: "OK REAL ESTATE · Brno",
  eyebrow: "Realitní makléř · Brno a okolí",
  highlights: ["Matterport 3D prohlídka", "Advokátní úschova", "Hypotéka přes OK HOLDING"],
  /**
   * Full-screen hero background under public/, ideally a wide landscape shot (min. 2400 px wide, WebP).
   * Until set, the hero falls back to a dark gradient with a line drawing.
   */
  heroImage: undefined as string | undefined,
};

export const seo = {
  title: `${fullName} – realitní makléř Brno`,
  description: `${fullName}, realitní makléř OK REAL ESTATE v Brně. Prodej, koupě a pronájem nemovitostí včetně financování. Tel. ${contact.phone}.`,
  themeColor: "#050505",
  locale: "cs_CZ",
};

// Path selector tabs: each one swaps the hero copy and the ready-made message.
export const paths: Path[] = [
  {
    id: "prodej", tab: "Prodávám", formType: "prodej",
    headline: { pre: "Prodej nemovitosti", highlight: "od ocenění", post: "po předání klíčů" },
    lede: "Nemovitost připravím, nafotím a nabídnu správným lidem. Smlouvy, úschovu i předání hlídám za vás.",
    sampleMessage: "Dobrý den, chci prodat byt 3+kk v Brně-Žabovřeskách. Můžeme se domluvit na ocenění?",
  },
  {
    id: "koupe", tab: "Kupuji", formType: "koupi",
    headline: { pre: "Najdu vám", highlight: "bydlení", post: "a zařídím hypotéku" },
    lede: "Hledám podle vašeho zadání, prověřím list vlastnictví a vyjednám podmínky. Financování vyřešíme na stejném místě.",
    sampleMessage: "Dobrý den, hledám rodinný dům v okolí Brna. Pomůžete mi s hledáním i hypotékou?",
  },
  {
    id: "pronajem", tab: "Pronajímám", formType: "pronájem",
    headline: { pre: "Pronajměte", highlight: "spolehlivému", post: "nájemníkovi" },
    lede: "Vyberu nájemníka, připravím nájemní smlouvu a předávací protokol s fotodokumentací.",
    sampleMessage: "Dobrý den, chci pronajmout byt 2+kk v centru Brna. Jak by probíhal výběr nájemníka?",
  },
  {
    id: "oceneni", tab: "Chci ocenění", formType: "ocenění",
    headline: { pre: "Kolik stojí", highlight: "vaše nemovitost", post: "doopravdy?" },
    lede: "Cenu navrhuji podle skutečných prodejů v lokalitě, ne podle inzerátů. První schůzka je nezávazná.",
    sampleMessage: "Dobrý den, zajímá mě, za kolik by šel prodat náš dům v Brně. Kdy byste se mohl přijít podívat?",
  },
];

export const sections = {
  about: {
    id: "o-mne", nav: "O mně", eyebrow: "O mně",
    lede: "Jsem realitní makléř OK REAL ESTATE v Brně. Prodej, koupi i pronájem vedu od první schůzky po předání klíčů, prohlídky dělám sám a voláte pořád stejnému člověku.",
    note: "Za mnou stojí skupina OK HOLDING: finanční poradci, pojištění i právní servis. Hypotéku, úschovu a smlouvy tak vyřešíme na jednom místě.",
  },
  services: { id: "sluzby", nav: "Služby", eyebrow: "S čím pomůžu", title: { pre: "Celý obchod", highlight: "na jedné adrese" } },
  process: {
    id: "postup", nav: "Postup", eyebrow: "Jak prodej probíhá", title: { pre: "Pět kroků", highlight: "k podpisu" },
    lede: "Víte předem, co přijde a kdy. O každém kroku vás informuji, ať jste na prohlídce, nebo ne.",
  },
  group: {
    id: "skupina", nav: "OK HOLDING", eyebrow: "OK REAL ESTATE · OK HOLDING",
    title: { pre: "Reality, pojištění a finance", highlight: "pod jednou střechou" },
    lede: "Pracuji v realitní kanceláři OK REAL ESTATE, která je součástí skupiny OK HOLDING. Za mnou stojí kolegové z financí, pojištění a práva, takže nemusíte obíhat pět různých firem.",
  },
  contact: { id: "kontakt", nav: "Kontakt", eyebrow: "Kontakt", title: { pre: "Ozvěte se.", highlight: "První schůzka", post: "je nezávazná." } },
} satisfies Record<string, Section>;

export const filters: Filter[] = [
  { id: "all", label: "Vše", icon: "grid" },
  { id: "prodej", label: "Prodej", icon: "home" },
  { id: "koupe", label: "Koupě", icon: "search" },
  { id: "pronajem", label: "Pronájem", icon: "key" },
  { id: "finance", label: "Finance", icon: "card" },
];

export const services: Service[] = [
  { title: "Prodej", description: "Odhad ceny podle skutečných prodejů v lokalitě, inzerce na hlavních portálech a vedení prohlídek.", icon: "home", categories: ["prodej"], tags: ["Ocenění", "Inzerce", "Prohlídky"], formType: "prodej" },
  { title: "Koupě", description: "Hledám podle vašeho zadání, prověřím list vlastnictví a vyjednám podmínky.", icon: "search", categories: ["koupe"], tags: ["Hledání", "Prověrka LV", "Vyjednání"], formType: "koupi" },
  { title: "Pronájem", description: "Výběr spolehlivého nájemníka, nájemní smlouva a předávací protokol s fotodokumentací.", icon: "key", categories: ["pronajem"], tags: ["Nájemník", "Smlouva", "Protokol"], formType: "pronájem" },
  { title: "3D a video prohlídky", description: "Matterport 3D prohlídka a video, aby na prohlídku chodili jen opravdu vážní zájemci.", icon: "cube", categories: ["prodej", "pronajem"], tags: ["Matterport", "Video"], formType: "prodej" },
  { title: "Homestaging", description: "Úprava interiéru před focením, která zvedne zájem i nabídnutou cenu.", icon: "sofa", categories: ["prodej"], tags: ["Interiér", "Focení"], formType: "prodej" },
  { title: "Hypotéka", description: "Financování přes finanční poradce OK HOLDING, srovnání nabídek bank.", icon: "card", categories: ["koupe", "finance"], tags: ["Srovnání bank", "OK HOLDING"], formType: "koupi" },
  { title: "Pojištění", description: "Pojištění nemovitosti a domácnosti sjednané rovnou k nákupu.", icon: "shield", categories: ["koupe", "finance"], tags: ["Nemovitost", "Domácnost"], formType: "koupi" },
  { title: "Developerské projekty", description: "Prodej bytů v nových projektech a poradenství při koupi novostavby.", icon: "building", categories: ["koupe"], tags: ["Novostavby"], formType: "koupi" },
];

export const steps: Step[] = [
  { title: "Schůzka a ocenění", description: "Prohlédnu nemovitost a navrhnu cenu podle reálných prodejů v okolí." },
  { title: "Příprava", description: "Fotky, 3D prohlídka, případně homestaging a kontrola dokumentů." },
  { title: "Inzerce a prohlídky", description: "Nabídka na portálech a v síti OK HOLDING, prohlídky vedu sám." },
  { title: "Rezervace a smlouvy", description: "Rezervační a kupní smlouva, advokátní úschova, pomoc kupujícímu s hypotékou." },
  { title: "Předání", description: "Předávací protokol, stavy měřidel a přepis energií." },
];

export const stats: Stat[] = [
  { value: "3 000+", title: "kolegů ve skupině", description: "Poradci po celé republice, kupující hledáme i mezi jejich klienty." },
  { value: "8", title: "poboček", description: "Brno, Praha, Plzeň, Olomouc, Ostrava, České Budějovice a další." },
  { value: "1", title: "kontaktní osoba", description: "Voláte pořád stejnému člověku, od ocenění po předání klíčů." },
];

export const formCopy = {
  typeLegend: "Mám zájem o",
  types: ["prodej", "koupi", "pronájem", "ocenění"] as FormType[],
  fields: {
    name: { label: "Jméno a příjmení" },
    phone: { label: "Telefon" },
    location: { label: "Lokalita a typ nemovitosti", placeholder: "např. byt 3+kk, Brno-Žabovřesky" },
    message: { label: "Zpráva", placeholder: "Kdy se vám hodí zavolat, co potřebujete vyřešit…" },
  },
  submit: `Připravit zprávu pro ${contact.nameForms.accusative}`,
  note: "Otevře se váš e-mail s vyplněnou zprávou, stačí ji odeslat. Údaje použiji jen k tomu, abych se vám ozval.",
  subjectPrefix: "Poptávka z webu: ",
  emailBody: (q: { type: string; name: string; phone: string; location: string; message: string }) =>
    `Dobrý den,\n\nmám zájem o ${q.type}.\nLokalita / nemovitost: ${q.location || "-"}\n\n${q.message}\n\n${q.name}\n${q.phone}`,
  missingFields: "Vyplňte prosím jméno a telefon, ať vám můžu zavolat.",
  sent: `Zpráva je připravená ve vašem e-mailu. Pokud se neotevřel, zavolejte na ${contact.phone}.`,
};

export const ui = {
  callCta: `Zavolat ${contact.nameForms.dative}`,
  processCta: "Jak to probíhá?",
  call: "Zavolat",
  emailShort: "E-mail",
  sendSms: "Poslat SMS",
  copyMessage: "Kopírovat zprávu",
  copied: "Zkopírováno",
  copyContactLabel: "Kopírovat telefon a e-mail",
  messageHint: "Napište mi třeba takhle",
  inquire: "Poptat",
  saveContact: "Uložit do kontaktů",
  showOnMap: "Zobrazit na mapě",
  mapTitle: "Mapa pobočky",
  menu: "Menu",
  tabsLabel: "Co potřebujete",
  filtersLabel: "Filtr služeb",
  navLabel: "Hlavní",
};
