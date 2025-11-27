<template>
  <section class="relative overflow-hidden py-12 md:py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="order-2 md:order-1 space-y-6 text-center md:text-left z-10">
          <span class="inline-block py-1 px-3 rounded-full bg-white border border-brand-rose text-brand-gold font-semibold text-xs tracking-widest uppercase mb-2 shadow-sm animate-pulse">
            Must Try!
          </span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight">
            Discover Our <br/>
            <span class="text-brand-gold">Line of Desserts</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Discover a delightful world of fresh-baked goodness, from artisan breads to custom cakes. Made with love everyday.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <router-link to="/products" class="bg-brand-gold text-white px-8 py-4 rounded-lg hover:bg-brand-goldHover transition-all transform hover:-translate-y-1 shadow-lg font-bold tracking-wide text-center">
              BUY NOW
            </router-link>
            <router-link to="/products" class="px-8 py-4 rounded-lg border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all font-bold tracking-wide text-center">
              View Menu
            </router-link>
          </div>
        </div>

        <div class="order-1 md:order-2 relative">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-60 -z-10"></div>
          <div class="relative grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" alt="Bread" class="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover transform translate-y-8 hover:scale-105 transition duration-500">
            <img src="https://images.unsplash.com/photo-1563729768640-d65d4181380b?q=80&w=600&auto=format&fit=crop" alt="Cake" class="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover transform -translate-y-4 hover:scale-105 transition duration-500">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>