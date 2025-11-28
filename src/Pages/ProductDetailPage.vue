<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetail from '@/components/ProductDetail.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';

const route = useRoute();

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
    <ProductDetail />
    <RelatedProducts />
  </div>
</template>