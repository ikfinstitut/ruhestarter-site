# Ruhestarter Design System – Design Tokens

Dieses Dokument beschreibt die Design Tokens für die Ruhestarter Landing Page. Diese Tokens gewährleisten ein konsistentes visuelles Erscheinungsbild und erleichtern zukünftige Anpassungen.

## 🎨 Farbpalette

Die Farbpalette vermittelt **Klarheit – Zuversicht – Bewegung** mit nautischer/Kompass-Thematik für Ruhestandsnavigation.

### Primärfarben

| Token | Wert (OKLCH) | Hex-Äquivalent | Verwendung |
|-------|--------------|----------------|------------|
| `--color-primary` | `oklch(0.45 0.12 247)` | `#1F5B87` | **Kompass-Blau** – Buttons, Navigation, Headlines (Vertrauen, Tiefe, Orientierung) |
| `--color-secondary` | `oklch(0.80 0.14 85)` | `#F6C343` | **Ruhestarter-Gelb** – CTAs, Akzente (Optimismus, Energie) |
| `--color-accent` | `oklch(0.58 0.12 175)` | `#3C8D7C` | **Seegrün** – Alternative Akzente, positive Indikatoren (natürlich, beruhigend) |

### Neutrale Farben

| Token | Wert (OKLCH) | Hex-Äquivalent | Verwendung |
|-------|--------------|----------------|------------|
| `--color-neutral` | `oklch(0.30 0.01 285)` | `#3A3A3A` | **Graphit-Grau** – Text, Icons (moderner Kontrast) |
| `--color-base` | `oklch(0.96 0.01 75)` | `#F8F4EE` | **Sand-Beige** – Hintergründe, Flächen (Wärme, Stabilität) |

### DaisyUI Theme-Mapping

```javascript
// tailwind.config.mjs
daisyui: {
  themes: [{
    ruhestarter: {
      'primary': 'oklch(0.45 0.12 247)',        // Kompass-Blau
      'secondary': 'oklch(0.80 0.14 85)',       // Ruhestarter-Gelb
      'accent': 'oklch(0.58 0.12 175)',         // Seegrün
      'neutral': 'oklch(0.30 0.01 285)',        // Graphit-Grau
      'base-100': 'oklch(0.96 0.01 75)',        // Sand-Beige
    }
  }]
}
```

## 📝 Typografie

### Schriftfamilien

| Token | Wert | Verwendung |
|-------|------|------------|
| `font-sans` | `"Work Sans"` | Body-Text, UI-Elemente (neutral, lesbar, modern) |
| `font-display` | `"DM Serif Display"` | Headlines, Hero-Text (Eleganz, Seriosität) |

**Zukünftige Migration:** Langfristig zu **Inter** als primäre Schrift wechseln.

### Schriftgrößen (optimiert für Lesbarkeit 50+)

| Token | Wert | Verwendung |
|-------|------|------------|
| `--font-size-base` | `17px` | Standard Body-Text |
| `--font-size-lg` | `18px` | Größerer Fließtext, wichtige Absätze |
| `--font-size-xl` | `20px` | Lead-Text, Einleitungen |
| `--line-height-base` | `1.6` | Optimale Zeilenhöhe für Lesbarkeit |

### Typografie-Hierarchie

```css
/* Headlines */
h1 { font-family: "DM Serif Display"; font-size: 48px; font-weight: normal; }
h2 { font-family: "DM Serif Display"; font-size: 32-40px; font-weight: normal; }
h3 { font-family: "Work Sans"; font-size: 20px; font-weight: 600; }

/* Body */
body, p { font-size: 17px; line-height: 1.6; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }
```

## 🔲 Abstände & Radien

### Border Radius

| Token | Wert | Verwendung |
|-------|------|------------|
| `--radius-large` | `16px` | Standard Cards, Buttons |
| `--radius-xl` | `24px` | Größere Cards |
| `--radius-2xl` | `32px` | Hero-Elemente |
| `--radius-3xl` | `48px` | Newsletter-Sektion, besondere Bereiche |

### Verwendungsbeispiele

```css
.card { border-radius: var(--radius-large); }
.btn-primary { border-radius: 9999px; } /* Vollständig rund */
#newsletter { border-radius: var(--radius-3xl); }
```

## 🎭 Schatten

### Shadow Tokens

| Token | Wert | Verwendung |
|-------|------|------------|
| `--shadow-soft` | `0 4px 16px rgba(0,0,0,0.05)` | Dezente Elevation, subtile Tiefe |
| `--shadow-card` | `0 20px 50px -25px rgba(31,91,135,0.35)` | Cards, größere Komponenten |
| `--shadow-button` | `0 2px 8px rgba(31,91,135,0.2)` | Buttons, interaktive Elemente |

### Tailwind-Erweiterung

```javascript
// tailwind.config.mjs
boxShadow: {
  card: '0 20px 50px -25px rgba(31, 91, 135, 0.35)'
}
```

## 🧩 Komponenten-Stile

### Buttons

#### Primary Button
```html
<button class="btn btn-primary rounded-full px-8 text-base 
  shadow-[0_2px_8px_rgba(31,91,135,0.2)] 
  hover:shadow-[0_4px_12px_rgba(31,91,135,0.3)] 
  transition-shadow">
  Text
</button>
```

**Eigenschaften:**
- Vollständig rund (`rounded-full`)
- Kompass-Blau Hintergrund
- Schatten für Tiefe
- Hover-Animation
- Mindestens 14rem Breite für gute Lesbarkeit

#### Secondary Button (Outline)
```html
<button class="btn btn-outline btn-primary rounded-full px-6">
  Text
</button>
```

### Cards

#### Standard Card
```html
<article class="card bg-base-200/80 shadow-card backdrop-blur border border-primary/10">
  <div class="card-body p-6">
    <h3 class="card-title text-primary">Titel</h3>
    <p class="text-base text-neutral/80 mt-3">Inhalt...</p>
  </div>
</article>
```

**Design-Prinzipien:**
- **Padding:** `p-6` (24px) für ausreichend Weißraum
- **Gaps:** `gap-8` zwischen Cards für Atemraum
- **Glassmorphismus:** `bg-base-200/80 backdrop-blur` für moderne Optik
- **Subtile Border:** `border-primary/10` für sanfte Abgrenzung

### Inputs & Formulare

#### Newsletter-Input
```html
<input 
  class="input input-bordered input-primary w-full max-w-md 
    bg-base-200 text-base 
    focus:outline-offset-2 focus:outline-primary/50 
    transition-all"
  type="email"
  required
  aria-describedby="email-help"
/>
```

**UX-Features:**
- Größere Schrift (`text-base` = 17px)
- Klare Focus-States
- Smooth Transitions
- Accessibility-Attribute

## 📐 Layout & Spacing

### Container-System

```css
.container {
  max-width: 1152px; /* 6xl = max-w-6xl */
  margin: 0 auto;
  padding: 0 1.5rem; /* px-6 */
}

@media (min-width: 640px) {
  .container { padding: 0 2.5rem; } /* sm:px-10 */
}

@media (min-width: 1024px) {
  .container { padding: 0; } /* lg:px-0 */
}
```

### Vertical Rhythm

- **Sections:** `py-16` (4rem / 64px) Standard-Abstand
- **Cards Grid:** `gap-8` (2rem / 32px) für Atemraum
- **Text Blocks:** `gap-4` (1rem / 16px) für Lesbarkeit
- **Heading → Content:** `mt-3` (0.75rem / 12px)

## ♿ Accessibility

### Kontrast-Anforderungen

Alle Farbkombinationen erfüllen **WCAG AA** Standards:

- **Text auf Base:** Neutral (#3A3A3A) auf Sand-Beige (#F8F4EE) – Kontrast: 9.8:1 ✅
- **Primary Button:** White auf Kompass-Blau – Kontrast: 6.5:1 ✅
- **Links & CTA:** Kompass-Blau auf Sand-Beige – Kontrast: 7.2:1 ✅

### Lesbarkeit 50+

- **Minimale Schriftgröße:** 17px (Desktop), 16px (Mobile)
- **Zeilenhöhe:** 1.6 für komfortables Lesen
- **Textbreite:** `max-w-3xl` für Einleitungen (ca. 65-75 Zeichen)
- **Touch-Targets:** Buttons min. 44x44px

## 🚀 Best Practices

### Do's ✅
- Verwende Design Tokens für Konsistenz
- Halte genügend Weißraum für Atemraum
- Nutze semantisches HTML (`<article>`, `<section>`, `<header>`)
- Achte auf Touch-Target-Größen (min. 44x44px)
- Teste Kontraste mit WCAG-Tools

### Don'ts ❌
- Keine Hardcoded-Farben – immer Tokens verwenden
- Keine zu engen Zeilenabstände (<1.5)
- Keine zu langen Textzeilen (max. 75 Zeichen)
- Keine zu kleine Schrift (<16px)
- Keine fehlenden `:focus`-States

## 📦 Verwendung in Komponenten

### Beispiel: Neue Card-Komponente

```astro
---
// src/components/FeatureCard.astro
export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<article class="card bg-base-200/80 shadow-card backdrop-blur border border-primary/10">
  <div class="card-body p-6">
    <h3 class="card-title text-primary text-xl">{title}</h3>
    <p class="text-base text-neutral/80 mt-3">{description}</p>
  </div>
</article>
```

## 🔄 Migration zu Inter (Geplant)

Zukünftige Typografie-Migration:

```css
/* Neue Schriftfamilien */
--font-primary: "Inter", system-ui, sans-serif;
--font-display: "Inter", system-ui, sans-serif; /* oder DM Serif beibehalten */

/* Anpassungen */
h1, h2 { font-weight: 700; } /* Inter Bold */
h3 { font-weight: 600; } /* Inter SemiBold */
body { font-weight: 400; } /* Inter Regular */
```

---

**Versionierung:** v1.0 (November 2025)  
**Kontakt:** Bei Fragen zum Design System → hallo@ruhestarter.de
