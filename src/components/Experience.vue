<template>
    <div class="w-full sm:w-[70%] flex flex-col justify-center items-center sm:p-0 p-3">
        <div class="sm:mt-16 w-full">
            <p class="uppercase text-[50px] sm:text-[80px] font-bold text">Work Experience</p>
        </div>
        <div class="flex flex-wrap gap-5 flex-col">
            <div v-for="experience in experiences" :key="experience.title" class="opacity-90 pl-10">  
                <h3 class="text-xl 2xl:text-3xl my-5">{{ experience.date }}</h3>
                <h3 class="text-xl 2xl:text-3xl font-semibold">{{ experience.title }}</h3>
                <p class="text-lg 2xl:text-2xl ml-3 whitespace-pre-line">{{ experience.description }}</p>
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
            experiences: [
                { date: "February 26, 2024 - April 19, 2025", title: "JE310 Solutions Inc.",  description: `Updated and maintaned a delivery app system for Max's.
                    Mainly focusing on API implementation and rider's whereabouts, such as, tracking a rider using google maps, using rider's geolocation to determine if an order can be set as delivered. 
                    \n Incorporated complex reporting of data in multiple systems, for example, Heatmap Reports: Show different color intensities on Google Maps based on the given data, Sales Report:
                    Summarize the income of a store or company, Trip Reports: View store rankings, order details, and rider performance. All reports can be exported to excel, pdf, csv. 
                    They also have their respective graphs and filters, inluding, date, store, branch, and hub.
                    \n Optimized an API response where an API call took from 30 seconds to less than 2 seconds. 
                    Implemented multiple APIs that does CRUD(Create, Read, Update, Delete) operations, and send mobile notifications using firebase cloud messaging.` },
                { date: "", title: "", description: "" },
            ]
        }
    },
}

</script>
