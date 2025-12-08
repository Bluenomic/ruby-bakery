<script setup>
import { onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '@/data/product.js';
import ProductDetail from '@/components/ProductDetail.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';

const route = useRoute();

const currentProduct = computed(() => {
  const id = Number(route.params.id); 
  return products.find(p => p.id === id);
});

watch(() => route.params.id, () => {
  setTimeout(() => {
     if (window.lucide) window.lucide.createIcons();
     window.scrollTo(0,0);
  }, 100);
});

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
    window.scrollTo(0,0);
});
</script>

<template>
  <div class="product-detail-page">
    <ProductDetail v-if="currentProduct" :product="currentProduct"/>
    <RelatedProducts v-if="currentProduct" :currentProduct="currentProduct" />
  </div>
</template>