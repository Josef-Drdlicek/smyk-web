# smyk-web

Osobní web realitního makléře (Astro, statický výstup, Cloudflare Workers static assets).

## Struktura

- `src/data/site.ts` – veškerý obsah a kontakty (jediné místo pro úpravu textů)
- `src/lib/` – čisté pomocné funkce (odkazy tel/mail/sms, vCard) a ikony
- `src/components/` – sekce stránky, každá se svými styly
- `src/scripts/` – klientské skripty, každý s jednou odpovědností
- `_puvodni/` – původní jednosouborová verze pro srovnání

## Příkazy

```sh
npm install
npm run dev      # vývoj na http://localhost:4321
npm run build    # výstup do dist/
npm run deploy   # build + wrangler deploy (nutné `npx wrangler login`)
```
