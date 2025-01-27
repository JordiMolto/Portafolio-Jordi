<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="education" class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Education
      </h2>
      <div class="space-y-8">
        <div
          v-for="(edu, index) in profile.education"
          :key="index"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ edu.degree }}
          </h3>
          <p class="text-primary font-medium mt-1">{{ edu.institution }}</p>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{{ edu.period }}</p>
          <p v-if="edu.description" class="text-gray-600 dark:text-gray-300 mt-4">
            {{ edu.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>