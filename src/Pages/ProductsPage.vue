<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import ProductList from '@/components/ProductList.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
  <div class="products-page">
    <Header title="Produk" />
    <ProductList />
  </div>
</template>