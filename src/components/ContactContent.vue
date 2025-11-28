<template>
  <section class="py-12 md:py-24 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold text-brand-dark mb-3 md:mb-4 font-serif">
          Tertarik dengan Produk Kami? <br class="hidden md:block"> Hubungi Kami
        </h2>
        <p class="text-gray-500 font-sans text-sm md:text-base leading-relaxed px-4">
          Untuk informasi lebih lanjut tentang produk kami, jangan ragu untuk mengirim pesan melalui WhatsApp. 
          Kami selalu siap membantu Anda!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 mb-10 md:mb-20">
        
        <div class="lg:col-span-5 space-y-6 md:space-y-10">
          
          <div class="flex items-start gap-3 md:gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-gray rounded-full flex items-center justify-center shrink-0 text-brand-dark">
              <i data-lucide="map-pin" class="w-5 h-5 md:w-6 md:h-6"></i>
            </div>
            <div>
              <h3 class="font-bold text-lg md:text-xl text-brand-dark font-serif mb-1 md:mb-2">Alamat</h3>
              <p class="text-gray-500 leading-relaxed font-sans text-xs md:text-sm">
                Jl. Bangun Mulyo, Waru,<br>
                Kec. Waru, Kabupaten<br>
                Penajam Paser Utara,<br>
                Kalimantan Timur 76284
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 md:gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-gray rounded-full flex items-center justify-center shrink-0 text-brand-dark">
              <i data-lucide="phone" class="w-5 h-5 md:w-6 md:h-6"></i>
            </div>
            <div>
              <h3 class="font-bold text-lg md:text-xl text-brand-dark font-serif mb-1 md:mb-2">Telepon</h3>
              <p class="text-gray-500 font-sans text-xs md:text-sm">
                WA: +(62) 813-5091-6858
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3 md:gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-gray rounded-full flex items-center justify-center shrink-0 text-brand-dark">
              <i data-lucide="clock" class="w-5 h-5 md:w-6 md:h-6"></i>
            </div>
            <div>
              <h3 class="font-bold text-lg md:text-xl text-brand-dark font-serif mb-1 md:mb-2">Jam Kerja</h3>
              <p class="text-gray-500 font-sans text-xs md:text-sm">
                Setiap Hari: 09:00 - 21:00 WITA
              </p>
            </div>
          </div>

        </div>

        <div class="lg:col-span-7">
          <div class="bg-brand-gray/30 rounded-2xl md:rounded-3xl p-8 md:p-14 border border-brand-rose/20 text-center h-full flex flex-col justify-center items-center">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6 text-green-600">
               <i data-lucide="message-circle" class="w-8 h-8 md:w-10 md:h-10"></i>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-brand-dark font-serif mb-2 md:mb-3">Chat langsung dengan kami!</h3>
            <p class="text-gray-500 font-sans text-sm md:text-base mb-6 md:mb-8 max-w-md mx-auto">
              Ingin memesan kue atau memiliki pertanyaan tentang menu kami? Tekan tombol di bawah ini.
            </p>
            
            <a 
              href="https://wa.me/6281350916858" 
              target="_blank"
              class="inline-flex items-center gap-2 md:gap-3 px-8 py-3 md:px-10 md:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
            >
              <i data-lucide="message-circle" class="w-4 h-4 md:w-5 md:h-5"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div class="w-full h-[300px] md:h-[450px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border border-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.3254808676415!2d116.61330556190185!3d-1.3860337475455788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1172383f95cd1%3A0x94a298634040415c!2sRuby%20Cake%20and%20Bakery!5e0!3m2!1sid!2sid!4v1764222799207!5m2!1sid!2sid"
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="absolute inset-0 grayscale-[0.2] hover:grayscale-0 transition duration-700"
        >
        </iframe>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue';

const refreshIcons = () => { if (window.lucide) window.lucide.createIcons(); }
onMounted(refreshIcons);
onUpdated(refreshIcons);
</script>