<script setup lang="ts">
import { ref } from 'vue';

const isEnglish = ref(false);

const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value;
  // Aquí emitirías un evento para cambiar el idioma en toda la app
};
</script>

<template>
  <button @click="toggleLanguage" class="language-toggle" :title="isEnglish ? 'Cambiar a Español' : 'Switch to English'">
    {{ isEnglish ? 'ES' : 'EN' }}
  </button>
</template>

<style scoped>
.language-toggle {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: background-color 0.2s;
}

.language-toggle:hover {
  background-color: var(--bg-alt-color);
}
</style> 