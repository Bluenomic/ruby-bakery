<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import ContactForm from '@/components/ContactContent.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
  <div class="contact-page">
    <Header title="Hubungi Kami" />
    <ContactForm />
  </div>
</template>