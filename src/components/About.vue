<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        About Me
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
        {{ profile.about }}
      </p>
    </div>
  </section>
</template>