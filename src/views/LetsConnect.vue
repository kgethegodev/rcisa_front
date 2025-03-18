<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'
import ReverendCard from '@/components/cards/ReverendCard.vue'
import BranchCard from '@/components/cards/BranchCard.vue'
import apiService from '@/services/api'

const form = reactive({
  name: '',
  email: '',
  phone_number: '',
  message: '',
})

const errors: any= ref("")
const success: any = ref("")

const submit = async () => {
  errors.value = ""
  success.value = ""
  try {
    const res: {result: any} = await apiService.post('/visit', form)
    form.name = ''
    form.email = ''
    form.phone_number = ''
    form.message = ''

    success.value = `Thank you ${res.result.visitor[0].name} for reaching out to us. We will get back to you soon.`
  } catch (error: any) {
    errors.value = JSON.parse(error.response.data.error)
  } finally {
    window.scrollTo(0, 0)
  }
  
}
</script>

<template>
  <div class="bg-[var(--color-darkBlue-700)] sm:pb-[9.6rem] pb-[4.8rem] pt-[15.6rem]">
    <div class="container mx-auto flex flex-col gap-[4rem]">
      <h1 class="text-white flex">
        <span>We’d love to hear from you.</span>
        Get in touch with us
      </h1>

      <div class="flex gap-[4.8rem] lg:flex-row flex-col">
        <img src="@/assets/placeholder-contact-us.png" class="lg:block hidden" />
        <div class="flex flex-col gap-[3.2rem]">
          <p class="text-white outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>

          <p class="text-[var(--color-green-base)] outfit-md-regular" v-if="success">{{ success }}</p>
          <form @submit.prevent="submit" class="flex flex-col gap-[3.2rem] outfit-md-regular">
            <div class="flex-col flex gap-[.6rem]">
              <label for="name" class="outfit-sm-medium text-white flex-col flex gap-[.6rem] relative">Name
                <input type="text" name="name" id="name" placeholder="Name" autocomplete="name" v-model="form.name" :class="{'has-error': errors.name}">
                <vue-feather type="alert-circle" stroke="var(--color-error-50)" class="absolute right-[1.6rem] top-[50%]" v-if="errors.name"/>
              </label>
              <p v-if="errors.name" class="error-message outfit-xs-medium text-[var(--color-error-50)]">{{ errors.name }}</p>
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="email" class="outfit-sm-medium text-white flex-col flex gap-[.6rem] relative">Email
                <input type="email" name="email" id="email" placeholder="Email" autocomplete="email" v-model="form.email" :class="{'has-error': errors.email}">
                <vue-feather type="alert-circle" stroke="var(--color-error-50)" class="absolute right-[1.6rem] top-[50%]" v-if="errors.email"/>
              </label>
              <p v-if="errors.email" class="error-message outfit-xs-medium text-[var(--color-error-50)]">{{ errors.email }}</p>
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="phone_number" class="outfit-sm-medium text-white flex-col flex gap-[.6rem] relative">Phone number
                <input type="tel" name="phone_number" id="phone_number" placeholder="+27 12 345 6789" autocomplete="tel" v-model="form.phone_number" :class="{'has-error': errors.phone_number}">
                <vue-feather type="alert-circle" stroke="var(--color-error-50)" class="absolute right-[1.6rem] top-[50%]" v-if="errors.phone_number"/>
              </label>

              <p v-if="errors.phone_number" class="error-message outfit-xs-medium text-[var(--color-error-50)]">{{ errors.phone_number }}</p>
            </div>

            <div class="flex-col flex gap-[.6rem]">
              <label for="message" class="outfit-sm-medium text-white">How can we help?</label>
              <textarea name="message" id="message" v-model="form.message" placeholder="Tell us a little about yourself and how we can help." :class="{'has-error': errors.message}"></textarea>
              <p v-if="errors.message" class="error-message outfit-xs-medium text-[var(--color-error-50)]">This field cannot be empty.</p>
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
      <h1 class="text-white flex">
        <span class="alt">Vafundisi vedu</span>
        Meet our reverends
      </h1>

      <div class="grid sm:grid-cols-2 gap-[3.2rem]">
        <reverend-card />
        <reverend-card />
        <reverend-card />
        <reverend-card />
      </div>
    </div>
  </div>

  <div class="container flex flex-col mx-auto gap-[4rem]  sm:py-[9.6rem] py-[4.8rem]">
    <h1 class="flex">
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
