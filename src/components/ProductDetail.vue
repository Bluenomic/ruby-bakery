<template>
  <section class="py-8 md:py-12 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <nav class="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 md:mb-10 font-sans overflow-hidden whitespace-nowrap">
        <router-link to="/" class="hover:text-brand-gold transition-colors shrink-0">Beranda</router-link>
        <i data-lucide="chevron-right" class="w-3 h-3 md:w-4 md:h-4 shrink-0"></i>
        <router-link to="/products" class="hover:text-brand-gold transition-colors shrink-0">Produk</router-link>
        <i data-lucide="chevron-right" class="w-3 h-3 md:w-4 md:h-4 shrink-0"></i>
        <span class="text-brand-dark font-bold truncate">{{ product.name }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        
        <div class="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
          <div class="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            <button 
              v-for="(img, index) in images" 
              :key="index"
              @click="activeImage = img"
              class="w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0"
              :class="activeImage === img ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-transparent hover:border-gray-200'"
            >
              <img :src="img" class="w-full h-full object-cover">
            </button>
          </div>
          
          <div class="flex-1 aspect-square md:aspect-auto md:h-[500px] bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg relative group">
            <img :src="activeImage" :alt="product.name" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
            <div class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-brand-dark shadow-sm uppercase tracking-wider">
              Best Seller
            </div>
          </div>
        </div>

        <div class="space-y-6 md:space-y-8 py-2 md:py-4">
          <div>
            <h1 class="text-3xl md:text-5xl font-bold text-brand-dark font-serif mb-2 md:mb-4">{{ product.name }}</h1>
            <p class="text-2xl md:text-3xl font-bold text-gray-400 font-sans">
              Rp {{ product.price.toLocaleString('id-ID') }}
            </p>
          </div>

          <div class="prose prose-sm md:prose-lg text-gray-500 font-sans leading-relaxed">
            <p>{{ product.description }}</p>
             <p class="mt-4">
              {{ product.longDescription }}
            </p>
          </div>

          <div class="pt-6 md:pt-8 border-t border-gray-100 flex gap-4">
            <a 
              :href="whatsappLink" 
              target="_blank"
              class="w-full md:w-auto flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
            >
              <i data-lucide="message-circle" class="w-5 h-5"></i>
              Pesan via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, watch } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const images = computed(() => {
  return [props.product.image];
});

const activeImage = ref(images.value[0]);

watch(() => props.product, (newProduct) => {
  const newImages = [newProduct.image];
  activeImage.value = newImages[0];
});

const whatsappLink = computed(() => {
  const message = `Halo, saya tertarik dengan ${props.product.name}!`;
  return `https://wa.me/6281350916858?text=${encodeURIComponent(message)}`;
});

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
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