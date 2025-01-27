<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="educacion" class="education-section">
    <div class="container">
      <h2 class="section-title">Educación</h2>
      <div class="education-list">
        <div v-for="(edu, index) in profile.education" :key="index"
          class="education-card">
          <h3 class="education-degree">{{ edu.degree }}</h3>
          <p class="education-institution">{{ edu.institution }}</p>
          <p class="education-period">{{ edu.period }}</p>
          <p v-if="edu.description" class="education-description">
            {{ edu.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.education-card {
  background: var(--bg-alt-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.education-degree {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.education-institution {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.education-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.education-description {
  color: var(--text-color);
  line-height: 1.5;
}
</style>