<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import AboutMe from '@/components/AboutMe.vue';

onMounted(() => {
    if (window.lucide) window.lucide.createIcons();
});
</script>

<template>
    <div>
        <Header title="About Me "/>
        <AboutMe />
    </div>
</template>