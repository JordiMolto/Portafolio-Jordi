<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  </div>
</template>

<style>
.app {
  padding-top: 64px; /* Height of the navbar */
}
</style>