/**
 * About Section Block
 * Two-column layout with image and text content
 */

import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = [...block.children];

  // Clear block
  block.innerHTML = '';

  // Create two-column layout
  const container = document.createElement('div');
  container.className = 'about-section-container';

  // Image column (Row 1)
  if (rows.length > 0) {
    const imageCol = document.createElement('div');
    imageCol.className = 'about-section-image';

    const img = rows[0].querySelector('img');
    if (img) {
      const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '600' }]);
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      imageCol.append(optimizedPic);
    }
    container.append(imageCol);
  }

  // Content column
  const contentCol = document.createElement('div');
  contentCol.className = 'about-section-content';

  // Title (Row 2)
  if (rows.length > 1 && rows[1].textContent.trim()) {
    const title = document.createElement('h2');
    title.className = 'about-section-title';
    title.innerHTML = rows[1].innerHTML;
    moveInstrumentation(rows[1], title);
    contentCol.append(title);
  }

  // Description (Row 3)
  if (rows.length > 2 && rows[2].textContent.trim()) {
    const description = document.createElement('div');
    description.className = 'about-section-description';
    description.innerHTML = rows[2].innerHTML;
    moveInstrumentation(rows[2], description);
    contentCol.append(description);
  }

  // Optional CTA (Row 4)
  if (rows.length > 3) {
    const ctaLink = rows[3].querySelector('a');
    if (ctaLink) {
      ctaLink.className = 'about-section-cta';
      contentCol.append(ctaLink);
    }
  }

  container.append(contentCol);
  block.append(container);
}
