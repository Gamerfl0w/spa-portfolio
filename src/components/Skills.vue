<template>
    <div class="w-full sm:w-[70%] h-full flex flex-col justify-center items-center p-3 sm:p-0">
        <p class="uppercase text-[50px] sm:text-[80px] font-bold text flex sm:items-start w-full">Skills</p>
        <div class="flex flex-wrap gap-5 flex-col">
            <div v-for="skill in skills" :key="skill.title" class="opacity-90 pl-10">  
                <h3 class="text-xl 2xl:text-3xl font-semibold">{{ skill.title }}</h3>
                <p class="text-lg 2xl:text-2xl ml-3">{{ skill.description }}</p>
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
            skills: [
                {title: "Programming Languages", description: "C, JavaScript, PHP, C#"},
                {title: "Web Development", description: "HTML, CSS, JavaScript, Tailwind"},
                {title: "Frameworks", description: "Laravel, Vue, Angular, React, React Native"},
                {title: "Database Management", description: "MySQL, Firebase, MongoDB"},
                {title: "Webhooks and APIs", description: "Added PayMongo APIs and Webhooks on an E-commerce project, that provides transactions from popular online payment brands such as GCASH, and Paymaya."},
            ]
        }
    },
}
</script>
