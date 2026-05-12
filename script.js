const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });
}

// Visual brightness refinements for a cleaner mobile presentation.
// These overrides keep the text readable while allowing the project images to show with more detail.
const brightnessOverrides = document.createElement('style');
brightnessOverrides.textContent = `
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
  }
`;
document.head.appendChild(brightnessOverrides);
