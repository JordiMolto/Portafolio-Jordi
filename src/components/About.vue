<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <div class="about">
    <div class="container">
      <h1 class="section-title">Sobre Nosotros</h1>
      <div class="content">
        <p class="about-text">
          {{ profile.about }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--bg-alt-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  text-align: justify;
}

@media (max-width: 768px) {
  .content {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .about-text {
    font-size: 1rem;
  }
}
</style>