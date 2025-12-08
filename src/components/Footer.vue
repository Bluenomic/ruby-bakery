<template>
  <footer class="bg-white border-t-4 border-brand-gold/20 py-12 md:pt-20 md:pb-10 mt-auto">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 lg:gap-24 mb-10 md:mb-16">
        
        <div class="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div class="bg-brand-pink p-2 md:p-3 rounded-xl">
                <img src="@/assets/Logo Ruby.png" alt="Logo" class="w-8 h-8 md:w-10 md:h-10 object-contain">
            </div>
            <span class="text-2xl md:text-3xl font-bold text-brand-dark font-serif">RUBY <span class="text-brand-gold italic">Cake & Bakery</span></span>
          </div>
          <p class="text-gray-500 mb-6 md:mb-8 leading-relaxed max-w-lg text-sm md:text-base">
            Menghadirkan kehangatan dan rasa manis di setiap gigitan. Kami bangga menyajikan roti dan kue berkualitas premium untuk momen spesial Anda.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/rubycakeandbakery" target="_blank" class="w-10 h-10 md:w-12 md:h-12 bg-brand-pink rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all shadow-sm shrink-0">
                <i data-lucide="facebook" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a>
            <a href="https://wa.me/6281350916858" target="_blank" class="w-10 h-10 md:w-12 md:h-12 bg-brand-pink rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all shadow-sm shrink-0">
                <i data-lucide="phone" class="w-4 h-4 md:w-5 md:h-5"></i>
            </a>
          </div>
        </div>

        <div class="text-center md:text-left">
          <h3 class="font-bold text-brand-dark text-lg md:text-xl mb-4 md:mb-8 font-serif">Navigasi</h3>
          <ul class="space-y-3 md:space-y-4 text-sm md:text-base flex flex-col items-center md:items-start">
            <li><router-link to="/" class="text-gray-500 hover:text-brand-gold transition-colors">Beranda</router-link></li>
            <li><router-link to="/products" class="text-gray-500 hover:text-brand-gold transition-colors">Produk</router-link></li>
            <li><router-link to="/about" class="text-gray-500 hover:text-brand-gold transition-colors">Tentang</router-link></li>
            <li><router-link to="/contact" class="text-gray-500 hover:text-brand-gold transition-colors">Hubungi Kami</router-link></li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h3 class="font-bold text-brand-dark text-lg md:text-xl mb-4 md:mb-8 font-serif">Kunjungi Kami</h3>
          <ul class="space-y-4 md:space-y-5 text-sm md:text-base text-gray-500 flex flex-col items-center md:items-start">
            <li class="flex items-start gap-3 md:gap-4 justify-center md:justify-start text-center md:text-left">
                <i data-lucide="map-pin" class="w-5 h-5 text-brand-gold mt-0.5 shrink-0"></i>
                <span>Jl. Bangun Mulyo, Waru, Penajam Paser Utara, Kaltim</span>
            </li>
            <li class="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                <i data-lucide="clock" class="w-5 h-5 text-brand-gold shrink-0"></i>
                <span class="text-center md:text-left">Buka Setiap Hari:<br class="md:hidden"> 09:00 - 21:00 WITA</span>
            </li>
            <li class="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                <i data-lucide="phone" class="w-5 h-5 text-brand-gold shrink-0"></i>
                <span>+62 813-5091-6858</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400 text-center md:text-left">
        <p>© 2025 Ruby Cake and Bakery. All rights reserved.</p>
        <div class="flex items-center gap-2">
            <span>Made with</span>
            <i data-lucide="heart" class="w-3.5 h-3.5 text-red-400 fill-current"></i>
            <span>in Kalimantan</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue';
const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>