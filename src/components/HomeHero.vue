<template>
  <section class="w-full min-h-[600px] bg-[#FFF5F0] grid grid-cols-1 md:grid-cols-2">
    <div class="relative w-full h-64 md:h-full overflow-hidden">
      <img 
        src="../assets/HomePage/HeroBG.jpg" 
        alt="Assorted Breads and Cakes" 
        class="w-full max-h-screen object-cover"
      />
    </div>

    <div class="flex flex-col justify-center px-8 md:px-16 py-12 space-y-6">
      <span class="text-sm font-semibold tracking-widest uppercase text-gray-500">
        Must Try!
      </span>
      
      <h1 class="text-4xl md:text-6xl font-serif font-bold text-yellow-700 leading-tight">
        Discover Our <br /> Line of Desserts
      </h1>
      
      <p class="text-gray-600 text-lg leading-relaxed max-w-md">
        Discover a delightful world of fresh-baked goodness, from artisan breads to custom cakes and everything in between.
      </p>
      
      <div class="pt-4">
        <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded shadow-md transition duration-300 uppercase text-sm tracking-wide">
          Buy Now
        </button>
      </div>
    </div>
  </section>
</template>