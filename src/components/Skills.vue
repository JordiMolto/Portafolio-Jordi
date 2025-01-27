<script setup lang="ts">
import { profile } from '../data/profile';
import { ref } from 'vue';


// Mapeo de skills con sus iconos correctos
const skillIcons = {
  'JavaScript': 'devicon-javascript-plain colored',
  'Vue2 / Vue3': 'devicon-vuejs-plain colored',
  'React.js': 'devicon-react-original colored',
  'TypeScript': 'devicon-typescript-plain colored',
  'CSS / SCSS': 'devicon-css3-plain colored',
  'HTML': 'devicon-html5-plain colored',
  'Laravel, Blade': 'devicon-laravel-plain colored',
  'Java': 'devicon-java-plain colored',
  'Git': 'devicon-git-plain colored',
  'Docker': 'devicon-docker-plain colored',
  'PHP': 'devicon-php-plain colored',
  'Playwright': 'devicon-nodejs-plain colored',
  'WordPress avanzado': 'devicon-wordpress-plain colored',
  'Bootstrap': 'devicon-bootstrap-plain colored',
  'Prestashop': 'devicon-php-plain colored',
  'Visual Studio Code': 'devicon-vscode-plain colored',
  'Terminal': 'devicon-bash-plain colored',
  'Vite': 'devicon-vitejs-plain colored',
  'Figma': 'devicon-figma-plain colored',
} as const;

const isHovered = ref(false);
const showGrid = ref(false);

// Duplicar las skills para el efecto infinito
const duplicatedSkills = [...profile.skills, ...profile.skills];

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const toggleView = () => {
  showGrid.value = !showGrid.value;
};

// Helper function to get icon class
const getIconClass = (skill: string): string => {
  return (skillIcons as Record<string, string>)[skill] || 'devicon-github-original';
};
</script>

<template>
  <section id="habilidades" class="skills-section">
    <div class="container">
      <h2 class="section-title">Habilidades y Tecnologías</h2>

      <div v-if="!showGrid" class="skills-carousel-container" @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <div class="skills-carousel" :class="{ 'paused': isHovered }">
          <div class="skills-track">
            <div v-for="(skill, index) in duplicatedSkills" :key="`${skill}-${index}`" class="skill-item">
              <i :class="[getIconClass(skill)]" class="skill-icon"></i>
              <span class="skill-name">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showGrid" class="skills-grid">
        <div v-for="skill in profile.skills" :key="skill" class="skill-item">
          <i :class="[getIconClass(skill)]" class="skill-icon"></i>
          <span class="skill-name">{{ skill }}</span>
        </div>
      </div>

      <button @click="toggleView" class="view-toggle">
        {{ showGrid ? 'Ver carrusel' : 'Ver todo' }}
      </button>
    </div>
  </section>
</template>
<style scoped>
.skills-section {
  padding: 4rem 0;
  background-color: var(--bg-alt-color);
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
}

.section-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.view-toggle {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.view-toggle:hover {
  background-color: var(--primary-color-dark);
}

.skills-carousel-container {
  margin: 2rem 0;
  overflow: hidden;
}

.skills-carousel {
  position: relative;
  width: 100%;
}

.skills-track {
  display: flex;
  animation: scroll 40s linear infinite;
  width: max-content;
}

.skills-carousel:hover .skills-track,
.paused .skills-track {
  animation-play-state: paused;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease;
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-name {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
  transition: color 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
}

.skill-item:hover .skill-name {
  color: var(--primary-color);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills-track {
    animation-duration: 80s;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .skill-icon {
    font-size: 2.5rem;
  }
}
</style>