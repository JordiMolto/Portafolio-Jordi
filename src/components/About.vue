<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <div class="about">
    <div class="container">
      <h1 class="section-title">Sobre mí</h1>
      <div class="about-text">
        {{ profile.about }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 4rem 0;
  background-color: var(--bg-color);
}


.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  text-align: center;
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