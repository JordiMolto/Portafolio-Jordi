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
  <section id="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <div class="contact-container">
        <form @submit="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              placeholder="Your name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              required
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
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