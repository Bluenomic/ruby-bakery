<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import AboutContent from '@/components/AboutContent.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
  <div class="about-page">
    <Header title="Tentang" />
    <AboutContent />
  </div>
</template>