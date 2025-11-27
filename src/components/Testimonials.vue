<template>
  <section class="py-24 bg-brand-pink overflow-hidden">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-12">
      <h2 class="text-4xl md:text-5xl font-bold text-brand-dark text-center mb-16">Loved by Our Clients</h2>
      
      <div class="relative max-w-5xl mx-auto">
        <button @click="prev" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white hover:bg-brand-gold hover:text-white text-brand-dark p-4 rounded-full shadow-xl transition focus:outline-none">
          <i data-lucide="chevron-left" class="w-8 h-8"></i>
        </button>
        <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white hover:bg-brand-gold hover:text-white text-brand-dark p-4 rounded-full shadow-xl transition focus:outline-none">
          <i data-lucide="chevron-right" class="w-8 h-8"></i>
        </button>

        <div class="relative h-[450px] md:h-[400px]">
          <transition-group name="fade">
            <div 
              v-for="(client, index) in clients" 
              :key="client.id" 
              v-show="currentSlide === index"
              class="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div class="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl text-center max-w-3xl mx-auto relative">
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-gold text-white p-4 rounded-full shadow-lg">
                  <i data-lucide="quote" class="w-8 h-8"></i>
                </div>

                <div class="mt-8 mb-8">
                  <p class="text-xl md:text-2xl text-gray-600 italic leading-relaxed">"{{ client.quote }}"</p>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-gold mb-4">
                    <img :src="client.image" :alt="client.name" class="w-full h-full object-cover">
                  </div>
                  <h4 class="font-bold text-brand-dark text-xl">{{ client.name }}</h4>
                  <p class="text-base text-gray-500 uppercase tracking-wider font-bold">{{ client.role }}</p>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const currentSlide = ref(0);
const clients = [
  { id: 1, name: "Sandiaga Salahuddin Uno", role: "Public Figure", quote: "Kue Ruby adalah bintang yang menarik perhatian. Rasanya otentik.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Basuki Hadimuljono", role: "Public Figure", quote: "Mitra yang andal serta konsisten dalam menjaga kualitas rasa.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Selvi Ananda", role: "Client", quote: "Mewujudkan kue impian dengan sempurna. Sangat rapi.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
];

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % clients.length;
};

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + clients.length) % clients.length;
};

onUpdated(() => {
   if (window.lucide) window.lucide.createIcons();
});

onMounted(() => {
  if (window.lucide) window.lucide.createIcons();
  setInterval(() => {
    next();
  }, 5000);
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>