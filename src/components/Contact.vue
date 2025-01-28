<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { profile } from '../data/profile';
import emailjs from '@emailjs/browser';

const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);
const success = ref(false);
const error = ref('');

// Reemplaza estos valores con los tuyos de EmailJS
const EMAIL_SERVICE_ID = 'service_82hae0d';
const EMAIL_TEMPLATE_ID = 'template_ckmq2y8';
const EMAIL_PUBLIC_KEY = 'HEsYcEtJac7K7X0la';

// Inicializar EmailJS
onMounted(() => {
  emailjs.init(EMAIL_PUBLIC_KEY);
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  loading.value = true;
  error.value = '';
  success.value = false;

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
    to_email: 'jordimolto1@gmail.com',
  };

  try {
    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      success.value = true;
      // Resetear formulario
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (err) {
    console.error('Error details:', err);
    error.value = 'Hubo un error al enviar el mensaje. Por favor, verifica tu configuración de EmailJS.';
  } finally {
    loading.value = false;
  }
};
</script>

<!-- El resto del template y estilos permanecen igual -->
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
          <div v-if="success" class="alert alert-success">
            ¡Mensaje enviado con éxito!
          </div>
          <div v-if="error" class="alert alert-error">
            {{ error }}
          </div>

          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required placeholder="Tu nombre" :disabled="loading">
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required placeholder="tu.email@ejemplo.com"
              :disabled="loading">
          </div>

          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="message" required placeholder="Escribe tu mensaje aquí..."
              :disabled="loading"></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar' }}
          </button>
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

.alert {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.submit-button:disabled {
  background-color: var(--primary-color-dark);
  opacity: 0.7;
  cursor: not-allowed;
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