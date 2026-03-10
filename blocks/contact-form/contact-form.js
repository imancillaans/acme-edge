/**
 * Contact Form Block
 * Simple contact form with name, email, message fields
 */

export default function decorate(block) {
  const rows = [...block.children];

  // Get form title if exists
  let formTitle = 'Get in Touch';
  if (rows.length > 0 && rows[0].textContent.trim()) {
    formTitle = rows[0].textContent.trim();
  }

  // Create form HTML
  const formHTML = `
    <div class="contact-form-container">
      <h2 class="contact-form-title">${formTitle}</h2>
      <form class="contact-form-form" id="contact-form">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required placeholder="Your name">
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required placeholder="your.email@example.com">
        </div>
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required placeholder="Your message..."></textarea>
        </div>
        <button type="submit" class="contact-form-submit">Send Message</button>
        <div class="contact-form-feedback" style="display: none;"></div>
      </form>
    </div>
  `;

  block.innerHTML = formHTML;

  // Add form submission handler
  const form = block.querySelector('#contact-form');
  const feedback = block.querySelector('.contact-form-feedback');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.contact-form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    try {
      // In production, replace this with your actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      feedback.textContent = 'Thank you! Your message has been sent.';
      feedback.className = 'contact-form-feedback success';
      feedback.style.display = 'block';

      // Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 5000);

    } catch (error) {
      // Show error message
      feedback.textContent = 'Sorry, something went wrong. Please try again.';
      feedback.className = 'contact-form-feedback error';
      feedback.style.display = 'block';
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
