<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center h-24">
        
        <router-link to="/" class="shrink-0 flex items-center gap-3 cursor-pointer group mr-8">
          <div class="bg-brand-pink p-2 rounded-full group-hover:rotate-12 transition duration-300">
            <i data-lucide="cake-slice" class="text-brand-dark w-6 h-6"></i>
          </div>
          <span class="text-2xl font-bold text-brand-dark tracking-tight font-serif">RUBY <span class="text-brand-gold italic">Bakery</span></span>
        </router-link>

        <div class="hidden md:flex items-center gap-8 ml-auto">
          <router-link 
            v-for="item in menuItems" :key="item.path" :to="item.path" 
            class="text-gray-500 hover:text-brand-dark font-bold text-sm uppercase tracking-widest transition-all py-2 border-b-2 border-transparent hover:border-brand-dark"
            active-class="text-brand-dark border-brand-dark"
          >
            {{ item.name }}
          </router-link>
          
          <router-link to="/contact" class="px-6 py-2 rounded-full bg-brand-dark text-white text-sm font-bold hover:bg-brand-gold transition shadow-md transform hover:-translate-y-0.5">
            Contact Us
          </router-link>
        </div>

        <div class="flex md:hidden ml-auto">
          <button @click="isOpen = !isOpen" class="text-brand-dark p-2 focus:outline-none active:bg-brand-pink/20 rounded-lg transition">
            <i :data-lucide="isOpen ? 'x' : 'menu'" class="w-8 h-8"></i>
          </button>
        </div>

      </div>
    </div>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform -translate-y-4 opacity-0">
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
        <div class="px-6 pt-4 pb-8 space-y-3">
          <router-link 
            v-for="item in menuItems" :key="item.path" :to="item.path" 
            @click="isOpen = false"
            class="block px-4 py-3 text-base font-bold text-gray-600 rounded-xl active:bg-gray-100 transition"
            active-class="text-brand-dark bg-brand-pink/30"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const isOpen = ref(false);
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>