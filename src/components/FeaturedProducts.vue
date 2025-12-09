<template>
  <section class="py-12 md:py-20 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-pink rounded-full blur-3xl opacity-50 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-brand-dark mb-2 md:mb-4">Produk Kami</h2>
        <div class="w-24 md:w-40 h-1.5 bg-brand-gold mx-auto mb-4 md:mb-6 rounded-full"></div>
        <p class="text-gray-600 text-base md:text-xl">Dibuat dengan perhatian yang Anda layak dapatkan.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        <router-link to="/products" v-for="(product, index) in products" :key="index" class="group cursor-pointer block">
          <div class="relative overflow-hidden rounded-3xl shadow-lg aspect-4/3 md:aspect-4/5 mb-4 md:mb-8">
            <img :src="product.image" :alt="product.title" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
            <div class="absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-xl z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 text-brand-gold">
              <i data-lucide="arrow-right" class="w-6 h-6"></i>
            </div>
          </div>
          <h3 class="text-xl md:text-3xl font-bold text-brand-dark text-center mb-1 md:mb-3 group-hover:text-brand-gold transition-colors">{{ product.title }}</h3>
          <p class="text-gray-500 text-center text-sm md:text-lg">{{ product.desc }}</p>
        </router-link>
      </div>
      
      <div class="text-center mt-10 md:mt-16">
        <router-link to="/products" class="inline-flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest hover:text-brand-gold transition border-b-2 border-brand-dark hover:border-brand-gold pb-1 text-base md:text-lg">
          Lihat Semua Menu <i data-lucide="arrow-big-right" class="w-5 h-5"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import bread from '@/assets/HomePage/BreadCollage.jpg';
import cake from '@/assets/HomePage/CakesCollage.png';
import desserts from '@/assets/HomePage/DessertsCollage.jpg';

const products = [
  { title: 'Roti', desc: 'Roti Cokelat, Keju, Strawberry, dll.', image: bread },
  { title: 'Kue', desc: 'Kue Ulang Tahun, Pernikahan, dan Perayaan.', image: cake },
  { title: 'Makanan Manis', desc: 'Kue Sus, Pie Buah, dll.', image: desserts },
];

onMounted(() => {
  if (window.lucide) window.lucide.createIcons();
});
</script>