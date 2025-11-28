<template>
  <section class="py-12 px-4 bg-brand-gray/30 border-t border-gray-100">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-6 md:mb-10 font-serif text-center md:text-left">Anda Mungkin Juga Suka</h2>

      <div class="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <router-link 
          v-for="item in related" 
          :key="item.id" 
          :to="'/products/' + item.id"
          class="min-w-40 w-[45%] md:w-auto snap-center shrink-0 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block"
        >
          <div class="aspect-square rounded-lg md:rounded-xl overflow-hidden bg-gray-100 mb-3 md:mb-4">
            <img :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
          </div>
          <h3 class="font-bold text-brand-dark font-serif text-sm md:text-lg mb-1 group-hover:text-brand-gold transition-colors truncate">{{ item.name }}</h3>
          <p class="text-gray-500 font-bold text-xs md:text-sm">Rp {{ item.price.toLocaleString('id-ID') }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import keju from '@/assets/Products/Roti Keju.jpg';
import sosis from '@/assets/Products/Roti Sosis.jpg';
import donut from '@/assets/Products/Donut.jpg';
import coffee from '@/assets/Products/Roti Kopi.jpg';

const related = [
  { id: 2, name: 'Roti Keju', price: 3000, image: keju },
  { id: 3, name: 'Roti Sosis', price: 3000, image: sosis },
  { id: 4, name: 'Donut', price: 3000, image: donut },
  { id: 5, name: 'Roti Kopi', price: 6000, image: coffee },
];
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>