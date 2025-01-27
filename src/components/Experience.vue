<script setup lang="ts">
import { profile } from '../data/profile';

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = '/src/assets/company-placeholder.png'; // Imagen por defecto
};
</script>

<template>
  <section id="experiencia" class="experience-section">
    <div class="container">
      <h2 class="section-title">Experiencia</h2>
      <div class="experience-list">
        <div v-for="(exp, index) in profile.experience" :key="index" class="experience-card">
          <div class="company-logo">
            <img :src="`/src/assets/companies/${exp.company.toLowerCase().replace(/\s+/g, '-')}.png`"
              :alt="`Logo ${exp.company}`" @error="handleImageError" />
          </div>
          <div class="experience-content">
            <h3 class="experience-position">{{ exp.position }}</h3>
            <p class="experience-company">{{ exp.company }}</p>
            <p class="experience-period">{{ exp.period }}</p>
            <p class="experience-description">{{ exp.description }}</p>
          </div>
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
  display: flex;
  gap: 2rem;
  background: var(--bg-alt-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-speed);
}

.experience-card:hover {
  transform: translateY(-5px);
}

.company-logo {
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

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
}

.experience-content {
  flex: 1;
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

@media (max-width: 768px) {
  .experience-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .experience-card:hover {
    transform: translateY(-3px);
  }

  .company-logo {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .experience-content {
    text-align: center;
  }
}
</style>