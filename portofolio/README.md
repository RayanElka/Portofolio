# Rayan el Kaouid · portfolio

Tweetalig developerportfolio met een overzicht van mijn werk, stage, ervaring en technische vaardigheden. De drie case studies beschrijven het probleem, mijn bijdrage en de belangrijkste technische keuzes. De site gebruikt Next.js Pages Router, TypeScript, React en CSS. De Nederlandse versie staat op `/`, de Engelse op `/en`.

## Lokaal ontwikkelen

Gebruik Node.js 24 en npm. Voer de opdrachten uit vanuit deze map (`portofolio`).

```sh
npm ci
npm run dev
```

De ontwikkelserver gebruikt standaard poort 3000. In een cloudomgeving waarin de standaard npm-cache niet beschrijfbaar is, gebruik je `npm ci --cache /tmp/portofolio-npm-cache`.

## Controleren en lokaal bouwen

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Gebruik voor performance- en toegankelijkheidsmetingen de productiebuild. Controleer bij wijzigingen de twee taalroutes, de drie case studies en het licht/donkerthema. Onderschep aanvragen naar Formspree in browsertests om het verzendgedrag te valideren zonder een bericht af te leveren.

## Projectstructuur

| Map | Inhoud |
| --- | --- |
| `pages/` | Paginaroutes en statisch gegenereerde cases |
| `components/` | Navigatie, gedeelde secties, formulier en metadata |
| `content/portfolio.ts` | Getypeerde content in het Nederlands en Engels |
| `styles/` | Layout, thematokens en lokaal gehoste lettertypen met OFL-licenties |
| `public/` | Projectbeelden, cv, favicon, deelafbeelding, robots.txt en sitemap |
| `docs/` | Onderzoek, beginsituatie en eindcontrole |

Het contactformulier gebruikt het bestaande openbare Formspree-eindpunt. De site heeft geen geheime omgevingsvariabelen nodig. Het e-mailadres en de andere directe contactopties staan ook op de contactpagina.

## Deployen naar Vercel

1. Importeer `RayanElka/Portofolio` in Vercel of gebruik het bestaande project.
2. Kies `portofolio` als **Root Directory**, **Next.js** als frameworkpreset en **24.x** als Node.js-versie. Laat de standaard installatie- en buildopdrachten ingeschakeld.
3. Maak een previewdeploy van `portfolio/professional-upgrade`. Controleer de talen, cases, cv en het formulier op die preview. Een echte Formspree-test levert een bericht af.
4. Publiceer pas na goedkeuring door de eigenaar. De canonieke URL staat in `content/portfolio.ts`. Werk deze en de URL's in `public/robots.txt` en `public/sitemap.xml` bij als het productiedomein verandert. Voeg bij nieuwe indexeerbare routes ook de twee taalvarianten toe aan de sitemap.

[Portfolio-onderzoek](docs/portfolio-onderzoek.md) · [Beginsituatie](docs/beginsituatie.md) · [Upgrade en eindcontrole](docs/upgrade.md)
