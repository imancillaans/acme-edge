/**
 * Hero Banner Block
 * Full-width hero section with background image, title, subtitle, and CTA button
 */

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = [...block.children];

  // Clear block and create container
  block.innerHTML = '';
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-banner-content';

  // Row 1: Background Image (optional)
  if (rows.length > 0) {
    const bgImage = rows[0].querySelector('picture, img');
    if (bgImage) {
      const bgWrapper = document.createElement('div');
      bgWrapper.className = 'hero-banner-background';
      bgWrapper.append(bgImage);
      block.append(bgWrapper);
    }
  }

  // Row 2: Title (required)
  if (rows.length > 1 && rows[1].textContent.trim()) {
    const title = document.createElement('h1');
    title.className = 'hero-banner-title';
    title.innerHTML = rows[1].innerHTML;
    moveInstrumentation(rows[1], title);
    heroContent.append(title);
  }

  // Row 3: Subtitle (optional)
  if (rows.length > 2 && rows[2].textContent.trim()) {
    const subtitle = document.createElement('p');
    subtitle.className = 'hero-banner-subtitle';
    subtitle.innerHTML = rows[2].innerHTML;
    moveInstrumentation(rows[2], subtitle);
    heroContent.append(subtitle);
  }

  // Row 4: CTA Button (optional)
  if (rows.length > 3) {
    const ctaLink = rows[3].querySelector('a');
    if (ctaLink) {
      const ctaButton = document.createElement('div');
      ctaButton.className = 'hero-banner-cta';
      ctaLink.className = 'hero-banner-button';
      moveInstrumentation(rows[3], ctaButton);
      ctaButton.append(ctaLink);
      heroContent.append(ctaButton);
    }
  }

  block.append(heroContent);
}
