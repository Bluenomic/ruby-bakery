<template>
  <nav class="w-full bg-pink-100 px-6 py-4 md:px-12 flex justify-between items-center shadow-sm">
    <div class="flex items-center gap-2">
    <img src="../assets/Logo Ruby.png" alt="Logo Ruby" class="max-h-10">
    <span class="text-2xl font-bold text-gray-800 tracking-wide">RUBY</span>
    </div>

    <ul class="md:flex space-x-8 font-medium text-gray-700">
      <li class="hover:text-purple-700 cursor-pointer transition">Home</li>
      <li class="hover:text-purple-700 cursor-pointer transition">Product</li>
      <li class="hover:text-purple-700 cursor-pointer transition">About</li>
      <li class="hover:text-purple-700 cursor-pointer transition">Contact</li>
    </ul>

    <button class="md:hidden text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </nav>
</template>