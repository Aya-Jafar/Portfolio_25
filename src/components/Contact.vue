<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const isSubmitted = ref(false);

const submitForm = () => {
  if (name.value && email.value && message.value) {
    isSubmitted.value = true;
    // Simulate a submission process
    setTimeout(() => {
      isSubmitted.value = false;
      name.value = "";
      email.value = "";
      message.value = "";
    }, 3000);
  }
};
</script>

<template>
  <div
    id="contact"
    class="features bg-[url('../src/assets/bg-2.png')] h-[110vh] w-screen text-white bg-cover bg-center flex flex-col items-start font-customFont pb-20"
  >
    <div class="px-20 flex lg:flex-row items-start">
      <div class="flex w-full items-start text-left sm:mt-[10vh]">
        <h1
          class="pl-20 text-[2rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          Contact Me<br />
        </h1>
      </div>
    </div>

    <div class="flex justify-center flex-wrap w-full gap-5 mt-10">
      <!-- Contact Card -->
      <div
        class="card w-full border-[0.01px] border-transparent hover:border-blue-500 lg:w-[80%] lg:h-[70vh] lg:mt-0 bg-[#020911] md:h-[50vh] rounded-[1vw] flex flex-col gap-5 relative overflow-hidden p-20"
      >
        <div
          class="absolute -bottom-10 -left-10 w-[20vw] h-[20vh] bg-blue-500 opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <p class="card-subtitle w-full text-balance">
          Have a question, project idea, or just want to say hi? Drop me a
          message below, and I'll get back to you soon!
        </p>

        <form
          class="flex flex-col gap-4 mt-5 w-full"
          action="https://formspree.io/f/xleyjgkk"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            class="bg-gray-800 text-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            class="bg-gray-800 text-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            class="bg-gray-800 text-white rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            class="bg-[#013fbd] hover:bg-blue-800  transition-all text-white font-bold py-3 rounded-md mt-3 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="w-full bg-[#020911] text-white text-center py-5 mt-10">
    <p class="text-lg font-light">
      &copy; {{ new Date().getFullYear() }} Aya Jafar. All Rights Reserved.
    </p>

    <div class="flex justify-center gap-4 mt-3">
      <a href="https://github.com/Aya-Jafar" target="_blank">
        <img
          src="https://img.icons8.com/ios/50/FFFFFF/github.png"
          alt="GitHub"
          class="w-10 h-10"
        />
      </a>
      <a href="https://www.linkedin.com/in/aya-jafar" target="_blank">
        <img
          src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png"
          alt="LinkedIn"
          class="w-10 h-10"
        />
      </a>
      <a href="mailto:aya.jafar002@gmail.com" target="_blank">
        <img
          src="https://img.icons8.com/ios/50/FFFFFF/email.png"
          alt="email"
          class="w-10 h-10"
        />
      </a>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .features {
    padding-top: 2rem;
  }

  .card-title {
    font-size: 1.2rem;
  }
  .card-subtitle {
    font-size: 1rem;
  }
}

.card-title {
  @apply text-center lg:text-[2rem] md:text-[2rem] font-customFont font-semibold;
}
.card-subtitle {
  @apply text-left font-thin lg:text-[1.8rem] md:text-[1.1rem] sm:text-[2rem];
}
</style>
