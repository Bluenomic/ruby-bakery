<template>
  <section class="relative h-[30vh] md:h-[40vh] min-h-[200px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="@/assets/HomePage/HeroBG.jpg" 
        alt="Bakery Background" 
        class="w-full h-full object-cover blur-sm scale-110"
      >
      <div class="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
    </div>

    <div class="relative z-10 text-center px-4">
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-2 md:mb-4 font-serif">{{ title }}</h1>
      <div class="flex items-center justify-center gap-2 text-gray-600 font-medium font-sans text-sm md:text-base">
        <router-link to="/" class="hover:text-brand-gold transition-colors">Beranda</router-link>
        <i data-lucide="chevron-right" class="w-3 h-3 md:w-4 md:h-4"></i>
        <span class="text-brand-dark font-bold">{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
    default: 'Page'
  }
});

onMounted(() => {
  if (window.lucide) window.lucide.createIcons();
});
</script>