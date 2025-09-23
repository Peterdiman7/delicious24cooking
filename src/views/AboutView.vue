<template>
  <section class="page about-page">
    <div class="container">
      <h1 class="page-title">About Us</h1>
      <p class="page-intro">
        Welcome to Delicious24Cooking — your home for tasty recipes and cooking inspiration.
      </p>

      <div class="content">
        <h3>Our Story</h3>
        <p>
          Delicious24Cooking started as a small passion project by food lovers who wanted to share 
          easy, delicious, and healthy recipes with the world. Over the years, we’ve grown into a vibrant community of home chefs.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>Step-by-step recipes with clear instructions</li>
          <li>Healthy meal ideas for busy weekdays</li>
          <li>Inspiration for dinner parties and special occasions</li>
          <li>A growing library of over 10,000+ recipes</li>
        </ul>

        <h3>Our Mission</h3>
        <p>
          To inspire people to cook more at home, try new flavors, and enjoy food with friends and family.  
          We believe that cooking brings people together ❤️
        </p>

        <h3>Join Us</h3>
        <p>
          Be part of our community of 50,000+ food lovers. Share your own recipes, tips, and cooking stories!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  padding: 3rem 1.5rem;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
.page-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #222;
}
.page-intro {
  color: #555;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.content h3 {
  margin-top: 2rem;
  font-weight: 700;
}
.content p,
.content ul {
  margin: 0.75rem 0 1.25rem;
  color: #444;
  line-height: 1.6;
}
ul {
  padding-left: 1.5rem;
}
</style>
