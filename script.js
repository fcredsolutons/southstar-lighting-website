const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });
}

// Visual brightness refinements and premium About Us styling.
const siteVisualOverrides = document.createElement('style');
siteVisualOverrides.textContent = `
  .hero-bg {
    filter: brightness(1.22) contrast(1.06) saturate(1.06) !important;
  }

  .hero-shade {
    background:
      linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.14) 44%, rgba(0,0,0,0.02) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.05) 52%, rgba(0,0,0,0.42) 100%) !important;
  }

  .services-bg {
    filter: brightness(1.34) contrast(1.07) saturate(1.06) !important;
  }

  .services-action-shade {
    background:
      linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.70) 38%, rgba(0,0,0,0.36) 58%, rgba(0,0,0,0.01) 100%) !important;
  }

  .gallery-grid img {
    filter: brightness(1.26) contrast(1.05) saturate(1.05) !important;
  }

  .logo-tile img,
  .contact-logo {
    filter: none !important;
  }

  .about-premium {
    background:
      radial-gradient(circle at top left, rgba(212,163,36,0.13), transparent 34%),
      linear-gradient(135deg, #f8f8f4 0%, #efeee8 100%) !important;
    padding-top: clamp(3.8rem, 6vw, 6.5rem) !important;
    padding-bottom: clamp(3.8rem, 6vw, 6.5rem) !important;
  }

  .about-shell {
    max-width: 1120px !important;
  }

  .section-kicker {
    margin: 0 0 0.6rem !important;
    color: #b78310 !important;
    font-weight: 900 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    font-size: 0.82rem !important;
  }

  .about-shell h2 {
    max-width: 820px !important;
    font-size: clamp(2.3rem, 4.2vw, 4.2rem) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.03em !important;
  }

  .about-lead {
    max-width: 880px !important;
    font-size: clamp(1.05rem, 1.45vw, 1.32rem) !important;
    line-height: 1.75 !important;
    color: #252525 !important;
    border-left: 4px solid #d4a324 !important;
    padding-left: 1.2rem !important;
    margin: 1.5rem 0 2rem !important;
  }

  .about-stats {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 1rem !important;
    margin: 2rem 0 2.2rem !important;
  }

  .about-stats article {
    background: #080b10 !important;
    color: #fff !important;
    padding: 1.35rem !important;
    border-radius: 16px !important;
    box-shadow: 0 18px 40px rgba(0,0,0,0.16) !important;
  }

  .about-stats strong {
    display: block !important;
    color: #d4a324 !important;
    font-size: clamp(1.65rem, 3vw, 2.45rem) !important;
    line-height: 1 !important;
    margin-bottom: 0.45rem !important;
  }

  .about-stats span {
    display: block !important;
    color: #e5e5e5 !important;
    font-size: 0.92rem !important;
  }

  .about-card-grid {
    display: grid !important;
    grid-template-columns: 1.15fr 0.85fr !important;
    gap: 1.1rem !important;
    margin: 2rem 0 !important;
  }

  .about-card {
    background: rgba(255,255,255,0.82) !important;
    border: 1px solid rgba(0,0,0,0.08) !important;
    border-radius: 18px !important;
    padding: clamp(1.25rem, 2vw, 1.75rem) !important;
    box-shadow: 0 18px 45px rgba(0,0,0,0.08) !important;
  }

  .about-card.featured {
    background: #080b10 !important;
    color: #fff !important;
    grid-row: span 2 !important;
  }

  .about-card h3 {
    margin: 0 0 0.75rem !important;
    font-size: clamp(1.25rem, 2vw, 1.75rem) !important;
    line-height: 1.15 !important;
  }

  .about-card p {
    margin: 0 !important;
    color: inherit !important;
    line-height: 1.7 !important;
    max-width: none !important;
  }

  .about-card:not(.featured) p {
    color: #333 !important;
  }

  .card-icon {
    display: inline-grid !important;
    place-items: center !important;
    width: 42px !important;
    height: 42px !important;
    margin-bottom: 0.9rem !important;
    border-radius: 50% !important;
    background: rgba(212,163,36,0.15) !important;
    color: #d4a324 !important;
    font-weight: 900 !important;
  }

  .notice-card {
    border-left: 5px solid #d4a324 !important;
  }

  .about-services-box {
    background: #fff !important;
    border-radius: 18px !important;
    padding: clamp(1.25rem, 2vw, 1.8rem) !important;
    box-shadow: 0 18px 45px rgba(0,0,0,0.08) !important;
    border: 1px solid rgba(0,0,0,0.08) !important;
    margin: 1.5rem 0 2rem !important;
  }

  .about-services-box h3 {
    margin: 0 0 1rem !important;
    font-size: 1.35rem !important;
  }

  .about-checks {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 0.65rem 1.2rem !important;
    margin: 0 !important;
  }

  .about-quote {
    margin: 1.7rem 0 !important;
    padding: 1.25rem 1.4rem !important;
    background: linear-gradient(135deg, #080b10, #151922) !important;
    color: #fff !important;
    border-left: 5px solid #d4a324 !important;
    border-radius: 14px !important;
    font-size: clamp(1.15rem, 2vw, 1.65rem) !important;
    font-weight: 800 !important;
    line-height: 1.3 !important;
  }

  @media (max-width: 760px) {
    .hero-bg {
      filter: brightness(1.34) contrast(1.08) saturate(1.06) !important;
    }

    .hero-shade {
      background:
        linear-gradient(90deg, rgba(0,0,0,0.46), rgba(0,0,0,0.06)),
        linear-gradient(180deg, rgba(0,0,0,0.01), rgba(0,0,0,0.30)) !important;
    }

    .services-bg {
      opacity: 0.98 !important;
      filter: brightness(1.45) contrast(1.08) saturate(1.07) !important;
    }

    .services-action-shade {
      background:
        linear-gradient(90deg, rgba(0,0,0,0.58), rgba(0,0,0,0.10)),
        linear-gradient(180deg, rgba(0,0,0,0.01), rgba(0,0,0,0.34)) !important;
    }

    .gallery-grid img {
      filter: brightness(1.34) contrast(1.05) saturate(1.06) !important;
    }

    .about-shell h2 {
      font-size: clamp(2.05rem, 10vw, 3rem) !important;
    }

    .about-lead {
      padding-left: 1rem !important;
      font-size: 1rem !important;
    }

    .about-stats,
    .about-card-grid,
    .about-checks {
      grid-template-columns: 1fr !important;
    }

    .about-card.featured {
      grid-row: auto !important;
    }
  }
`;
document.head.appendChild(siteVisualOverrides);
