<script setup lang="ts">
import { reactive } from 'vue'
import ReverendCard from '@/components/cards/ReverendCard.vue'
import BranchCard from '@/components/cards/BranchCard.vue'

const form = reactive({
  name: '',
  email: '',
  phone_number: '',
  message: '',
})
</script>

<template>
  <div class="bg-[var(--color-darkBlue-700)] sm:pb-[9.6rem] pb-[4.8rem] pt-[15.6rem]">
    <div class="container mx-auto flex flex-col gap-[4rem]">
      <h1 class="text-white">
        <span>We’d love to hear from you.</span>
        Get in touch with us
      </h1>

      <div class="flex gap-[4.8rem] lg:flex-row flex-col">
        <img src="@/assets/placeholder-contact-us.png" class="lg:block hidden" />
        <div class="flex flex-col gap-[3.2rem]">
          <p class="text-white outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>

          <form action="" class="flex flex-col gap-[3.2rem] outfit-md-regular">
            <div class="flex-col flex gap-[.6rem]">
              <label for="name" class="outfit-sm-medium text-white flex-col flex gap-[.6rem] relative">Name
                <input type="text" name="name" id="name" placeholder="Name" autocomplete="name" v-model="form.name" class="has-error">
                <vue-feather type="alert-circle" stroke="var(--color-error-50)" class="absolute right-[1.6rem] top-[50%]"/>
              </label>
              <p class="error-message outfit-xs-medium text-[var(--color-error-50)]">This field cannot be empty.</p>
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="email" class="outfit-sm-medium text-white">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" autocomplete="email" v-model="form.email">
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="phone_number" class="outfit-sm-medium text-white">Phone number</label>
              <input type="tel" name="phone_number" id="phone_number" placeholder="+27 12 345 6789" autocomplete="tel" v-model="form.phone_number">
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="message" class="outfit-sm-medium text-white">How can we help?</label>
              <textarea name="message" id="message" v-model="form.message" placeholder="Tell us a little about yourself and how we can help." class="has-error"></textarea>
              <p class="error-message outfit-xs-medium text-[var(--color-error-50)]">This field cannot be empty.</p>
            </div>

            <div class="submit-block">
              <button type="submit" class="rcisa-btn sm:w-auto w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="gradient-bkg sm:py-[9.6rem] py-[4.8rem]">
    <div class="container mx-auto flex flex-col gap-[4rem]">
      <h1 class="text-white">
        <span class="alt">Vafundisi vedu</span>
        Meet our reverends
      </h1>

      <div class="grid sm:grid-cols-3 gap-[3.2rem]">
        <reverend-card />
        <reverend-card />
        <reverend-card />
      </div>
    </div>
  </div>

  <div class="container flex flex-col mx-auto gap-[4rem]  sm:py-[9.6rem] py-[4.8rem]">
    <h1>
      <span>We would love to meet you!</span>
      VISIT OUR BRANCHES
    </h1>

    <div class="grid sm:grid-cols-3 gap-[3.2rem]">
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
    </div>
  </div>
</template>

<style scoped>
form {
  input, textarea {
    @apply outline-none py-[1.2rem] px-[1.6rem] rounded-[.6rem] border border-[var(--color-darkBlue-50)];
    color: var(--color-white);
    transition: .2s linear;

    &::placeholder {
      @apply text-[var(--color-darkBlue-30)];
    }

    &:focus {
      @apply border-[var(--color-darkBlue-20)];
    }

    &.has-error {
      border-color: var(--color-error-50);
    }
  }
  textarea {
    @apply h-[19.2rem] resize-none;
  }
}
</style>
