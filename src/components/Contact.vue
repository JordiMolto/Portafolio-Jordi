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
    <h1>Contacto</h1>
    <form @submit.prevent="handleSubmit">
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
      
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>