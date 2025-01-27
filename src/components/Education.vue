<script setup lang="ts">
import { profile } from '../data/profile';

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = '/src/assets/pred-img.png'; // Imagen por defecto
};
</script>

<template>
  <section id="educacion" class="education-section">
    <div class="container">
      <h2 class="section-title">Educación</h2>
      <div class="education-list">
        <div v-for="(edu, index) in profile.education" :key="index" class="education-card">
          <div class="institution-logo">
            <img :src="`/src/assets/institutions/${edu.institution.toLowerCase().replace(/\s+/g, '-')}.png`"
              :alt="`Logo ${edu.institution}`" @error="handleImageError" />
          </div>
          <div class="education-content">
            <h3 class="education-degree">{{ edu.degree }}</h3>
            <p class="education-institution">{{ edu.institution }}</p>
            <p class="education-period">{{ edu.period }}</p>
            <p v-if="edu.description" class="education-description">
              {{ edu.description }}
            </p>
          </div>
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
  display: flex;
  gap: 2rem;
  background: var(--bg-alt-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-speed);
}

.education-card:hover {
  transform: translateY(-5px);
}

.institution-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.institution-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
}

.education-content {
  flex: 1;
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

@media (max-width: 768px) {
  .education-card {
    flex-direction: column;
    gap: 1rem;
  }

  .education-card:hover {
    transform: translateY(-3px);
  }

  .institution-logo {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .education-content {
    text-align: center;
  }
}
</style>