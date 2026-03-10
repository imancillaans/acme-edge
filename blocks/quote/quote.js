/**
 * Quote Block
 * Displays a quote with optional author and image
 *
 * Structure in AEM:
 * Row 1: Quote text
 * Row 2: Author name (optional)
 * Row 3: Author image (optional)
 */

export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];

  // Clear the block content
  block.innerHTML = '';

  // Create the quote container
  const quoteContainer = document.createElement('div');
  quoteContainer.className = 'quote-container';

  // Row 1: Quote text (required)
  if (rows.length > 0) {
    const quoteText = document.createElement('blockquote');
    quoteText.className = 'quote-text';
    quoteText.innerHTML = rows[0].innerHTML;
    quoteContainer.append(quoteText);
  }

  // Row 2: Author name (optional)
  if (rows.length > 1 && rows[1].textContent.trim()) {
    const authorName = document.createElement('cite');
    authorName.className = 'quote-author';
    authorName.textContent = rows[1].textContent.trim();
    quoteContainer.append(authorName);
  }

  // Row 3: Author image (optional)
  if (rows.length > 2) {
    const authorImage = rows[2].querySelector('picture, img');
    if (authorImage) {
      authorImage.className = 'quote-image';
      quoteContainer.append(authorImage);
    }
  }

  // Add the container to the block
  block.append(quoteContainer);
}
