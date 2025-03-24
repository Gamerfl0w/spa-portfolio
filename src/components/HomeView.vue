<template>
  <div class="flex gap-10 h-full w-full sm:w-auto 2xl:w-[60%] flex-col justify-center items-center z-50">
    <div>
      <h1 class="break-words text-[35px] text-center sm:text-[55px] lg:text-[55px] 2xl:text-[65px] font-bold uppercase name">Joshua Luis De Chavez</h1>
      <div class="flex flex-col">
        <p class="text-xl 2xl:text-3xl font-normal opacity-90 ml-3 text-center w-full">Full Stack Developer</p>
        <div class="w-full flex items-center justify-center gap-3">
          <a href="https://www.facebook.com" target="_blank"><svg-icon size="36" style="opacity: 0.7;" type="mdi" :path="fb"></svg-icon></a>
          <a href="https://github.com/Gamerfl0w" target="_blank"><svg-icon size="36" style="opacity: 0.7;" type="mdi" :path="git"></svg-icon></a>
          <a href="https://www.linkedin.com/in/joshua-luis-de-chavez-a51560289/" target="_blank"><svg-icon size="36" style="opacity: 0.7;" type="mdi" :path="linkedIn"></svg-icon></a>
        </div>
      </div>
    </div>
  
    <div class="w-full p-10 sm:p-0 sm:w-[697px] 2xl:w-[824px] opacity-95 ml-3 text-center">
      <p class="text-lg 2xl:text-2xl">Dedicated programmer with an experience and academic foundation in
        HTML, CSS, JavaScript, Vue, PHP, and MySQL. I am committed to continuous learning and staying up-to-date with emerging technologies in the dynamic field of programming.
      </p>
      <div class="flex items-center justify-center gap-5 mt-10">
          <p class="flex justify-center items-center gap-5"><svg-icon size="36" style="opacity: 0.7;" type="mdi" :path="email"></svg-icon>jluisdechavez@gmail.com</p> 
          <p class="font-bold">|</p>
          <p class="flex justify-center items-center gap-5"><svg-icon size="36" style="opacity: 0.7;" type="mdi" :path="phone"></svg-icon>0995 957 7900</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFacebook, mdiGithub, mdiLinkedin, mdiEmail, mdiPhone } from '@mdi/js'

export default {
	components: {
		SvgIcon
	},

	data() {
		return {
	  		fb: mdiFacebook,
        git: mdiGithub,
        linkedIn: mdiLinkedin,
        email: mdiEmail,
        phone: mdiPhone
		}
	}
}
</script>
