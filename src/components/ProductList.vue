<template>
  <section class="py-8 md:py-12 px-3 md:px-4 bg-brand-gray min-h-screen">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-wrap justify-center gap-2 md:gap-8 mb-8 md:mb-16">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          class="px-4 py-2 md:px-8 md:py-3 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-md cursor-pointer text-xs md:text-base"
          :class="activeCategory === category.id 
            ? 'bg-brand-gold text-white shadow-brand-gold/50 scale-105' 
            : 'bg-brand-gold/60 text-white hover:bg-brand-gold'"
        >
          {{ category.name }}
        </button>
      </div>

      <transition-group 
        tag="div" 
        name="fade" 
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 relative"
      >
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product" 
        />       
      </transition-group>
      
      <div v-if="filteredProducts.length === 0" class="text-center py-20">
        <p class="text-gray-500 text-xl">Tidak ada produk yang ditemukan.</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref, computed, onMounted, onUpdated } from 'vue';
import sosis from '@/assets/Products/Roti Sosis.jpg';
import cokelat from '@/assets/Products/Roti Cokelat.jpg';
import keju from '@/assets/Products/Roti Keju.jpg';
import serikaya from '@/assets/Products/Roti Serikaya.jpg';
import kopi from '@/assets/Products/Roti Kopi.jpg';
import smallcake from '@/assets/Products/Small Cake.jpg';
import bigcake from '@/assets/Products/Big Cake.jpg';
import kuesus from '@/assets/Products/Kue Sus.jpg';
import fruitpie from '@/assets/Products/Fruit Pie.jpg';

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'bread', name: 'Roti' },
  { id: 'cakes', name: 'Kue' },
  { id: 'dessert', name: 'Camilan' }
];

const activeCategory = ref('all');

const products = [
  // Roti
  { id: 1, name: 'Sosis', category: 'bread', price: 3000, description: 'Potongan Sosis', image: sosis, isNew: false },
  { id: 2, name: 'Cokelat', category: 'bread', price: 3000, description: 'Selai Cokelat', image: cokelat, isNew: false },
  { id: 3, name: 'Keju', category: 'bread', price: 3000, description: 'Keju Parut', image: keju, isNew: false },
  { id: 4, name: 'Serikaya', category: 'bread', price: 3000, description: 'Selai Serikaya', image: serikaya, isNew: false },
  { id: 5, name: 'Roti Kopi', category: 'bread', price: 6000, description: 'Bubuk Kopi', image: kopi, isNew: false },
  
  // Kue
  { id: 6, name: 'Kue Kecil', category: 'cakes', price: 70000, description: 'Ulang Tahun, Hadiah, dll.', image: smallcake, isNew: true },
  { id: 7, name: 'Kue Besar', category: 'cakes', price: 120000, description: 'Anniversary, Pernikahan, dll.', image: bigcake, isNew: false },
  
  // Dessert
  { id: 8, name: 'Kue Sus', category: 'dessert', price: 3000, description: 'Susu', image: kuesus, isNew: false },
  { id: 9, name: 'Pie Buah', category: 'dessert', price: 3000, description: 'Buah-buahan', image: fruitpie, isNew: true },
];

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products;
  return products.filter(p => p.category === activeCategory.value);
});

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>