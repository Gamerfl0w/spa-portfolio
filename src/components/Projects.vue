<template>
    <div class="w-full sm:w-[70%] flex flex-col justify-center items-center sm:p-0 p-3">
        <div class="sm:mt-16 w-full">
            <p class="uppercase text-[50px] sm:text-[80px] font-bold text">Projects</p>
        </div>
        <div class="flex flex-wrap gap-5 flex-col">
            <div v-for="project in projects" :key="project.title" class="opacity-90 pl-10">  
                <a :href="project.link" target="_blank"  class="text-xl 2xl:text-3xl font-semibold opacity-80 cursor-pointer underline hover:opacity-100">{{ project.title }}</a>
                <p class="text-lg 2xl:text-2xl ml-3">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<style>
  .text {
  display: inline-block;
  margin: 0 0.5rem;
  opacity: 0.8;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.8s; /* don't forget to set a duration! */
}

</style>

<script>
export default {
    data() {
        return {
            projects: [
                {title: "Agie's Cake Shop", description: "Capstone Project from PUP Calauan, where we developed and managed an E-commerce website about selling customizable cakes through pre-ordering. Leveraging a powerful tech stack, featuring Vue.js and Tailwind CSS for an engaging frontend and Laravel for a robust backend. Also integrated Paymongo API to facilitate seamless online payments through Gcash and Maya, enhancing user convenience. Implemented webhook functionality for real-time notification and response handling upon successful payments, ensuring a smooth and efficient customer experience.", link: "https://github.com/Gamerfl0w/agies-cakes-website"},
                {title: "Maquiling Builders Depot Website", description: "As an IT intern at Maquiling Builders Depot, I created a dynamic and user-friendly website. Leveraging MongoDB and Vue.js. Implemented functions such as Create, Read, Update, and Delete (CRUD) operations, ensuring the website's functionality and responsiveness.", link: "https://github.com/Gamerfl0w/mbd-website"},
                {title: "RPG To-Do List", description: "Designed and developed an innovative gamified to-do list application that enhances productivity and task management. Leveraged gamification principles to create an engaging and motivating user experience, resulting in increased task completion rates and improved time management skills.", link: "https://github.com/Gamerfl0w/rpg-todo"},
                {title: "Game Database App", description: "A simple app made with React Native and NativeWind/Tailwind CSS. Users can view game details, search for games, and view screenshots of their favorite games.", link: "https://github.com/Gamerfl0w/game-db-app"}
            ]
        }
    },
}

</script>
