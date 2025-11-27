<template>
  <footer class="bg-brand-pink border-t border-brand-rose/40 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <i data-lucide="cake-slice" class="text-brand-dark w-8 h-8"></i>
            <span class="text-2xl font-bold text-brand-dark">RUBY <span class="text-brand-gold italic">Bakery</span></span>
          </div>
          <p class="text-gray-600 mb-6 leading-relaxed pr-4">
            Jl. Bangun Mulyo, Waru, Kec. Waru<br>Kabupaten Penajam Paser Utara<br>Kalimantan Timur 76284
          </p>
        </div>

        <div>
          <h3 class="font-bold text-brand-dark text-lg mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-gray-600 hover:text-brand-gold">Home</router-link></li>
            <li><router-link to="/products" class="text-gray-600 hover:text-brand-gold">Product</router-link></li>
            <li><router-link to="/about" class="text-gray-600 hover:text-brand-gold">About Us</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-brand-dark text-lg mb-6">Hours</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex justify-between"><span>Mon - Fri:</span> <span class="font-medium">08:00 - 21:00</span></li>
            <li class="flex justify-between"><span>Sat - Sun:</span> <span class="font-medium">09:00 - 22:00</span></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-brand-dark/10 pt-8 text-center text-sm text-gray-500">
        © 2025 Ruby Cake and Bakery.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => { if (window.lucide) window.lucide.createIcons(); });
</script>