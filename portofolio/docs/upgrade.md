# Portfolio-upgrade

Bewaarpunt van de oorspronkelijke versie is commit `a54196c46f98785770021e7c2d6230f2c4eaad6f`. De upgrade staat op `portfolio/professional-upgrade`. De vijf bestaande paginapaden en het openbare cv-adres blijven bruikbaar. Er is niets naar Vercel gepubliceerd.

## Ontwerp en uitvoering

1. Onderzoek en nulmeting. De Git-versie diende als lokale referentie voor screenshots, browsercontroles en Lighthouse. Voor de visuele vergelijking zijn 32 openbare portfolio’s in Chromium gerenderd. [Onderzoek](portfolio-onderzoek.md) · [Nulmeting](beginsituatie.md)
2. Positionering en content. De hero zet Rayans specialisatie en beschikbaarheid voorop, met directe toegang tot projecten, cv en contact. De homepage geeft de eerste samenvatting van werk, ervaring en skills. Eigen bijdragen hebben de meeste ruimte in de drie case studies.
3. Vormgeving. Space Grotesk en Manrope, een donker groen kleurenpalet met limoenkleurige acties, een lichter alternatief en een eigen CSS-illustratie rond interface, API en data. De projectgrid combineert één brede stagecase met twee gelijkwaardige cases. Op mobiel is de navigatie direct zichtbaar en loopt de inhoud in dezelfde leesvolgorde.
4. Bouw en iteratie. Na de eerste browsertests zijn de merklink, typografische letterafstand, headingvolgorde en decoratieve pijlen verbeterd. Een eerste Lighthouse-run wees de uitgesteld geladen hoofdafbeelding op de projectenpagina aan. Die afbeelding en de hoofdafbeeldingen van de cases kregen laadprioriteit. Ook is automatische route-prefetch beperkt voor links die bij elke pagina zichtbaar zijn.

De directe introductie is geïnspireerd door Jemima Abu. De snelle toegang tot werk, ervaring en cv komt terug bij Alvin Langat en Puskar Adhikari. Nicholas Gannons plaatsing van echte projectbeelden en Deepanshu Mehra’s beperkte palet hebben de hiërarchie en beeldkeuze beïnvloed. Het kleurenpalet, de illustratie, de layouts en de teksten zijn voor dit portfolio gemaakt. Zie de afzonderlijke observaties en bronnen in het onderzoeksrapport. [Portfolio-onderzoek](portfolio-onderzoek.md)

## Verifieerbare inhoud

- **Trans-IT.** Stage in logistieke software. De case beschrijft de statusupdates, het ontdubbelen van ontvangers, een fallback voor aankomsttijden en de meertalige Excel-export. Het beeld toont Rayans openbare stageblog. [Weekverslagen](https://github.com/RayanElka/WPLStageBlog/blob/e1b7fb5/src/i18n.ts)
- **Finance Tracker.** Soloproject met registratie, inloggen, inkomsten en uitgaven, filters en MongoDB-queries per gebruiker voor het dashboard. [Broncode](https://github.com/RayanElka/Webontwikkeling-project-24-25/blob/98bd794/src/app.ts)
- **Bobkes.** Teamproject. De bijdrage aan vergelijken, gevechten en het vangspel is terug te vinden in de Git-geschiedenis. [Vergelijken](https://github.com/orhancalik/Bobkes/commit/4bc5300) · [Gevechtsspel](https://github.com/orhancalik/Bobkes/commit/0c83d1a) · [Vangspel](https://github.com/orhancalik/Bobkes/commit/d3359e2)
- **Profiel en ervaring.** Opleiding en periodes zijn nagelopen aan de hand van het cv en de bestaande portfolio-inhoud. AI-agents, lokale taalmodellen en automatisering zijn als interesses opgenomen.

## Technische wijzigingen

- Next.js Pages Router en React behouden. Pagina’s herschreven in TypeScript met gedeelde componenten voor layout, secties, metadata en het contactformulier. Case studies krijgen statische routes in beide talen vanuit één getypeerde contentmodule.
- CSS-variabelen sturen beide thema’s. Een skiplink, zichtbare focus, vaste formulierlabels, een live statusbericht en verminderde beweging ondersteunen bediening met toetsenbord en hulptechnologie.
- Projectafbeeldingen gebruiken responsieve Next Image-varianten en behouden hun verhouding. De grote afbeeldingen onder de eerste viewport worden uitgesteld geladen. Lettertypen worden lokaal gehost met OFL-licenties.
- Elke indexeerbare pagina heeft een eigen titel, beschrijving, canonieke URL en taalvarianten. De site bevat Open Graph- en Twitter-metadata, een deelafbeelding, favicon, Person-gegevens, robots.txt en een sitemap met zestien URL’s.
- Ongebruikte slider-, iconen- en Tailwind-pakketten en oude JS/CSS-componenten verwijderd. `npm run lint` gebruikt Oxlint met Next.js- en React-regels. `npm run typecheck` genereert Next.js-routetypen en draait TypeScript. De transitieve `source-map-js` is bijgewerkt naar 1.2.4.

## Browser- en codecontrole

| Controle | Gemeten uitkomst |
| --- | --- |
| Playwright met Chromium op 320, 375, 390, 768, 1024, 1440 en 1920 px | 112 van 112 route-breedtecombinaties gaven HTTP 200, zonder horizontale overflow, consolefouten of ontbrekende ankerdoelen. Alle 36 in de screenshotcontroles geladen projectafbeeldingen waren zichtbaar. |
| Interne links | 17 van 17 doeladressen gaven HTTP 200, inclusief het cv. Beide geteste foutpagina’s gaven HTTP 404 in de juiste taal. |
| Interacties | Skiplink, navigatie, thema en persistentie, taalwissel, case links, verplichte velden, contactstatus bij gemockte successen en fouten, en SEO-bestanden gecontroleerd. Zonder JavaScript blijven de contacttekst en de native formulieractie aanwezig. |
| Axe | 32 controles in donker en één homepagecontrole in licht. Nul bevestigde overtredingen. Twaalf onbesliste resultaten betroffen dezelfde decoratieve terugpijl op de casepagina’s. De voorgrondkleur tegen de achtergrond meet 15,98:1 in donker en 6,55:1 in licht. |
| Contrast | 532 tekstmetingen en zes metingen van invoerveldranden in beide thema’s slaagden. De laagste tekstverhoudingen waren 8,41:1 in donker en 6,13:1 in licht. |
| Installatie en build | `npm ci`, `npm run lint`, `npm run typecheck` en `npm run build` geslaagd met Node.js 24.22.3 en npm 11.19.1. `npm audit` vond nul bekende kwetsbaarheden. |

De ingebouwde browsercontroles en geautomatiseerde contrastmetingen dekken een deel van WCAG 2.2 AA. Een volledige audit met schermlezers en hulptechnologie op echte apparaten is nog open. Er is geen bericht naar Formspree gestuurd. Vier GitHub-links gaven HTTP 200. De Vercel-stageblog, Render-demo en LinkedIn zijn met deze cloudproxy niet bereikbaar. Hun live werking blijft onbevestigd.

## Lighthouse

Lighthouse 13.6.0, Chromium 156 en lokale productiebuilds op 26 november 2026. De waarden van de twee onderzochte mobiele projectroutes worden voor beide eindruns getoond. De metingen geven geen Vercel-CDN-resultaat of bezoekersdata.

| Pagina en profiel | Performance | Accessibility | Best Practices | SEO | LCP | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Homepage mobiel, voor | 94 | 95 | 96 | 100 | 1,6 s | 260 ms |
| Homepage desktop, voor | 100 | 95 | 96 | 100 | 0,4 s | 0 ms |
| Homepage mobiel, na | 96 | 100 | 100 | 100 | 0,6 s | 240 ms |
| Homepage desktop, na | 100 | 100 | 100 | 100 | 0,2 s | 0 ms |
| Contact mobiel, na | 100 | 100 | 100 | 100 | 0,7 s | 80 ms |
| Projecten mobiel, na 1 | 94 | 100 | 100 | 100 | 1,9 s | 260 ms |
| Projecten mobiel, na 2 | 98 | 100 | 100 | 100 | 2,4 s | 60 ms |
| Trans-IT mobiel, na 1 | 86 | 100 | 100 | 100 | 2,2 s | 500 ms |
| Trans-IT mobiel, na 2 | 98 | 100 | 100 | 100 | 2,2 s | 130 ms |

De CLS bedroeg 0 in alle tabelruns. Voor de aanpassing van de laadprioriteit scoorde het projectenoverzicht 89 op mobiele Performance en wees Lighthouse de lazy-loaded hoofdafbeelding aan. De eindbuild laadt die afbeelding met hoge prioriteit. De herhalingen tonen dat blokkeertijd tussen mobiele runs fluctueert. Het portfolio haalt alle streefscores op de homepage. De mobiele Performance-score van 95 voor het projectenoverzicht en de stagecase is bij de herhaling gehaald en blijft variabel.

## Gewogen beoordeling

Dit is een redactionele beoordeling tegen de gevraagde criteria. Lighthouse- en browserresultaten staan er afzonderlijk van.

| Criterium | Gewicht | Voor | Na | Onderbouwing |
| --- | ---: | ---: | ---: | --- |
| Visueel design | 20% | 63 | 93 | Heldere typografische hiërarchie, eigen illustratie en betekenisvolle visuele rangschikking. De oudere projectscreenshots verschillen in stijl. |
| Professionele uitstraling | 15% | 65 | 94 | Eén precieze functieomschrijving, twee talen en stage, opleiding en werkervaring met consistente presentatie. |
| Aantrekkelijkheid voor recruiters | 15% | 56 | 93 | Werk, cv en contact direct bereikbaar. Rollen en concrete bijdragen zijn snel scanbaar. Er is geen gebruikerstest met recruiters uitgevoerd. |
| Originaliteit | 10% | 51 | 88 | Eigen uitwerking van typografie, palet en illustratie. De kaart- en tijdlijnpatronen zijn herkenbare conventies. |
| Codekwaliteit | 10% | 61 | 95 | Getypeerde en herbruikbare content, werkende lint- en productiechecks en lichtere dependencyset. |
| Gebruikerservaring | 10% | 68 | 94 | Alle 112 breedtecontroles en de belangrijkste interacties slagen. Het formulier gebruikt een externe dienst. |
| Projectpresentatie | 10% | 54 | 91 | Drie cases met echte beelden, concrete uitdagingen, eigen rol en bronnen. Het beeld van Trans-IT toont de openbare stageblog. |
| Performance | 5% | 75 | 98 | Snelle desktop- en homepagemetingen, prioriteit voor zichtbare afbeeldingen en geen verschuiving in de gemeten layout. Mobiele Performance blijft gevoelig voor blokkeertijd. |
| Accessibility | 5% | 72 | 95 | Geen bevestigde axe-overtredingen, getoetste toetsenbordacties, semantiek en geslaagde contrastmetingen. Een volledige WCAG-audit is een aparte controle. |
| **Gewogen totaal** | **100%** | **61,5** | **93,1** | Het streefdoel van 95 blijft open. |
