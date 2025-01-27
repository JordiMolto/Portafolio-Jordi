<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Skills & Technologies
      </h2>
      <div class="flex flex-wrap justify-center gap-4">
        <span
          v-for="skill in profile.skills"
          :key="skill"
          class="px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-primary font-medium shadow-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>