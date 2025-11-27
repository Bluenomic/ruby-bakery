<template>
  <section class="py-20 bg-white relative">
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-50 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold text-brand-dark mb-4">Our Products</h2>
        <div class="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p class="text-gray-600 text-lg">Made with the care that you deserve. We use only the finest ingredients.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <router-link to="/products" v-for="(product, index) in products" :key="index" class="group cursor-pointer block">
          <div class="relative overflow-hidden rounded-2xl shadow-md aspect-[4/5] mb-6">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
            <img :src="product.image" :alt="product.title" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
            <div class="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 text-brand-gold">
              <i data-lucide="arrow-right" class="w-6 h-6"></i>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-brand-dark text-center mb-2 group-hover:text-brand-gold transition-colors">{{ product.title }}</h3>
          <p class="text-gray-500 text-center">{{ product.desc }}</p>
        </router-link>
      </div>
      
      <div class="text-center mt-12">
        <router-link to="/products" class="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-gold transition border-b-2 border-brand-dark hover:border-brand-gold pb-1">
          View All Menu <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const products = [
  { title: 'Artisan Bread', desc: 'Sourdough, Baguette, and Soft Buns.', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop' },
  { title: 'Custom Cakes', desc: 'Birthday, Wedding, and Celebration cakes.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop' },
  { title: 'Sweet Desserts', desc: 'Tarts, Puddings, and Traditional Kue.', image: 'https://images.unsplash.com/photo-1488477181946-6428a029177b?q=80&w=600&auto=format&fit=crop' },
];

onMounted(() => {
  if (window.lucide) window.lucide.createIcons();
});
</script>