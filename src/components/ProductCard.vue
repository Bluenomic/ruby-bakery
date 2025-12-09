<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <router-link 
    :to="'/products/' + product.id"
    class="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 w-full block"
  >
    <div class="relative aspect-square overflow-hidden rounded-lg md:rounded-xl mb-2 md:mb-4 bg-gray-100">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      >
      <div class="absolute top-1 right-1 md:top-2 md:right-2 bg-brand-pink text-brand-dark text-[10px] md:text-xs font-bold uppercase px-1.5 py-0.5 md:px-2 md:py-1 rounded-md shadow-sm" v-if="product.isNew">
        New
      </div>
    </div>

    <div class="space-y-1 md:space-y-2">
      <h3 class="text-sm md:text-xl font-bold text-brand-dark font-serif group-hover:text-brand-gold transition-colors">
        {{ product.name }}
      </h3>
      
      <p class="text-gray-400 text-[10px] md:text-sm font-sans line-clamp-1 md:line-clamp-2">
        {{ product.description }}
      </p>
      
      <div class="pt-2 border-t border-gray-100 mt-1 md:mt-2">
        <span class="text-sm md:text-lg font-bold text-gray-800 font-sans block text-right">
          Rp {{ product.price.toLocaleString('id-ID') }}
        </span>
      </div>
    </div>
  </router-link>
</template>