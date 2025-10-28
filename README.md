# Ruhestarter Landingpage

Eine moderne, kommentierte Astro-Landingpage mit TailwindCSS für das Projekt **Ruhestarter** und den professionellen Ableger **Ruhestands-Kompass**. Die Seite erklärt Vision, Angebot und ermöglicht Interessierten den Eintrag in eine Warteliste über Formspree (oder Beehiiv).

## Projektüberblick
- **Framework:** [Astro](https://astro.build/) als statischer Site Generator
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Hosting-Ziel:** Hetzner (statisches Hosting via Nginx)
- **Deployment:** GitHub Actions mit Build- und SCP-Schritt
- **Sprache & Ton:** Deutsch, vertrauenswürdig, modern

## Struktur

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions Workflow für Build & Deployment
├── public/
│   ├── favicon.svg           # Browser-Favicon
│   └── og-image.svg          # Social-Media-Sharing-Grafik
├── src/
│   ├── components/
│   │   ├── Hero.astro        # Hero-Sektion mit CTA und visueller Karte
│   │   ├── NewsletterForm.astro  # Formspree/Beehiiv-Anbindung
│   │   ├── SiteFooter.astro  # Footer mit Links & rechtlichen Platzhaltern
│   │   └── WhatWhy.astro     # "Was & Warum"-Erklärung der Idee
│   ├── layouts/
│   │   └── BaseLayout.astro  # Globale Struktur, Meta-Tags & Fonts
│   ├── pages/
│   │   └── index.astro       # Landingpage (Hero, Inhalt, CTA)
│   └── styles/
│       └── global.css        # Tailwind-Layer & Utility-Klassen
├── astro.config.mjs          # Astro-Konfiguration mit Tailwind-Integration
├── package.json              # Projektdefinition & Skripte
├── pnpm-lock.yaml            # Abhängigkeits-Lockfile
├── postcss.config.mjs        # PostCSS mit Tailwind & Autoprefixer
├── tailwind.config.mjs       # Tailwind-Theming (Farben, Fonts, Shadow)
└── tsconfig.json             # TypeScript/Editor-Unterstützung
```

## Installation & lokale Entwicklung

1. **Abhängigkeiten installieren**
   ```bash
   pnpm install
   ```
2. **Entwicklungsserver starten**
   ```bash
   pnpm dev
   ```
   Der Server läuft anschließend unter [http://localhost:4321](http://localhost:4321).
3. **Production-Build testen**
   ```bash
   pnpm build
   pnpm preview
   ```

## Newsletter-Integration anpassen
- Öffnen Sie `src/components/NewsletterForm.astro`.
- Ersetzen Sie den Platzhalter in `action="https://formspree.io/f/mzblllaq"` durch Ihren Formspree- oder Beehiiv-Endpunkt.
- Bei Beehiiv nutzen Sie das eingebettete Formular und passen Markup/Styles entsprechend an.

## Deployment zu Hetzner
1. Hinterlegen Sie folgende Secrets im GitHub-Repository:
   - `HETZNER_HOST` – Serveradresse oder IP
   - `HETZNER_USER` – SSH-Benutzer:in
   - `HETZNER_PORT` – SSH-Port (z. B. `22`)
   - `HETZNER_TARGET` – Zielpfad auf dem Server (z. B. `/var/www/ruhestarter`)
   - `HETZNER_SSH_KEY` – Privater SSH-Schlüssel im PEM-Format
2. Pushen Sie auf den Branch `main` oder starten Sie den Workflow manuell unter **Actions → Build and Deploy**.
3. Der Workflow führt `pnpm build` aus und überträgt den Inhalt des `dist/`-Ordners via `scp` an das Ziel.
4. Stellen Sie sicher, dass Nginx den Zielordner als Root verwendet und statische Dateien korrekt ausliefert.

## Nützliche Anpassungspunkte
- **Farben & Fonts:** `tailwind.config.mjs`
- **Globale Komponenten:** `src/components/`
- **Meta-Daten & SEO:** Props in `src/layouts/BaseLayout.astro`
- **Social Sharing Image:** `public/og-image.svg`

Viel Erfolg beim Ausbau der Ruhestarter-Landingpage!
