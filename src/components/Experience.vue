<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="experiencia" class="experience-section">
    <div class="container">
      <h2 class="section-title">Experiencia</h2>
      <div class="experience-list">
        <div v-for="(exp, index) in profile.experience" :key="index"
          class="experience-card">
          <h3 class="experience-position">{{ exp.position }}</h3>
          <p class="experience-company">{{ exp.company }}</p>
          <p class="experience-period">{{ exp.period }}</p>
          <p class="experience-description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.experience-card {
  background: var(--bg-alt-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.experience-position {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.experience-company {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.experience-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.experience-description {
  color: var(--text-color);
  line-height: 1.5;
}
</style>