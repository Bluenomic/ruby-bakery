<template>
  <section class="w-full py-16 px-6 md:px-12 bg-white">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
      <p class="text-gray-500">Made with the care that you deserve</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <div class="flex flex-col items-center group">
        <div class="w-full aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src="../assets/HomePage/BreadCollage.jpg" 
            alt="Bread Selection" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800">Bread</h3>
      </div>

      <div class="flex flex-col items-center group">
        <div class="w-full aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src="../assets/HomePage/CakesCollage.png" 
            alt="Custom Cakes" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800">Cakes</h3>
      </div>

      <div class="flex flex-col items-center group">
        <div class="w-full aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src="../assets/HomePage/DessertsCollage.jpg" 
            alt="Sweet Desserts" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-800">Desserts</h3>
      </div>

    </div>
  </section>
</template>