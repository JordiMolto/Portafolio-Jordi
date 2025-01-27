<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Here you would typically handle the form submission
  console.log({ name: name.value, email: email.value, message: message.value });
  // Reset form
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <div class="contact">
    <div class="container">
      <h1 class="section-title">Contacto</h1>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        
        <button type="submit" class="submit-button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--bg-alt-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  border-radius: 4px;
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
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: var(--primary-color-dark);
}

@media (max-width: 768px) {
  .contact-form {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }
}
</style>