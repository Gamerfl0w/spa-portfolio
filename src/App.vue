
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
  <div class="flex gap-10">
    <aside class="w-[25%] hidden md:flex items-center justify-center font-bold">
      <ul class="flex flex-col gap-4 fixed">
        <router-link active-class="active" to="/" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Home</router-link>
        <router-link active-class="active" to="/skills" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Skills</router-link>
        <router-link active-class="active" to="/projects" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Projects</router-link>
      </ul>
    </aside>

    <main class="sm:h-screen w-full py-20">
      <div class="flex items-start justify-center h-full flex-col">
        <router-view />
      </div>
    </main>

    <aside class="hidden md:flex flex-shrink-0 h-full right-[-200px] 2xl:right-[-310px] fixed">
      <img class="animate__animated animate__fadeIn" src="./assets/maidenless.png" alt="">
    </aside>

    <footer class="fixed sm:hidden bottom-0 w-full bg-[#f7f7f7] p-2">
      <ul class="flex gap-5 justify-center items-center">
        <router-link active-class="active" to="/" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Home</router-link>
        <router-link active-class="active" to="/skills" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Skills</router-link>
        <router-link active-class="active" to="/projects" class="cursor-pointer opacity-80 hover:opacity-100 uppercase text-base 2xl:text-2xl">Projects</router-link>
      </ul>
    </footer>
  </div>
</template>

<style>
  html{
      overflow-y: overlay;
  }
  .name {
  display: inline-block;
  margin: 0 0.5rem;
  opacity: 0.8;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}

  .active{
    opacity: 1;
    text-decoration: underline;
  }

</style>

