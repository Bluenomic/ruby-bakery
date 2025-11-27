<template>
  <section class="relative overflow-hidden py-12 md:py-20 lg:py-28">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="order-2 md:order-1 space-y-6 text-center md:text-left z-10">
          <span class="inline-block py-1 px-3 rounded-full bg-white border border-brand-rose text-brand-gold font-semibold text-xs tracking-widest uppercase mb-2 shadow-sm animate-pulse">
            Must Try!
          </span>
          <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold text-brand-dark leading-tight">
            Discover Our <br/>
            <span class="text-brand-gold">Line of Desserts</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Discover a delightful world of fresh-baked goodness, from artisan breads to custom cakes. Made with love everyday.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <router-link to="/products" class="px-12 py-5 rounded-lg bg-brand-dark text-white hover:bg-brand-gold transition-all font-bold tracking-wide text-center shadow-lg transform hover:-translate-y-1 text-lg">
              View Menu
            </router-link>
          </div>
        </div>

        <div class="order-1 md:order-2 relative">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl opacity-60 -z-10"></div>
          <div class="relative grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" alt="Bread" class="rounded-3xl shadow-2xl w-full h-64 md:h-96 object-cover transform translate-y-12 hover:scale-105 transition duration-500">
            <img src="https://images.unsplash.com/photo-1563729768640-d65d4181380b?q=80&w=800&auto=format&fit=crop" alt="Cake" class="rounded-3xl shadow-2xl w-full h-64 md:h-96 object-cover transform -translate-y-8 hover:scale-105 transition duration-500">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>