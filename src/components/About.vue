<script setup lang="ts">
import { profile } from '../data/profile';
</script>

<template>
  <div class="about">
    <h1>Sobre Nosotros</h1>
    <div class="content">
      <p>
        {{ profile.about }}
      </p>
    </div>
  </div>
</template>