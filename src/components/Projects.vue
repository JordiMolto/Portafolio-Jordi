<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in profile.projects"
          :key="index"
          class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              {{ project.description }}
            </p>
            <div class="mt-4 flex space-x-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:text-opacity-90 font-medium"
              >
                Live Demo
              </a>
              <a
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:text-opacity-90 font-medium"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>