<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="experience" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Experience
      </h2>
      <div class="space-y-8">
        <div
          v-for="(exp, index) in profile.experience"
          :key="index"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ exp.position }}
          </h3>
          <p class="text-primary font-medium mt-1">{{ exp.company }}</p>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{{ exp.period }}</p>
          <p class="text-gray-600 dark:text-gray-300 mt-4">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>