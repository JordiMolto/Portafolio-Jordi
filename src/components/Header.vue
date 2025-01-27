<script setup lang="ts">
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
import { profile } from '../data/profile';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <img src="https://picsum.photos/200" alt="Profile" class="profile-image" />
        <h1>{{ profile.name }}</h1>
        <p class="title">{{ profile.title }}</p>
        <p class="location">{{ profile.location }}</p>

        <div class="social-links">
          <a :href="`mailto:${profile.social.email}`" class="btn btn-primary">
            <EnvelopeIcon class="icon" />
            Email
          </a>
          <a :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            LinkedIn
          </a>
          <a :href="profile.social.github" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            GitHub
          </a>
          <a :href="profile.social.cv" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <DocumentTextIcon class="icon" />
            CV
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bg-alt-color);
}

.header-content {
  text-align: center;
  padding: 2rem 0;
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
  }
}
</style>