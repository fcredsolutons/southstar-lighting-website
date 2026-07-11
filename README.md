# SouthStar Lighting Solutions LLC — Google Sites Website Enhancement

This repository contains a Google Sites-compatible enhancement plan, reusable embed snippets, and domain connection checklist for **SouthStar Lighting Solutions LLC**.

## Project Details

- **Business name:** SouthStar Lighting Solutions LLC
- **Industry:** Commercial lighting and electrical services
- **Preferred domain:** `www.southstarlightingsolutions.llc`
- **Root domain:** `southstarlightingsolutions.llc`
- **Business email:** `contact@southstarlightingsolutions.llc`
- **Primary headline:** Commercial Lighting & Electrical Services
- **Brand direction:** Premium, professional, modern contractor brand
- **Visual direction:** Dark charcoal / black background, white text, gold accents, subtle electric-blue highlights

## Google Sites Implementation Notes

Use each snippet in Google Sites through:

**Insert → Embed → Embed Code**

Important implementation constraints:

- These snippets are designed for Google Sites embed blocks, not raw page-template editing.
- Do not place this code in a global `<head>` or `<body>` area.
- CSS is scoped under `.ssls-embed` to avoid conflicts with Google Sites navigation, headers, and page styling.
- No React, Vue, Next.js, Bootstrap, Tailwind, or external libraries are used.
- JavaScript is not required for the current version.
- Replace image placeholder URLs after uploading/hosting compressed website images.

## Professional Layout Plan

1. **Hero**
   - Use a dark premium background with the existing hero image as a background visual.
   - Present the headline, subheadline, and primary email CTA above the fold.
   - Use a subtle gold line/glow and electric-blue highlight.

2. **Our Services**
   - Use clean service cards with subtle borders and gold accent marks.
   - Mobile: single column.
   - Tablet: two columns.
   - Desktop: four columns.
   - Add service or job-site imagery where appropriate, but avoid clutter.

3. **About SouthStar Lighting Solutions**
   - Use a two-column desktop layout with trust points and optional service image.
   - Keep the message commercial-service focused.

4. **Why Choose Us**
   - Use four value cards emphasizing response, experience, safety, and professionalism.
   - Keep copy concise and business-focused.

5. **Contact / Request Service**
   - Prioritize a `mailto:` CTA button.
   - If a form is needed later, use Google Forms or a third-party form backend because static embedded HTML forms in Google Sites do not automatically send submissions.

6. **Footer**
   - Include business name, services summary, email, domain, and copyright.

---

# Google Sites Embed Snippets

Each snippet below is self-contained. Paste one snippet per Google Sites embed block unless you prefer to combine sections into a single larger embed.

## Section 1 — Hero

### HTML

```html
<section class="ssls-embed ssls-hero" aria-labelledby="ssls-hero-title">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .ssls-embed.ssls-hero {
      position: relative;
      overflow: hidden;
      border-radius: 22px;
      background:
        linear-gradient(135deg, rgba(8, 10, 13, 0.92), rgba(16, 20, 26, 0.82)),
        /* Replace HERO_IMAGE_URL with the existing uploaded hero banner image URL. */
        url("HERO_IMAGE_URL") center / cover no-repeat;
      border: 1px solid rgba(212, 175, 55, 0.30);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
    }

    .ssls-embed .ssls-hero-inner {
      position: relative;
      z-index: 1;
      min-height: 460px;
      display: flex;
      align-items: center;
      padding: 46px 22px;
    }

    .ssls-embed .ssls-hero-content {
      max-width: 820px;
    }

    .ssls-embed .ssls-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 18px;
      color: #f4d36c;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ssls-embed .ssls-lightburst {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background:
        radial-gradient(circle, #fff7c7 0 9%, #f4d36c 10% 18%, rgba(244, 211, 108, 0.15) 19% 35%, transparent 36%),
        conic-gradient(from 0deg, transparent 0 7%, rgba(244, 211, 108, 0.9) 8% 10%, transparent 11% 22%, rgba(56, 189, 248, 0.75) 23% 25%, transparent 26% 40%, rgba(244, 211, 108, 0.85) 41% 43%, transparent 44% 60%, rgba(244, 211, 108, 0.8) 61% 63%, transparent 64% 78%, rgba(56, 189, 248, 0.65) 79% 81%, transparent 82% 100%);
      box-shadow: 0 0 24px rgba(244, 211, 108, 0.40);
      flex: 0 0 auto;
    }

    .ssls-embed .ssls-hero-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2.15rem, 8vw, 5rem);
      line-height: 0.98;
      letter-spacing: -0.055em;
      font-weight: 800;
    }

    .ssls-embed .ssls-hero-rule {
      width: min(220px, 70%);
      height: 3px;
      margin: 24px 0;
      background: linear-gradient(90deg, #d4af37, rgba(56, 189, 248, 0.75), transparent);
      border-radius: 999px;
      box-shadow: 0 0 22px rgba(212, 175, 55, 0.35);
    }

    .ssls-embed .ssls-hero-subtitle {
      margin: 0 0 28px;
      color: #e7edf4;
      font-size: clamp(1.05rem, 3vw, 1.45rem);
      line-height: 1.5;
      font-weight: 700;
    }

    .ssls-embed .ssls-button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
    }

    .ssls-embed .ssls-button {
      min-height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 22px;
      border-radius: 999px;
      background: linear-gradient(135deg, #f1d06a, #b98d19);
      color: #101318;
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.2;
      text-decoration: none;
      box-shadow: 0 12px 30px rgba(212, 175, 55, 0.25);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .ssls-embed .ssls-button:focus,
    .ssls-embed .ssls-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 38px rgba(212, 175, 55, 0.34);
      outline: 2px solid rgba(56, 189, 248, 0.9);
      outline-offset: 3px;
    }

    .ssls-embed .ssls-hero-note {
      color: #c9d3df;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    @media (min-width: 640px) {
      .ssls-embed .ssls-hero-inner {
        padding: 64px 44px;
        min-height: 520px;
      }
    }

    @media (min-width: 1024px) {
      .ssls-embed .ssls-hero-inner {
        padding: 86px 70px;
      }
    }
  </style>

  <div class="ssls-hero-inner">
    <div class="ssls-hero-content">
      <p class="ssls-kicker"><span class="ssls-lightburst" aria-hidden="true"></span> SouthStar Lighting Solutions LLC</p>
      <h1 class="ssls-hero-title" id="ssls-hero-title">Commercial Lighting &amp; Electrical Services</h1>
      <div class="ssls-hero-rule" aria-hidden="true"></div>
      <p class="ssls-hero-subtitle">Professional • Reliable • Fast Response</p>
      <div class="ssls-button-row">
        <!-- Update email address here if the business email changes. -->
        <a class="ssls-button" href="mailto:contact@southstarlightingsolutions.llc">Request Service</a>
        <!-- Optional: update phone number here when available. Example: <span class="ssls-hero-note">Call: (000) 000-0000</span> -->
        <span class="ssls-hero-note">Commercial lighting support for retail, office, and facility environments.</span>
      </div>
    </div>
  </div>
</section>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

## Section 2 — Our Services

### HTML

```html
<section class="ssls-embed ssls-services" aria-labelledby="ssls-services-title">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .ssls-embed.ssls-services {
      padding: 44px 18px;
      border-radius: 22px;
      background: linear-gradient(180deg, #11151b, #080a0d);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .ssls-embed .ssls-section-header {
      max-width: 780px;
      margin: 0 auto 28px;
      text-align: center;
    }

    .ssls-embed .ssls-eyebrow {
      margin: 0 0 10px;
      color: #f4d36c;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ssls-embed .ssls-section-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.9rem, 6vw, 3.2rem);
      line-height: 1.05;
      letter-spacing: -0.04em;
    }

    .ssls-embed .ssls-section-copy {
      margin: 14px 0 0;
      color: #c9d3df;
      font-size: 1rem;
      line-height: 1.65;
    }

    .ssls-embed .ssls-services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      max-width: 1160px;
      margin: 0 auto;
    }

    .ssls-embed .ssls-service-card {
      min-height: 136px;
      padding: 20px;
      border-radius: 18px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.035));
      border: 1px solid rgba(212, 175, 55, 0.20);
      box-shadow: 0 18px 42px rgba(0, 0, 0, 0.20);
    }

    .ssls-embed .ssls-service-mark {
      width: 34px;
      height: 34px;
      margin: 0 0 16px;
      border-radius: 50%;
      background:
        radial-gradient(circle, #fff7c7 0 12%, #f4d36c 13% 24%, transparent 25%),
        conic-gradient(from 10deg, transparent 0 10%, rgba(244, 211, 108, 0.85) 11% 14%, transparent 15% 31%, rgba(56, 189, 248, 0.55) 32% 35%, transparent 36% 54%, rgba(244, 211, 108, 0.78) 55% 58%, transparent 59% 78%, rgba(244, 211, 108, 0.68) 79% 82%, transparent 83% 100%);
      box-shadow: 0 0 20px rgba(244, 211, 108, 0.26);
    }

    .ssls-embed .ssls-service-title {
      margin: 0;
      color: #ffffff;
      font-size: 1.08rem;
      line-height: 1.3;
      font-weight: 800;
    }

    .ssls-embed .ssls-service-text {
      margin: 10px 0 0;
      color: #c9d3df;
      font-size: 0.95rem;
      line-height: 1.55;
    }

    .ssls-embed .ssls-service-image-note {
      max-width: 1160px;
      margin: 22px auto 0;
      color: #94a3b8;
      font-size: 0.92rem;
      line-height: 1.5;
      text-align: center;
    }

    @media (min-width: 640px) {
      .ssls-embed.ssls-services {
        padding: 58px 28px;
      }

      .ssls-embed .ssls-services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }
    }

    @media (min-width: 1024px) {
      .ssls-embed.ssls-services {
        padding: 72px 38px;
      }

      .ssls-embed .ssls-services-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  </style>

  <div class="ssls-section-header">
    <p class="ssls-eyebrow">Commercial Service Capabilities</p>
    <h2 class="ssls-section-title" id="ssls-services-title">Our Services</h2>
    <p class="ssls-section-copy">Professional lighting and electrical support designed for commercial properties, retail locations, offices, and facility maintenance needs.</p>
  </div>

  <div class="ssls-services-grid">
    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Commercial Lighting Repairs</h3>
      <p class="ssls-service-text">Troubleshooting and repair support for fixtures, controls, lamps, ballasts, drivers, and commercial lighting systems.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">LED Retrofits</h3>
      <p class="ssls-service-text">Energy-conscious lighting upgrades that help improve brightness, reliability, and long-term maintenance performance.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Track Lighting Installation</h3>
      <p class="ssls-service-text">Clean, professional installation and adjustment for retail displays, offices, galleries, and commercial interiors.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Electrical Troubleshooting</h3>
      <p class="ssls-service-text">Focused diagnostic support for lighting circuits, controls, outages, fixture issues, and electrical service concerns.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Emergency Lighting Repairs</h3>
      <p class="ssls-service-text">Repair and replacement support for emergency lighting equipment that helps maintain safer commercial environments.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Retail &amp; Office Lighting</h3>
      <p class="ssls-service-text">Lighting service solutions for storefronts, sales floors, offices, back-of-house areas, and shared commercial spaces.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Lift &amp; High Ceiling Work</h3>
      <p class="ssls-service-text">Commercial lighting support for elevated fixtures, warehouse-style ceilings, and hard-to-reach service areas.</p>
    </article>

    <article class="ssls-service-card">
      <div class="ssls-service-mark" aria-hidden="true"></div>
      <h3 class="ssls-service-title">Lighting Maintenance Services</h3>
      <p class="ssls-service-text">Planned maintenance support to help keep facilities bright, consistent, efficient, and ready for business.</p>
    </article>
  </div>

  <!-- Add service images in Google Sites near this section, or replace this note with an image tag such as:
       <img src="SERVICE_IMAGE_URL" alt="SouthStar Lighting Solutions service work" loading="lazy">
       Use compressed images and replace SERVICE_IMAGE_URL with the hosted image URL. -->
  <p class="ssls-service-image-note">Image placement note: add the existing service-section image beside or directly below this embed block in Google Sites for a polished commercial layout.</p>
</section>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

## Section 3 — About Us

### HTML

```html
<section class="ssls-embed ssls-about" aria-labelledby="ssls-about-title">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .ssls-embed.ssls-about {
      padding: 44px 18px;
      border-radius: 22px;
      background:
        radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 34%),
        linear-gradient(180deg, #0b0e12, #11151b);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .ssls-embed .ssls-about-wrap {
      display: grid;
      grid-template-columns: 1fr;
      gap: 28px;
      max-width: 1120px;
      margin: 0 auto;
      align-items: center;
    }

    .ssls-embed .ssls-eyebrow {
      margin: 0 0 10px;
      color: #f4d36c;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ssls-embed .ssls-about-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.9rem, 6vw, 3.1rem);
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .ssls-embed .ssls-about-copy {
      margin: 18px 0 0;
      color: #d9e2ec;
      font-size: 1.02rem;
      line-height: 1.75;
    }

    .ssls-embed .ssls-trust-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin: 24px 0 0;
      padding: 0;
      list-style: none;
    }

    .ssls-embed .ssls-trust-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 14px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.055);
      border: 1px solid rgba(212, 175, 55, 0.16);
      color: #eef4fb;
      font-weight: 700;
      line-height: 1.45;
    }

    .ssls-embed .ssls-trust-dot {
      width: 12px;
      height: 12px;
      margin-top: 5px;
      border-radius: 50%;
      background: #f4d36c;
      box-shadow: 0 0 16px rgba(244, 211, 108, 0.55);
      flex: 0 0 auto;
    }

    .ssls-embed .ssls-about-media {
      min-height: 260px;
      border-radius: 20px;
      overflow: hidden;
      background:
        linear-gradient(135deg, rgba(8, 10, 13, 0.25), rgba(8, 10, 13, 0.88)),
        /* Replace ABOUT_OR_SERVICE_IMAGE_URL with the existing service-section image URL. */
        url("ABOUT_OR_SERVICE_IMAGE_URL") center / cover no-repeat,
        linear-gradient(135deg, #1f2937, #080a0d);
      border: 1px solid rgba(212, 175, 55, 0.24);
      box-shadow: 0 22px 58px rgba(0, 0, 0, 0.32);
    }

    .ssls-embed .ssls-about-media-label {
      display: flex;
      align-items: flex-end;
      min-height: 260px;
      padding: 20px;
      color: #ffffff;
      font-weight: 800;
      line-height: 1.35;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.65);
    }

    @media (min-width: 640px) {
      .ssls-embed.ssls-about {
        padding: 58px 28px;
      }

      .ssls-embed .ssls-trust-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .ssls-embed.ssls-about {
        padding: 76px 40px;
      }

      .ssls-embed .ssls-about-wrap {
        grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
        gap: 46px;
      }

      .ssls-embed .ssls-about-media,
      .ssls-embed .ssls-about-media-label {
        min-height: 430px;
      }
    }
  </style>

  <div class="ssls-about-wrap">
    <div>
      <p class="ssls-eyebrow">About the Company</p>
      <h2 class="ssls-about-title" id="ssls-about-title">About SouthStar Lighting Solutions</h2>
      <p class="ssls-about-copy">SouthStar Lighting Solutions LLC provides professional commercial lighting and electrical services for retail stores, office spaces, shopping centers, and commercial facilities. We focus on reliable service, safe work practices, fast response, and high-quality lighting solutions designed to keep businesses operating efficiently.</p>
      <ul class="ssls-trust-list" aria-label="SouthStar Lighting Solutions trust points">
        <li class="ssls-trust-item"><span class="ssls-trust-dot" aria-hidden="true"></span> Commercial lighting experience</li>
        <li class="ssls-trust-item"><span class="ssls-trust-dot" aria-hidden="true"></span> Professional troubleshooting</li>
        <li class="ssls-trust-item"><span class="ssls-trust-dot" aria-hidden="true"></span> Safety-focused work</li>
        <li class="ssls-trust-item"><span class="ssls-trust-dot" aria-hidden="true"></span> Reliable maintenance support</li>
        <li class="ssls-trust-item"><span class="ssls-trust-dot" aria-hidden="true"></span> Clean and organized service documentation</li>
      </ul>
    </div>

    <!-- Replace ABOUT_OR_SERVICE_IMAGE_URL in the CSS above with the existing service-section image URL. -->
    <div class="ssls-about-media" role="img" aria-label="Commercial lighting service work by SouthStar Lighting Solutions">
      <div class="ssls-about-media-label">Commercial lighting service built around safety, reliability, and business continuity.</div>
    </div>
  </div>
</section>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

## Section 4 — Why Choose Us

### HTML

```html
<section class="ssls-embed ssls-why" aria-labelledby="ssls-why-title">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed.ssls-why {
      padding: 44px 18px;
      border-radius: 22px;
      background: linear-gradient(180deg, #10141a, #07090c);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .ssls-embed .ssls-section-header {
      max-width: 780px;
      margin: 0 auto 28px;
      text-align: center;
    }

    .ssls-embed .ssls-eyebrow {
      margin: 0 0 10px;
      color: #f4d36c;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ssls-embed .ssls-section-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.9rem, 6vw, 3.1rem);
      line-height: 1.08;
      letter-spacing: -0.04em;
    }

    .ssls-embed .ssls-why-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      max-width: 1120px;
      margin: 0 auto;
    }

    .ssls-embed .ssls-why-card {
      position: relative;
      overflow: hidden;
      padding: 24px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.055);
      border: 1px solid rgba(212, 175, 55, 0.20);
      box-shadow: 0 18px 46px rgba(0, 0, 0, 0.20);
    }

    .ssls-embed .ssls-why-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #d4af37, rgba(56, 189, 248, 0.75));
    }

    .ssls-embed .ssls-why-title {
      margin: 0;
      color: #ffffff;
      font-size: 1.18rem;
      line-height: 1.3;
      font-weight: 800;
    }

    .ssls-embed .ssls-why-copy {
      margin: 12px 0 0;
      color: #c9d3df;
      font-size: 0.98rem;
      line-height: 1.65;
    }

    @media (min-width: 640px) {
      .ssls-embed.ssls-why {
        padding: 58px 28px;
      }

      .ssls-embed .ssls-why-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .ssls-embed.ssls-why {
        padding: 76px 40px;
      }

      .ssls-embed .ssls-why-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  </style>

  <div class="ssls-section-header">
    <p class="ssls-eyebrow">Why Businesses Choose SouthStar</p>
    <h2 class="ssls-section-title" id="ssls-why-title">Why Choose Us</h2>
  </div>

  <div class="ssls-why-grid">
    <article class="ssls-why-card">
      <h3 class="ssls-why-title">Reliable Response</h3>
      <p class="ssls-why-copy">Commercial lighting problems can interrupt business operations. SouthStar focuses on clear communication, practical scheduling, and timely service support.</p>
    </article>

    <article class="ssls-why-card">
      <h3 class="ssls-why-title">Commercial Experience</h3>
      <p class="ssls-why-copy">Service is tailored for retail stores, office spaces, shopping centers, and commercial facilities where lighting performance matters every day.</p>
    </article>

    <article class="ssls-why-card">
      <h3 class="ssls-why-title">Safety First</h3>
      <p class="ssls-why-copy">Work is approached with safe practices, attention to equipment access, and respect for active business environments and customer areas.</p>
    </article>

    <article class="ssls-why-card">
      <h3 class="ssls-why-title">Clean Professional Service</h3>
      <p class="ssls-why-copy">SouthStar prioritizes organized work areas, professional documentation, and clean completion so facilities can continue operating with confidence.</p>
    </article>
  </div>
</section>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

## Section 5 — Contact

### HTML

```html
<section class="ssls-embed ssls-contact" aria-labelledby="ssls-contact-title">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed.ssls-contact {
      padding: 44px 18px;
      border-radius: 22px;
      background:
        radial-gradient(circle at 15% 0%, rgba(212, 175, 55, 0.22), transparent 32%),
        linear-gradient(135deg, #080a0d, #131922);
      border: 1px solid rgba(212, 175, 55, 0.26);
      box-shadow: 0 22px 64px rgba(0, 0, 0, 0.26);
    }

    .ssls-embed .ssls-contact-wrap {
      max-width: 920px;
      margin: 0 auto;
      text-align: center;
    }

    .ssls-embed .ssls-eyebrow {
      margin: 0 0 10px;
      color: #f4d36c;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .ssls-embed .ssls-contact-title {
      margin: 0;
      color: #ffffff;
      font-size: clamp(2rem, 7vw, 3.6rem);
      line-height: 1.05;
      letter-spacing: -0.05em;
    }

    .ssls-embed .ssls-contact-copy {
      margin: 18px auto 0;
      max-width: 680px;
      color: #d9e2ec;
      font-size: 1.04rem;
      line-height: 1.7;
    }

    .ssls-embed .ssls-contact-email {
      display: inline-block;
      margin: 18px 0 0;
      color: #f4d36c;
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.4;
      overflow-wrap: anywhere;
      text-decoration: none;
    }

    .ssls-embed .ssls-contact-email:focus,
    .ssls-embed .ssls-contact-email:hover {
      color: #ffffff;
      outline: 2px solid rgba(56, 189, 248, 0.9);
      outline-offset: 4px;
      border-radius: 6px;
    }

    .ssls-embed .ssls-button-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      margin-top: 26px;
    }

    .ssls-embed .ssls-button {
      min-height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 24px;
      border-radius: 999px;
      background: linear-gradient(135deg, #f1d06a, #b98d19);
      color: #101318;
      font-size: 1rem;
      font-weight: 800;
      line-height: 1.2;
      text-decoration: none;
      box-shadow: 0 12px 30px rgba(212, 175, 55, 0.25);
    }

    .ssls-embed .ssls-button:focus,
    .ssls-embed .ssls-button:hover {
      outline: 2px solid rgba(56, 189, 248, 0.9);
      outline-offset: 3px;
    }

    .ssls-embed .ssls-form-note {
      max-width: 720px;
      margin: 26px auto 0;
      padding: 16px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.10);
      color: #c9d3df;
      font-size: 0.95rem;
      line-height: 1.6;
      text-align: left;
    }

    @media (min-width: 640px) {
      .ssls-embed.ssls-contact {
        padding: 60px 30px;
      }
    }

    @media (min-width: 1024px) {
      .ssls-embed.ssls-contact {
        padding: 82px 40px;
      }
    }
  </style>

  <div class="ssls-contact-wrap">
    <p class="ssls-eyebrow">Contact SouthStar</p>
    <h2 class="ssls-contact-title" id="ssls-contact-title">Request Service</h2>
    <p class="ssls-contact-copy">For commercial lighting repairs, retrofits, troubleshooting, maintenance, and high-ceiling service needs, contact SouthStar Lighting Solutions LLC.</p>

    <!-- Update email address here if the business email changes. -->
    <a class="ssls-contact-email" href="mailto:contact@southstarlightingsolutions.llc">contact@southstarlightingsolutions.llc</a>

    <div class="ssls-button-row">
      <!-- Update email address here if the business email changes. -->
      <a class="ssls-button" href="mailto:contact@southstarlightingsolutions.llc">Email Us</a>
      <!-- Optional: add phone number when available. Example: <a class="ssls-button" href="tel:+10000000000">Call Us</a> -->
    </div>

    <div class="ssls-form-note">
      <strong>Future form fields:</strong> Name, Company, Phone, Email, Service Needed, and Message. Google Sites embedded HTML forms require Google Forms or a third-party form service to actually send submissions. Until a working form backend is selected, use the email button above as the primary request method.
    </div>
  </div>
</section>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

## Section 6 — Footer

### HTML

```html
<footer class="ssls-embed ssls-footer" aria-label="SouthStar Lighting Solutions footer">
  <style>
    .ssls-embed {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }

    .ssls-embed *,
    .ssls-embed *::before,
    .ssls-embed *::after {
      box-sizing: inherit;
    }

    .ssls-embed.ssls-footer {
      padding: 28px 18px;
      border-radius: 18px;
      background: #07090c;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .ssls-embed .ssls-footer-wrap {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
      max-width: 1120px;
      margin: 0 auto;
      align-items: center;
    }

    .ssls-embed .ssls-footer-brand {
      margin: 0;
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 800;
      line-height: 1.35;
    }

    .ssls-embed .ssls-footer-service,
    .ssls-embed .ssls-footer-meta,
    .ssls-embed .ssls-footer-copy {
      margin: 6px 0 0;
      color: #c9d3df;
      font-size: 0.94rem;
      line-height: 1.55;
    }

    .ssls-embed .ssls-footer-links {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .ssls-embed .ssls-footer-link {
      color: #f4d36c;
      font-size: 0.95rem;
      font-weight: 700;
      overflow-wrap: anywhere;
      text-decoration: none;
    }

    .ssls-embed .ssls-footer-link:focus,
    .ssls-embed .ssls-footer-link:hover {
      color: #ffffff;
      outline: 2px solid rgba(56, 189, 248, 0.9);
      outline-offset: 4px;
      border-radius: 6px;
    }

    @media (min-width: 640px) {
      .ssls-embed.ssls-footer {
        padding: 34px 28px;
      }

      .ssls-embed .ssls-footer-wrap {
        grid-template-columns: 1.2fr 0.8fr;
      }

      .ssls-embed .ssls-footer-links {
        align-items: flex-end;
        text-align: right;
      }
    }
  </style>

  <div class="ssls-footer-wrap">
    <div>
      <p class="ssls-footer-brand">SouthStar Lighting Solutions LLC</p>
      <p class="ssls-footer-service">Commercial Lighting &amp; Electrical Services</p>
      <p class="ssls-footer-copy">© 2026 SouthStar Lighting Solutions LLC. All rights reserved.</p>
    </div>

    <div class="ssls-footer-links">
      <!-- Update email address here if the business email changes. -->
      <a class="ssls-footer-link" href="mailto:contact@southstarlightingsolutions.llc">contact@southstarlightingsolutions.llc</a>
      <a class="ssls-footer-link" href="https://www.southstarlightingsolutions.llc">southstarlightingsolutions.llc</a>
      <!-- Optional: update phone number here when available. Example: <span class="ssls-footer-meta">(000) 000-0000</span> -->
    </div>
  </div>
</footer>
```

### CSS

The CSS for this section is already included inside the `<style>` tag in the HTML snippet above for Google Sites compatibility.

### JavaScript

No JavaScript is required for this section.

---

# Domain Connection Checklist — Google Sites + Namecheap

## Goal

Connect the Google Site to:

`www.southstarlightingsolutions.llc`

and forward:

`southstarlightingsolutions.llc`

to:

`https://www.southstarlightingsolutions.llc`

## Critical Email DNS Warning

Do **not** modify existing Google Workspace Gmail records.

Do **not** delete or change:

- MX records for Gmail
- Google Workspace TXT verification records
- SPF, DKIM, or DMARC records
- Any existing email-related DNS records

Only add website-related records for Google Sites and root-domain forwarding.

## Google Sites Custom Domain Steps

1. Open the Google Site in edit mode.
2. Select **Settings**.
3. Open **Custom domains**.
4. Choose the option to start setup or add a custom domain.
5. Enter the preferred website address:
   - `www.southstarlightingsolutions.llc`
6. Complete any Google ownership verification step if requested.
7. Keep the Google Sites custom domain setup window open while adding DNS records in Namecheap.

## Namecheap DNS Record for Google Sites

In Namecheap:

1. Sign in to Namecheap.
2. Open **Domain List**.
3. Select **Manage** for `southstarlightingsolutions.llc`.
4. Open **Advanced DNS**.
5. Add the following website-related record only:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME Record | `www` | `ghs.googlehosted.com` | Automatic |

6. Save changes.
7. Return to Google Sites and complete/verify the custom domain setup.

## Root Domain Forwarding in Namecheap

To forward the root domain to the `www` website address, add this URL redirect record in Namecheap if needed:

| Type | Host | Value | Redirect Type |
| --- | --- | --- | --- |
| URL Redirect Record | `@` | `https://www.southstarlightingsolutions.llc` | Permanent 301 Redirect |

Important notes:

- Do not use root forwarding settings that overwrite email DNS records.
- Keep Gmail MX records and Google Workspace verification records intact.
- DNS propagation can take time. Check the site again after propagation if it does not load immediately.
- After Google finishes provisioning, confirm that the website loads with `https://` and that SSL is active.

---

# Quality Checklist Before Publishing

Use this checklist before sharing the website publicly:

- [ ] Mobile preview checked in Google Sites.
- [ ] Desktop preview checked in Google Sites.
- [ ] Hero image replaced with the real optimized hero banner image.
- [ ] Service-section image replaced with the real optimized service image.
- [ ] Logo/light-burst visual reviewed for brand consistency.
- [ ] No traditional 5-point or 6-point star icon added.
- [ ] CTA buttons tested.
- [ ] `mailto:contact@southstarlightingsolutions.llc` email link tested.
- [ ] Images compressed and visually sharp.
- [ ] All embed blocks display correctly in Google Sites preview.
- [ ] Domain connected to `www.southstarlightingsolutions.llc`.
- [ ] Root domain forwards to `https://www.southstarlightingsolutions.llc`.
- [ ] Gmail still working after DNS changes.
- [ ] Existing Google Workspace MX records still present.
- [ ] Existing Google Workspace verification TXT records still present.
- [ ] SSL/HTTPS working after DNS propagation.
