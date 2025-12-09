<template>
  <section class="py-12 px-4 bg-brand-gray/30 border-t border-gray-100" v-if="related.length > 0">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-6 md:mb-10 font-serif text-center md:text-left">
        Produk Serupa
      </h2>

      <div class="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div 
          v-for="item in related" 
          :key="item.id" 
          class="min-w-40 w-[45%] md:w-auto snap-center shrink-0"
        >
          <ProductCard :product="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '@/data/product.js';
import ProductCard from './ProductCard.vue';

const props = defineProps({
  currentProduct: {
    type: Object,
    required: true
  }
});

const related = computed(() => {
  if (!props.currentProduct || !props.currentProduct.tags) return [];

  return products.filter(product => {
    if (product.id === props.currentProduct.id) return false;

    return product.tags && product.tags.some(tag => props.currentProduct.tags.includes(tag));
  }).slice(0, 4);
});
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