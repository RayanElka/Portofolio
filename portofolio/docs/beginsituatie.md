# Nulmeting portfolio

De publieke Vercel-URL gaf in de cloud een proxyfout (CONNECT HTTP 403). De browsermeting en screenshots komen van een lokale productiebuild van de ongewijzigde broncode, commit `a54196c46f98785770021e7c2d6230f2c4eaad6f`. Dit meet geen Vercel-CDN, serverlocatie, of praktijkverkeer. Voor en na horen onder dezelfde lokale productiecondities gemeten te worden.

## Lighthouse homepage

Lighthouse 13.6.0 en Chromium 156.0.8078.79 op 26 november 2026. De categorieën zijn Performance, Accessibility, Best Practices en SEO. De tabel gebruikt de tweede run, nadat de eerste Playwright-run voltooid was. De eerste mobiele Lighthouse-run liep tegelijk met browseronderzoek en mat Performance 65, LCP 1,7 s en TBT 6.610 ms. Dit verschil toont meetvariatie onder cloudbelasting. Lighthouse SEO 100 test een beperkte set controles en garandeert geen indexering, dekking van metadata of vindbaarheid.

| Profiel | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobiel | 94 | 95 | 96 | 100 | 1,6 s | 260 ms | 0 |
| Desktop | 100 | 95 | 96 | 100 | 0,4 s | 0 ms | 0 |

## Bevindingen op volgorde van impact

1. De homepage bevat een korte introductie, contactlink en cv, maar geen project-CTA of uitgewerkt werkvoorbeeld. Projecten, achtergrond en ervaring vereisen afzonderlijke navigatie. De algemene voorbeelden tonen zelden duidelijk wat de maker zelf bouwde en waarom.
2. De site mist de documenttaal, een skiplink en de status van het mobiele menu voor hulptechnologie. Alleen de homepage heeft een H1. In het contactformulier vervangen placeholders de zichtbare labels. Verzendfeedback zit in een gewone alinea. De hoofdtekst schakelt tussen Nederlands en Engels, terwijl documenttaal en paginatitels niet meeschakelen. Pagina-animatie heeft geen uitzondering voor verminderde beweging.
3. De projecten laden onbewerkte afbeeldingen zonder `loading="lazy"`, `srcset` of afmetingen. De twee grootste bronafbeeldingen zijn circa 1,9 en 1,7 MB. De centrale Google Fonts-`@import` is renderblokkerend en gaf in deze cloud een tunnel-fout.
4. De homepage verwijst naar een ontbrekende favicon. Sitemap en robots.txt geven HTTP 404. Open Graph titel en beschrijving staan alleen op de homepage, zonder gedeelde afbeelding of URL. De cv-download en de vijf lokale routes werken.
5. De visuele identiteit is consistent blauw met grote kleurverlopen en kaarten. De tekst is leesbaar, maar de ronde badges, gloed en generieke promotekst trekken aandacht weg van het eigen werk. Op mobiel is het eerste scherm vrijwel volledig introductie.
6. De applicatie bouwt succesvol. De gedeelde layout en CSS-modules bieden een bruikbare basis. De JS-componenten bevatten verspreide vertalingen en inline styles. De README verwijst naar `app/page.tsx` terwijl de app de Pages Router gebruikt. `npm run lint` gebruikt de verwijderde opdracht `next lint`. `npm audit` vond één hoge indirecte kwetsbaarheid in `source-map-js` 1.2.1 met een fix beschikbaar in 1.2.2. [Advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)

## Gewogen beoordeling

De cijfers hieronder zijn beoordelingsscores. De Lighthouse-metingen staan in de tabel hierboven.

| Criterium | Gewicht | Score | Observatie |
| --- | ---: | ---: | --- |
| Visueel design | 20% | 63 | Duidelijke hiërarchie en consistente kleur. Grote gloed en chips bepalen het beeld. |
| Professionele uitstraling | 15% | 65 | Cv, opleiding en loopbaan zijn zichtbaar. De homepage toont weinig werkbewijs. |
| Aantrekkelijkheid voor recruiters | 15% | 56 | Contact en cv zijn snel te vinden. Rol en eigen bijdrage in projecten zijn beperkt uitgewerkt. |
| Originaliteit | 10% | 51 | De identiteit steunt op algemene kaarten en effecten. Er is weinig visuele koppeling aan de projecten of persoon. |
| Codekwaliteit | 10% | 61 | Werkende productiebuild, gedeelde layout en CSS-modules. Lintscript, README en verspreide JS-inhoud vragen onderhoud. |
| Gebruikerservaring | 10% | 68 | Bekende, korte navigatie en leesbare mobiele layout. De projectroute is minder direct vanaf de hero. |
| Projectpresentatie | 10% | 54 | Stack, enkele screenshots en bronlinks beschikbaar. Concrete keuzes, uitdagingen en teamrol blijven meestal onderbelicht. |
| Performance | 5% | 75 | Snelle desktoprun en stabiele layout. Mobiele Lighthouse-run varieert onder cloudbelasting en projectafbeeldingen zijn groot. |
| Accessibility | 5% | 72 | Semantisch main-landmark en herkenbare links. Documenttaal, headings, menu- en formuliersemantiek vertonen gaten. |
| **Gewogen totaal** | **100%** | **61,5** | |

## Browser, links en toegankelijkheid

Playwright draaide Chromium over de vijf routes op 375, 390, 768, 1024, 1440 en 1920 pixels. Alle 30 combinaties gaven HTTP 200 en 0 pixels horizontale overflow. Het cv gaf HTTP 200. De geblokkeerde Google Fonts leverden consolefouten op in de cloud. Het vaste mobiele menu reageerde op Enter en sloot na navigatie. De gekozen taal bleef bewaard bij herladen. Het oude formulier toonde succes en fout terug met gemockte Formspree-antwoorden (200 en 400), zonder een bericht te versturen.

Axe op elk van de vijf routes bij 390 en 1440 pixels vond ontbrekende documenttaal op alle routes. Op 1440 pixels voldeed de EN-schakelaar niet aan het criterium dat de zichtbare tekst in de toegankelijke naam moet voorkomen. Bij projecten vond axe op 390 pixels onvoldoende contrast en aanraakdoelgrootte. Op 1440 pixels vond axe een niet-focusbaar scrollgebied op de projectpagina. Aanvullende contrastregels vereisen handmatige controle waar verloop of gelaagde achtergronden een automatische berekening verhinderen.

De drie GitHub-links gaven HTTP 200. De twee Render-demo's, de Vercel-stageblog en LinkedIn bereikten de externe servers niet via de proxy. Hun werking is daarmee niet vastgesteld.
