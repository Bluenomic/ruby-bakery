<template>
  <section class="relative overflow-hidden py-12 md:py-20 lg:py-28">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div class="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left z-10">
          <span class="inline-block py-1.5 px-3 md:py-2 md:px-4 rounded-full bg-white border border-brand-rose text-brand-gold font-semibold text-xs md:text-sm tracking-widest uppercase mb-1 md:mb-2 shadow-sm animate-pulse">
            Must Try!
          </span>
          <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-brand-dark leading-tight">
            Temukan Aneka <br/>
            <span class="text-brand-gold text-3xl md:text-5xl lg:text-7xl">Roti & Kue Kami</span>
          </h1>
          <p class="text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Nikmati kelezatan roti dan kue buatan tangan yang segar setiap hari, dibuat dengan bahan berkualitas tinggi dan cinta untuk setiap gigitan.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 md:pt-4">
            <router-link to="/products" class="px-8 py-3 md:px-12 md:py-5 rounded-lg bg-brand-dark text-white hover:bg-brand-gold transition-all font-bold tracking-widest uppercase text-center shadow-lg transform hover:-translate-y-1 text-base md:text-lg">
              Lihat Menu
            </router-link>
          </div>
        </div>

        <div class="order-1 md:order-2 relative">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-60 -z-10"></div>
          <div class="relative grid grid-cols-2 gap-3 md:gap-6">
            <img src="@/assets/Heroes.jpg" alt="Bread" class="rounded-2xl md:rounded-3xl shadow-2xl w-full h-40 md:h-96 object-cover transform translate-y-6 md:translate-y-12 hover:scale-105 transition duration-500">
            <img src="@/assets/HomePage/HeroBG.jpg" alt="Cake" class="rounded-2xl md:rounded-3xl shadow-2xl w-full h-40 md:h-96 object-cover transform -translate-y-4 md:-translate-y-8 hover:scale-105 transition duration-500">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>