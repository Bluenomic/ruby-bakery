<template>
  <section class="py-12 md:py-24 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-8 mb-12 md:mb-20 border-b border-gray-100 pb-8 md:pb-12">
        <div class="max-w-2xl text-center md:text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-brand-dark mb-4 md:mb-6 font-serif">Tentang Kami</h2>
          <p class="text-base md:text-xl text-gray-500 font-sans leading-relaxed">
            Di Ruby Cake & Bakery, kami percaya bahwa setiap gigitan harus menjadi pengalaman yang luar biasa. Sejak awal berdiri, 
            kami berkomitmen untuk menyajikan roti dan kue yang dibuat dengan cinta dan perhatian terhadap detail.
          </p>
        </div>
        <router-link 
          to="/contact" 
          class="px-6 py-3 md:px-8 md:py-4 bg-brand-gold text-white font-bold tracking-widest uppercase rounded-3xl shadow-lg hover:bg-brand-goldHover hover:-translate-y-1 transition-all duration-300 shrink-0 text-sm md:text-base"
        >
          Hubungi Kami
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
        
        <div class="lg:col-span-7 order-2 lg:order-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
            <div v-for="(item, index) in points" :key="index" class="space-y-2 md:space-y-4">
              <span class="text-4xl md:text-6xl font-serif text-brand-dark opacity-100 block mb-1 md:mb-2">{{ index + 1 }}.</span>
              <h3 class="text-xl md:text-2xl font-bold text-gray-800 font-serif">{{ item.title }}</h3>
              <p class="text-sm md:text-base text-gray-500 leading-relaxed font-sans">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-4 md:space-y-6 order-1 lg:order-2">
          <div class="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
            <img src="@/assets/Heroes.jpg" alt="Our Stall" class="w-full h-48 md:h-64 object-cover">
          </div>
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500 mt-4 md:mt-8">
              <img src="@/assets/HomePage/clients/Sandiaga.jpg" alt="Event 1" class="w-full h-32 md:h-48 object-cover">
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500 mb-4 md:mb-8">
              <img src="@/assets/HomePage/clients/Basuki.jpg" alt="Event 2" class="w-full h-32 md:h-48 object-cover">
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  { 
    title: "Siapa Kita", 
    desc: "Tim pembuat roti yang penuh semangat dan berdedikasi pada seni membuat produk segar dan buatan tangan. Kami memulai dari dapur kecil dan tumbuh menjadi favorit komunitas." 
  },
  { 
    title: "Apa yang Kami Lakukan", 
    desc: "Kami membuat segala sesuatu mulai dari roti klasik hingga kue dan kue khusus yang unik. Setiap item dibuat dengan perhatian terhadap detail." 
  },
  { 
    title: "Bagaimana Kami Melayani", 
    desc: "Kami berkomitmen untuk menggunakan hanya bahan terbaik dan segar, memastikan kualitas dan rasa yang luar biasa dalam setiap item yang keluar dari dapur kami." 
  },
  { 
    title: "Menciptakan Keajaiban", 
    desc: "Kebahagiaan terbesar kami adalah mengubah tepung dan gula sederhana menjadi momen keajaiban dan kebahagiaan sehari-hari untuk Anda dan keluarga Anda." 
  }
];
</script>