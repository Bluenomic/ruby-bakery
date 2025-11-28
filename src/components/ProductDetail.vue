<template>
  <section class="py-12 md:py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <div class="flex flex-col-reverse md:flex-row gap-6">
          <div class="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            <button 
              v-for="(img, index) in product.images" 
              :key="index"
              @click="activeImage = img"
              class="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0"
              :class="activeImage === img ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-transparent hover:border-gray-200'"
            >
              <img :src="img" class="w-full h-full object-cover">
            </button>
          </div>
          
          <div class="flex-1 aspect-4/5 md:aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-lg relative group">
            <img :src="activeImage" :alt="product.name" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-brand-dark shadow-sm">
              Best Seller
            </div>
          </div>
        </div>

        <div class="space-y-8 py-4">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-brand-dark font-serif mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold text-gray-400 font-sans">
              Rp {{ product.price.toLocaleString('id-ID') }}
            </p>
          </div>

          <div class="prose prose-lg text-gray-500 font-sans leading-relaxed">
            <p>{{ product.description }}</p>
            <p class="mt-4">
              Rasa favorit kami. Roti cokelat ini adalah kegembiraan bagi semua orang. Cokelat manis yang ada di dalam roti menyebar di mulut, menciptakan rasa sensasional yang membuat Anda ingin lagi.
            </p>
          </div>

          <div class="pt-8 border-t border-gray-100 flex gap-4">
            <a 
              :href="whatsappLink" 
              target="_blank"
              class="flex-1 bg-brand-gold hover:bg-brand-goldHover text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-widest flex items-center justify-center gap-3"
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
import { ref, computed, onMounted, onUpdated } from 'vue';
import cokelat from '@/assets/Products/Roti Cokelat.jpg';

const product = {
  id: 1,
  name: 'Cokelat',
  price: 3000,
  description: 'Roti lembut dan fluffy yang diisi dengan cokelat kaya dan creamy. Dipanggang dengan sempurna hingga keemasan.',
  images: [
    cokelat,
    cokelat,
    cokelat,
    cokelat,
  ]
};

const activeImage = ref(product.images[0]);

const whatsappLink = computed(() => {
  const message = `Hi, aku tertarik dengan ${product.name}!`;
  return `https://wa.me/6281350916858?text=${encodeURIComponent(message)}`;
});

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>