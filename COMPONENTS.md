# Ruhestarter Komponenten-Dokumentation

Diese Dokumentation beschreibt die wiederverwendbaren Komponenten der Ruhestarter Landing Page.

## 📁 Komponenten-Übersicht

```
src/
├── components/
│   ├── Hero.astro              # Hero-Section mit Headline & CTA
│   ├── WhatWhy.astro           # "Was ist Ruhestarter?" Erklärung
│   ├── NewsletterForm.astro    # Newsletter-Anmeldung
│   └── SiteFooter.astro        # Footer mit Links & Kontakt
├── layouts/
│   └── BaseLayout.astro        # Basis-Layout mit Meta-Tags
└── pages/
    └── index.astro             # Landing Page (Single Page)
```

---

## 🦸 Hero Component

**Datei:** `src/components/Hero.astro`

### Beschreibung
Hero-Section mit aussagekräftiger Headline, Unterzeile, CTAs und zwei Feature-Cards.

### Verwendung

```astro
---
import Hero from '../components/Hero.astro';
---
<Hero />
```

### Eigenschaften
- Keine Props erforderlich (statischer Content)
- Verwendet Glassmorphismus-Effekt für Cards
- Responsive Layout (mobile: gestapelt, desktop: nebeneinander)

### Design-Pattern

```astro
<section class="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-100">
  <div class="container mx-auto flex w-full max-w-6xl flex-col items-center gap-12 
              px-6 py-16 pb-24 pt-32 sm:px-10 lg:flex-row lg:px-0 lg:pb-28 lg:pt-36">
    
    <!-- Left: Text & CTAs -->
    <div class="flex flex-col gap-6 text-center lg:max-w-2xl lg:text-left">
      <div class="badge badge-primary badge-lg font-semibold uppercase tracking-[0.2em]">
        Ruhestands-Kompass für Klarheit
      </div>
      
      <h1 class="text-balance font-display text-4xl text-primary sm:text-5xl lg:text-6xl">
        Transparent planen. Gelassen ankommen.
      </h1>
      
      <p class="text-lg text-neutral/80 sm:text-xl">
        Ruhestarter hilft Ihnen, Ihre Altersvorsorge zu verstehen und nachhaltig zu strukturieren...
      </p>
      
      <!-- CTAs -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div class="flex flex-col gap-2">
          <div class="btn btn-primary rounded-full px-8 text-base 
                      shadow-[0_2px_8px_rgba(31,91,135,0.2)] 
                      hover:shadow-[0_4px_12px_rgba(31,91,135,0.3)]">
            <a href="#newsletter">Beta Zugang sichern</a>
          </div>
          <p class="text-sm text-neutral/70 text-center sm:text-left">
            Erhalten Sie frühzeitigen Zugang zum Ruhestands-Dashboard.
          </p>
        </div>
        <div class="btn btn-outline btn-primary rounded-full px-6">
          <a href="#warum">Mehr über die Idee</a>
        </div>
      </div>
      
      <!-- Feature Cards -->
      <div class="mt-8 grid gap-6 text-left sm:grid-cols-2">
        <!-- Cards... -->
      </div>
    </div>
    
    <!-- Right: Visual Mock-up -->
    <div class="relative mx-auto flex w-full max-w-xl justify-center lg:max-w-none">
      <!-- Dashboard Preview... -->
    </div>
  </div>
</section>
```

### Best Practices
- **CTA-Hierarchie:** Primary CTA (Beta Zugang) vor Secondary CTA (Mehr Infos)
- **Untertitel am CTA:** Nutzenversprechen direkt unter dem Button verstärkt Conversion
- **Text-Balance:** `text-balance` für bessere Headlines ohne Umbruch-Witwen
- **Touch-Targets:** Buttons mind. 44px hoch für Mobile

---

## 🧭 WhatWhy Component

**Datei:** `src/components/WhatWhy.astro`

### Beschreibung
Erklärt "Was ist Ruhestarter?" mit emotionalem Einstieg und drei Feature-Cards.

### Verwendung

```astro
---
import WhatWhy from '../components/WhatWhy.astro';
---
<WhatWhy />
```

### Eigenschaften
- Keine Props erforderlich
- Anchor-ID: `#warum` für Navigation
- 3-spaltig auf Desktop, gestapelt auf Mobile

### Content-Struktur

```astro
<section id="warum" class="container mx-auto flex w-full max-w-6xl flex-col gap-12 
                           px-6 py-16 sm:px-10 lg:px-0">
  <header class="flex flex-col gap-4 text-center">
    <h2 class="text-3xl font-display text-primary sm:text-4xl">Was ist Ruhestarter?</h2>
    
    <!-- Emotionaler Hook -->
    <p class="text-lg text-neutral/80 sm:text-xl max-w-3xl mx-auto">
      Viele Menschen wissen nicht, wo sie mit ihrer Vorsorge stehen. 
      Ruhestarter schafft Ordnung und Orientierung – digital und menschlich.
    </p>
    
    <!-- Produktbeschreibung -->
    <p class="text-base text-neutral/70 max-w-3xl mx-auto mt-2">
      Wir bauen einen digitalen Kompass für den Ruhestand...
    </p>
  </header>
  
  <div class="grid gap-8 lg:grid-cols-3">
    <article class="card bg-base-200/80 shadow-card backdrop-blur border border-primary/10">
      <div class="card-body p-6">
        <h3 class="card-title text-primary">Feature-Titel</h3>
        <p class="text-base text-neutral/80 mt-3">Beschreibung...</p>
      </div>
    </article>
    <!-- 2 weitere Cards... -->
  </div>
</section>
```

### Design-Prinzipien
- **Zweistufige Intro:** Erst emotionaler Hook, dann Produktbeschreibung
- **Max-Width:** `max-w-3xl` für Intro-Texte (optimale Lesebreite)
- **Spacing:** `gap-8` zwischen Cards für Atemraum
- **Card-Padding:** `p-6` (24px) für genug Weißraum

---

## 📧 NewsletterForm Component

**Datei:** `src/components/NewsletterForm.astro`

### Beschreibung
Newsletter-Formular mit Formspree-Integration und verbesserter UX.

### Verwendung

```astro
---
import NewsletterForm from '../components/NewsletterForm.astro';
---

<!-- Standard -->
<NewsletterForm />

<!-- Mit Custom Props -->
<NewsletterForm 
  headline="Custom Headline"
  description="Custom Description"
  action="https://custom-endpoint.com/form"
/>
```

### Props

```typescript
interface Props {
  action?: string;   // Formspree/Beehiiv Endpoint (default: formspree.io/f/mzblllaq)
  headline?: string; // Überschrift (default: "Bleiben Sie am Puls...")
  description?: string; // Beschreibung (default: "Erhalten Sie frühzeitigen...")
}
```

### Component-Code

```astro
---
const {
  action = 'https://formspree.io/f/mzblllaq',
  headline = 'Bleiben Sie am Puls der Ruhestandsplanung',
  description = 'Erhalten Sie frühzeitigen Beta-Zugang...'
} = Astro.props;
---

<section id="newsletter" 
         class="container mx-auto flex w-full max-w-6xl flex-col items-center 
                gap-10 rounded-[3rem] border border-primary/10 bg-base-200/80 
                px-6 py-16 shadow-card backdrop-blur sm:px-10 lg:px-20">
  
  <header class="flex flex-col gap-5 text-center">
    <h2 class="text-3xl font-display text-primary sm:text-4xl">{headline}</h2>
    <p class="text-lg text-neutral/80 sm:text-xl max-w-2xl mx-auto">{description}</p>
  </header>
  
  <form class="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
        action={action} method="POST">
    
    <label class="sr-only" for="email">E-Mail-Adresse</label>
    
    <input 
      class="input input-bordered input-primary w-full max-w-md bg-base-200 text-base 
             focus:outline-offset-2 focus:outline-primary/50 transition-all"
      id="email"
      name="email"
      type="email"
      placeholder="Ihre E-Mail-Adresse"
      required
      aria-describedby="email-help"
    />
    
    <button 
      class="btn btn-primary rounded-full w-full max-w-[14rem] text-base 
             shadow-[0_2px_8px_rgba(31,91,135,0.2)] 
             hover:shadow-[0_4px_12px_rgba(31,91,135,0.3)] transition-shadow" 
      type="submit">
      Jetzt vormerken
    </button>
  </form>
  
  <p id="email-help" class="text-center text-sm text-neutral/70 max-w-xl">
    Wir versprechen: keine Spam-Flut...
  </p>
</section>
```

### UX-Features
- **Accessibility:** `sr-only` Label, `aria-describedby` für Screen Reader
- **Focus States:** Klare Outline mit Offset
- **Transitions:** Smooth Hover-Effekte auf Button
- **Responsive:** Gestapelt auf Mobile, horizontal auf Desktop
- **Touch-Optimiert:** Button min. 14rem Breite

### Integration-Optionen

```astro
<!-- Formspree (Standard) -->
<NewsletterForm />

<!-- Beehiiv -->
<NewsletterForm action="https://embeds.beehiiv.com/YOUR_ID" />

<!-- Custom Endpoint -->
<NewsletterForm action="/api/newsletter" />
```

---

## 🗺️ BaseLayout Component

**Datei:** `src/layouts/BaseLayout.astro`

### Beschreibung
Basis-Layout mit Meta-Tags, Fonts und globalem Styling.

### Verwendung

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const meta = {
  title: 'Seitentitel',
  description: 'Seitenbeschreibung',
  ogImage: '/og-image.svg'
};
---

<BaseLayout {...meta}>
  <!-- Page Content -->
  <slot />
  
  <!-- Footer Slot -->
  <SiteFooter slot="footer" />
</BaseLayout>
```

### Props

```typescript
interface Props {
  title?: string;       // Page Title (default: "Ruhestarter – Klarheit...")
  description?: string; // Meta Description
  ogImage?: string;     // Open Graph Image (default: "/og-image.svg")
}
```

### Features
- **Font-Loading:** Preconnect zu Google Fonts für Performance
- **Meta-Tags:** SEO, Open Graph, Twitter Cards
- **Analytics:** Umami Integration
- **Theme:** DaisyUI Theme "ruhestarter"
- **Gradient Background:** `bg-gradient-to-b from-base-200 via-base-100 to-base-100`

---

## 📄 index.astro (Page)

**Datei:** `src/pages/index.astro`

### Beschreibung
Landing Page mit strukturiertem Content-Flow.

### Content-Struktur

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import WhatWhy from '../components/WhatWhy.astro';
import NewsletterForm from '../components/NewsletterForm.astro';
import SiteFooter from '../components/SiteFooter.astro';

const milestones = [
  { title: '...', description: '...', status: 'Ab Frühjahr 2025' },
  // ...
];
---

<BaseLayout {...meta}>
  <Hero />
  <WhatWhy />
  
  <!-- Wie Ruhestarter Sie begleitet -->
  <section>...</section>
  
  <!-- Für wen wir entwickeln -->
  <section>...</section>
  
  <NewsletterForm />
  <SiteFooter slot="footer" />
</BaseLayout>
```

### Section-Pattern

```astro
<section class="container mx-auto flex w-full max-w-6xl flex-col gap-12 
                px-6 py-16 sm:px-10 lg:px-0">
  
  <!-- Header -->
  <header class="flex flex-col gap-4 text-center">
    <h2 class="text-3xl font-display text-primary sm:text-4xl">Überschrift</h2>
    <p class="text-lg text-neutral/80 sm:text-xl">Beschreibung...</p>
  </header>
  
  <!-- Content Grid -->
  <div class="grid gap-8 lg:grid-cols-3">
    {items.map((item) => (
      <article class="card bg-base-200/80 shadow-card backdrop-blur border border-primary/10">
        <div class="card-body p-6">
          <h3 class="card-title text-primary">{item.title}</h3>
          <p class="text-base text-neutral/80">{item.description}</p>
        </div>
      </article>
    ))}
  </div>
</section>
```

---

## 🎨 Styling-Konventionen

### Tailwind Class Order

```html
<!-- Empfohlene Reihenfolge -->
<div class="
  [Layout]       flex flex-col items-center
  [Sizing]       w-full max-w-6xl
  [Spacing]      gap-12 px-6 py-16
  [Typography]   text-lg text-neutral/80
  [Background]   bg-base-200/80
  [Border]       border border-primary/10
  [Effects]      shadow-card backdrop-blur
  [Responsive]   sm:px-10 lg:px-0
">
```

### Responsive Breakpoints

```javascript
// tailwind.config.mjs defaults
{
  sm: '640px',   // Mobile landscape, tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
}
```

### Common Patterns

```css
/* Container */
.container.mx-auto.max-w-6xl.px-6.sm:px-10.lg:px-0

/* Card */
.card.bg-base-200/80.shadow-card.backdrop-blur.border.border-primary/10

/* Button Primary */
.btn.btn-primary.rounded-full.px-8.shadow-[0_2px_8px_rgba(31,91,135,0.2)]

/* Section Spacing */
.py-16     /* 64px vertical padding */
.gap-12    /* 48px gap between elements */
.gap-8     /* 32px gap in grids */
```

---

## ✅ Checkliste: Neue Komponente erstellen

- [ ] Erstelle `.astro` Datei in `src/components/`
- [ ] Füge TypeScript Props-Interface hinzu
- [ ] Dokumentiere Props mit JSDoc
- [ ] Verwende Design Tokens aus `global.css`
- [ ] Halte dich an Spacing-Konventionen (`gap-8`, `p-6`)
- [ ] Teste auf Mobile & Desktop
- [ ] Prüfe Accessibility (Kontrast, Focus States, ARIA)
- [ ] Füge Komponente zu dieser Dokumentation hinzu

---

## 📚 Ressourcen

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **DaisyUI Components:** https://daisyui.com/components
- **Astro Docs:** https://docs.astro.build
- **Design Tokens:** Siehe `DESIGN_TOKENS.md`

---

**Version:** 1.0 (November 2025)  
**Maintainer:** Ruhestarter Team
