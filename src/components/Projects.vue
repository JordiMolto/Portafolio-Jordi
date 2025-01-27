<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="proyectos" class="projects-section">
    <div class="container">
      <h2 class="section-title">Proyectos</h2>
      <div class="projects-grid">
        <div
          v-for="(project, index) in profile.projects"
          :key="index"
          class="project-card"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="project-image"
          />
          <div class="project-content">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-links">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Demo en vivo
              </a>
              <a
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Repositorio
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
  background: var(--bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.project-link:hover {
  text-decoration: underline;
}
</style>