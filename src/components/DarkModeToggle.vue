<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';

const isDark = ref(false);

onMounted(() => {
  // Verificar preferencia guardada
  const savedTheme = localStorage.getItem('theme');
  isDark.value = savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  applyTheme();
});

watch(isDark, () => {
  applyTheme();
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
});

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value);
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <button @click="toggleTheme" class="theme-toggle" :title="isDark ? 'Activar modo claro' : 'Activar modo oscuro'">
    <SunIcon v-if="isDark" class="icon" />
    <MoonIcon v-else class="icon" />
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background-color: var(--bg-alt-color);
}

.icon {
  width: 24px;
  height: 24px;
}
</style> 