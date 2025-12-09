<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center justify-between h-20 md:h-24">
        
        <router-link to="/" class="shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer group mr-2 md:mr-8 overflow-hidden">
          <div class="bg-brand-pink p-1.5 md:p-2 rounded-full group-hover:rotate-12 transition duration-300 shrink-0">
            <img src="@/assets/Logo Ruby.png" alt="Logo" class="w-8 h-8 md:w-10 md:h-10 object-contain">
          </div>
          <span class="text-lg md:text-2xl font-bold text-brand-dark tracking-tight font-serif whitespace-nowrap truncate">
            RUBY <span class="text-brand-gold italic">Cake & Bakery</span>
          </span>
        </router-link>

        <div class="desktop-menu items-center gap-8 ml-auto">
          <router-link 
            v-for="item in menuItems" :key="item.path" :to="item.path" 
            class="text-gray-500 hover:text-brand-dark font-bold text-sm uppercase tracking-widest transition-all py-2 border-b-2 border-transparent hover:border-brand-dark"
            active-class="text-brand-dark border-brand-dark"
          >
            {{ item.name }}
          </router-link>
          
          <router-link to="/contact" class="px-6 py-2 rounded-full bg-brand-dark text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition shadow-md transform hover:-translate-y-0.5">
            Hubungi Kami
          </router-link>
        </div>

        <div class="mobile-menu-btn ml-auto">
          <button @click="isOpen = !isOpen" class="text-brand-dark p-2 focus:outline-none active:bg-brand-pink/20 rounded-lg transition cursor-pointer">
            <span v-if="!isOpen">
              <i data-lucide="menu" class="w-7 h-7 md:w-8 md:h-8"></i>
            </span>
            <span v-else>
              <i data-lucide="x" class="w-7 h-7 md:w-8 md:h-8"></i>
            </span>          
          </button>
        </div>
      </div>
    </div>

    <transition 
      enter-active-class="transition duration-200 ease-out" 
      enter-from-class="transform -translate-y-20 opacity-0" 
      enter-to-class="transform translate-y-0 opacity-100" 
      leave-active-class="transition duration-150 ease-in" 
      leave-from-class="transform translate-y-0 opacity-100" 
      leave-to-class="transform -translate-y-20 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
        <div class="px-6 pt-4 pb-8 space-y-3">
          <router-link 
            v-for="item in menuItems" :key="item.path" :to="item.path" 
            @click="isOpen = false"
            class="block px-4 py-3 text-base font-bold uppercase tracking-widest text-gray-600 rounded-xl hover:bg-brand-pink/20 active:bg-brand-pink/30 transition"
            active-class="text-brand-dark bg-brand-pink/30"
          >
            {{ item.name }}
          </router-link>
          <router-link 
            to="/contact"
            @click="isOpen = false"
             class="block px-4 py-3 text-base font-bold uppercase tracking-widest text-white bg-brand-dark rounded-xl hover:bg-brand-gold transition text-center mt-4"
          >
            Hubungi Kami
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
  { name: 'Beranda', path: '/' },
  { name: 'Produk', path: '/products' },
  { name: 'Tentang', path: '/about' },
];

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>

<style scoped>
.desktop-menu {
  display: none;
}
.mobile-menu-btn {
  display: flex;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex !important;
  }
  .mobile-menu-btn {
    display: none !important;
  }
}
</style>