/**
 * Services Grid Block
 * Displays services in a responsive grid layout
 */

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Get section title if exists (first row with single column)
  const firstRow = block.children[0];
  let sectionTitle = null;
  let startIndex = 0;

  if (firstRow && firstRow.children.length === 1 && firstRow.textContent.trim()) {
    sectionTitle = document.createElement('h2');
    sectionTitle.className = 'services-grid-title';
    sectionTitle.innerHTML = firstRow.innerHTML;
    moveInstrumentation(firstRow, sectionTitle);
    startIndex = 1;
  }

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'services-grid-container';

  // Process service items (each row is a service)
  const rows = [...block.children].slice(startIndex);
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';

      // Service icon/image (optional)
      const icon = cols[0].querySelector('img, picture');
      if (icon) {
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'service-icon';
        iconWrapper.append(icon);
        serviceCard.append(iconWrapper);
      }

      // Service title
      const title = document.createElement('h3');
      title.className = 'service-title';
      title.innerHTML = cols[0].textContent.trim() || cols[1].querySelector('strong, b, h3, h4')?.textContent || 'Service';
      serviceCard.append(title);

      // Service description
      const description = document.createElement('div');
      description.className = 'service-description';
      description.innerHTML = cols[1].innerHTML;
      serviceCard.append(description);

      moveInstrumentation(row, serviceCard);
      grid.append(serviceCard);
    }
  });

  // Clear and rebuild block
  block.innerHTML = '';
  if (sectionTitle) {
    block.append(sectionTitle);
  }
  block.append(grid);
}
