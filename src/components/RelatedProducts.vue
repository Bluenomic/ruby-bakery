<template>
  <section class="py-16 px-4 bg-brand-gray/30 border-t border-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-brand-dark mb-10 font-serif text-center">Anda Mungkin Juga Suka</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <router-link 
          v-for="item in related" 
          :key="item.id" 
          :to="'/products/' + item.id"
          class="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block"
        >
          <div class="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
            <img :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
          </div>
          <h3 class="font-bold text-brand-dark font-serif text-lg mb-1 group-hover:text-brand-gold transition-colors">{{ item.name }}</h3>
          <p class="text-gray-500 font-bold text-sm">Rp {{ item.price.toLocaleString('id-ID') }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import keju from '@/assets/products/Roti Keju.jpg';
import sosis from '@/assets/products/Roti Sosis.jpg';
import donut from '@/assets/products/Donut.jpg';
import coffee from '@/assets/products/Roti Kopi.jpg';

const related = [
  { id: 2, name: 'Roti Keju', price: 3000, image: keju },
  { id: 3, name: 'Roti Sosis', price: 3000, image: sosis },
  { id: 4, name: 'Donut', price: 3000, image: donut },
  { id: 5, name: 'Roti Kopi', price: 6000, image: coffee },
];
</script>