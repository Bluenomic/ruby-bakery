<script setup>
import { onMounted } from 'vue';
import Hero from '@/components/Hero.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';
import Testimonials from '@/components/Testimonials.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
  <div class="home-page">
    <Hero />
    <FeaturedProducts />
    <Testimonials />
  </div>
</template>