<!-- src/components/Footer.vue -->
<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Logo Section -->
        <div class="footer-section footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">🍳</span>
            <span class="logo-text">Delicious24Cooking</span>
          </div>
          <p class="footer-description">
            Discover amazing recipes from around the world. From quick weekday meals to impressive dinner party dishes,
            we've got you covered.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/categories" class="footer-link">Categories</router-link></li>
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/contacts" class="footer-link">Contact</router-link></li>
            <li><router-link to="/cancel-subscription" class="footer-link">Cancel Subscription</router-link></li>
          </ul>
        </div>
        <!-- Newsletter -->
        <div class="footer-section">
          <h3 class="footer-title">Stay Updated</h3>
          <p class="newsletter-description">
            Get the latest recipes and cooking tips delivered to your inbox.
          </p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <div class="input-group">
              <input v-model="emailInput" type="email" placeholder="Enter your email" class="newsletter-input" required>
              <button type="submit" class="newsletter-btn">
                <span class="btn-text">Subscribe</span>
                <span class="btn-icon">✉️</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; 2025 Delicious24Cooking. All rights reserved.</p>
          </div>
          <div class="legal-links">
            <router-link to="/terms-conditions" class="legal-link">Terms & Conditions</router-link>
            <span class="separator">•</span>
            <router-link to="/privacy-policy" class="legal-link">Privacy Policy</router-link>
            <span class="separator">•</span>
            <router-link to="/cookies" class="legal-link">Cookie Policy</router-link>
          </div>
          <div class="footer-info">
            <span class="info-item">🌟 Over 10,000+ recipes</span>
            <span class="info-item">👥 Join 50k+ home chefs</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emailInput = ref('');

const subscribeNewsletter = () => {
  if (emailInput.value) {
    console.log('Subscribing email:', emailInput.value);
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
  }
};
</script>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, var(--charcoal) 0%, var(--dark-gray) 100%);
  color: white;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 20%, rgba(255, 107, 71, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.footer-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

/* Tablet (2 columns) */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile (1 column) */
@media (max-width: 640px) {
  .footer-main {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-brand,
  .social-links,
  .legal-links,
  .footer-info {
    justify-content: center;
    align-items: center;
  }
  .input-group {
    flex-direction: column;
  }
  .newsletter-btn {
    width: 100%;
  }
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  font-size: 1.3rem;
  text-decoration: none;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: var(--gradient-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--warm-yellow);
  margin-bottom: 0.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
  padding: 0.25rem 0;
  border-radius: var(--radius-sm);
}

.footer-link:hover {
  color: var(--warm-yellow);
  padding-left: 0.5rem;
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  gap: 0.75rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.95rem;
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
  font-family: 'Quicksand', sans-serif;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-orange);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(255, 107, 71, 0.2);
}

.newsletter-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius-md);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-family: 'Quicksand', sans-serif;
}

.newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  background: var(--gradient-warm);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.copyright p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.legal-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.legal-link:hover {
  color: var(--warm-yellow);
  text-decoration: underline;
}

.separator {
  color: rgba(255, 255, 255, 0.5);
}

.footer-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.info-item {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
}
</style>
