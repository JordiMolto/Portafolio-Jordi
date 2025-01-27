<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import DarkModeToggle from './DarkModeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';

const isOpen = ref(false);
const isScrolled = ref(false);

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Educación', href: '#educacion' },
  { name: 'Contacto', href: '#contacto' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  isOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0; // Detecta si se ha hecho scroll
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container navbar-container">
      <div class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" class="logo-img">
      </div>

      <div class="navbar-menu" :class="{ 'is-open': isOpen }">
        <a v-for="item in navigation" :key="item.name" :href="item.href" @click.prevent="scrollToSection(item.href)"
          class="navbar-item">
          {{ item.name }}
        </a>
      </div>

      <div class="navbar-end">
        <LanguageToggle />
        <DarkModeToggle />
        <button class="navbar-toggle" @click="isOpen = !isOpen">
          <Bars3Icon v-if="!isOpen" class="icon" />
          <XMarkIcon v-else class="icon" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  transition: background-color 0.3s;
  z-index: 1000;
  box-shadow: 0 2px 4px var(--shadow-color);
}

.navbar-scrolled {
  background: var(--bg-color);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo-img {
  width: 36px;
}

.navbar-menu {
  display: none;
}

.navbar-item {
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  font-weight: 500;
}

.navbar-item:hover {
  color: var(--primary-color);
}

.navbar-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.icon {
  width: 24px;
  height: 24px;
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .navbar-menu {
    display: flex;
    align-items: center;
  }

  .navbar-toggle {
    display: none;
  }
}

@media (max-width: 767px) {
  .navbar-menu.is-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg-color);
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar-item {
    padding: 0.75rem 1rem;
  }

  .navbar-end {
    gap: 0.5rem;
  }
}
</style>
