<script setup lang="ts">
import { ref } from 'vue';
import { profile } from '../data/profile';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Aquí manejarías el envío del formulario
  console.log({ name: name.value, email: email.value, message: message.value });
  // Resetear formulario
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <section id="contacto" class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <!-- Información de contacto -->
        <div class="contact-info">
          <h2 class="contact-title">Ponte en contacto</h2>
          <p class="contact-subtitle">Envíame un mensaje :)</p>

          <div class="contact-details">
            <div class="contact-item">
              <i class="devicon-github-original"></i>
              <a :href="profile.social.github" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div class="contact-item">
              <i class="devicon-linkedin-plain"></i>
              <a :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <a :href="`mailto:${profile.social.email}`">
                {{ profile.social.email }}
              </a>
            </div>

            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ profile.location }}</span>
            </div>
          </div>
        </div>

        <!-- Formulario de contacto -->
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required placeholder="Tu nombre">
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required placeholder="tu.email@ejemplo.com">
          </div>

          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="message" required placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>

          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-info {
  padding-right: 2rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: left;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
  width: 24px;
}

.contact-item a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.contact-item a:hover {
  color: var(--primary-color);
}

.contact-form {
  background-color: var(--bg-alt-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: var(--primary-color-dark);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    padding-right: 0;
    text-align: center;
  }

  .contact-title {
    text-align: center;
  }

  .contact-item {
    justify-content: center;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>