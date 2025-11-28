<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import ContactContent from '@/components/ContactContent.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
  <div class="contact-page">
    <Header title="Hubungi Kami" />
    <ContactContent />
  </div>
</template>