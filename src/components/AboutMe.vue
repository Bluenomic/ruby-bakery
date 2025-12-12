<template>
    <section class="py-12 md:py-24 px-10 bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 text-center md:text-justify">
            <div>
                <h1 class="font-serif font-bold md:text-5xl text-brand-dark">Imam Dzulvan Muffid</h1>
                <h2 class="font-serif font-bold md:text-3xl text-gray-500">11231031-Informatika-ITK</h2>
                <p class="font-sans text-gray-500">
                    I am a student from Instute Technology of Kalimantan. A 5th Semester student currently undergoing many classes
                </p>
            </div>
            <div>
                <img src="@/assets/Profile Pic.jpg" alt="Profile Picture" class="hidden desktop-display aspect-4/3 rounded-2xl w-full h-40 md:h-96 object-cover">
            </div>
        </div>
        <div class="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <div 
            v-for="item in filteredSkills" 
            :key="item.id" 
            class="min-w-40 w-[45%] md:w-auto snap-center shrink-0"
            >
            <ProductCard :product="item" />
            </div>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue';
import ProductCard from './ProductCard.vue';
import { products } from '@/data/product.js';
const filteredSkills = computed(() => {
  return products.filter(p => p.category === "skills");
});

</script>

<style>
@media (min-width: 768px) {
  .desktop-display {
    display: flex !important;
  }
}
</style>