<template>
    <div class="w-full sm:w-[70%] flex flex-col justify-center items-center sm:p-0 p-3">
        <div class="sm:mt-16 w-full">
            <p class="uppercase text-[50px] sm:text-[80px] font-bold text">Work Experience</p>
        </div>
        <div class="flex flex-wrap gap-5 flex-col pb-5">
            <div v-for="experience in experiences" :key="experience.title" class="opacity-90 pl-10">  
                <div class="flex items-center">
                    <a :href="experience.link" target="_blank" class="text-xl 2xl:text-3xl font-semibold">{{ experience.title }}</a>
                    <span class="text-xl 2xl:text-3xl my-5 ml-3 opacity-70">({{ experience.timePeriod }})</span>
                </div>
                <p class="text-lg 2xl:text-2xl ml-3">{{ experience.description }}</p>
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
                { 
                    timePeriod: "Actively working", 
                    title: "VantageBP", 
                    description: `Collaborated with Senior Software engineer and DevOps 
                        engineer to extend existing systems using Figma, Ember js, and MongoDB. Identify and resolve multiple issues involving 
                        APIs and front-end. While ensuring the design and cross-browser compatibility with browsers such as Chrome, Firefox, Edge, 
                        and Brave.`, 
                    link: "https://www.vantagebp.com/" 
                },
                { 
                    timePeriod: "2 years", 
                    title: "JE310 Solutions Inc.",  
                    description: `Updated and maintaned a delivery app system for Max's.
                        Mainly focusing on API implementation and rider's whereabouts, such as, tracking a rider using google maps, using rider's geolocation to determine if an order can be set as delivered. 
                        Was responsible for maintaining a website hosted to AWS. Troubleshooting was done through the Linux operating system.
                        Incorporated complex reporting of data in multiple systems, for example, Heatmap Reports: Show different color intensities on Google Maps based on the given data, Sales Report:
                        Summarize the income of a store or company, Trip Reports: View store rankings, order details, and rider performance. All reports can be exported to excel, pdf, csv. 
                        They also have their respective graphs and filters, including, date, store, branch, and hub.
                        Optimized an API response where an API call took from 30 seconds to less than 2 seconds. 
                        Implemented multiple APIs that does CRUD(Create, Read, Update, Delete) operations, and send mobile notifications using firebase cloud messaging. `, 
                    link: "https://je310solution.com/" 
                },
            ]
        }
    },
}

</script>
