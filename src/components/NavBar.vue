<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isOpen = ref(false);

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
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="navbar-brand">
        <span class="logo">Ofasty</span>
      </div>
      
      <div class="navbar-menu" :class="{ 'is-open': isOpen }">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          class="navbar-item"
        >
          {{ item.name }}
        </a>
      </div>

      <button class="navbar-toggle" @click="isOpen = !isOpen">
        <Bars3Icon v-if="!isOpen" class="icon" />
        <XMarkIcon v-else class="icon" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
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
}
</style>