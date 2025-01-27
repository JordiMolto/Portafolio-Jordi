<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="proyectos" class="projects-section">
    <div class="container">
      <h2 class="section-title">Proyectos</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in profile.projects" :key="index" class="project-card">
          <img :src="project.image" :alt="project.name" class="project-image" />
          <div class="project-content">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <!-- Tags de tecnologías -->
            <div class="project-technologies">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a v-if="project.demo" 
                 :href="project.demo" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="project-link">
                Demo en vivo
              </a>
              <a :href="project.repo" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="project-link">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 0;
  background-color: var(--bg-alt-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--bg-alt-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tag {
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.2s;
}

.tech-tag:hover {
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.project-link:hover {
  color: var(--primary-color-dark);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .project-card {
    max-width: 100%;
  }
}
</style>