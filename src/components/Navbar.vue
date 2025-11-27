<template>
  <nav class="sticky top-0 z-50 bg-brand-pink/90 backdrop-blur-md border-b border-brand-rose/30 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
          <i data-lucide="cake-slice" class="text-brand-dark w-8 h-8 group-hover:rotate-12 transition"></i>
          <span class="text-2xl font-bold text-brand-dark tracking-tight">RUBY <span class="text-brand-gold italic text-lg">Bakery</span></span>
        </router-link>

        <div class="hidden md:flex space-x-10 items-center">
          <router-link 
            v-for="item in menuItems" :key="item.path" :to="item.path" 
            class="text-gray-600 hover:text-brand-dark transition-colors duration-200 text-sm uppercase tracking-wider font-medium relative py-2"
            active-class="text-brand-dark font-bold border-b-2 border-brand-dark"
          >
            {{ item.name }}
          </router-link>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-brand-dark focus:outline-none">
            <i :data-lucide="isOpen ? 'x' : 'menu'" class="w-7 h-7"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="md:hidden bg-white border-t border-brand-rose/20 shadow-xl absolute w-full">
      <div class="px-4 pt-2 pb-6 space-y-2">
        <router-link 
          v-for="item in menuItems" :key="item.path" :to="item.path" 
          @click="isOpen = false"
          class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 rounded-md"
          active-class="bg-pink-50 text-brand-dark font-bold"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const isOpen = ref(false);
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>