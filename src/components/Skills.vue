<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="habilidades" class="skills-section">
    <div class="container">
      <h2 class="section-title">Habilidades y Tecnologías</h2>
      <div class="skills-container">
        <span
          v-for="skill in profile.skills"
          :key="skill"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 4rem 0;
  background-color: var(--bg-alt-color);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.skill-tag {
  background: var(--bg-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>