<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const show_menu = ref(false)

watch(route, () => {
  show_menu.value = false
})
</script>
<!--TODO: add animations and gradients on mobile menu-->
<template>
  <div class="rcisa-header fixed w-full bg-white z-[8]">
    <div class="container mx-auto flex flex-row items-center justify-between">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="RCISA Logo" srcset="">
      </router-link>
      <div class="rcisa-menu-container">
        <router-link  to="/">Home</router-link>
        <router-link to="/our-story">Our Story</router-link>
      </div>

      <router-link to="/lets-connect" class="rcisa-btn">Plan a visit</router-link>
      <button class="menu-button" @click.prevent="show_menu = true">
        <vue-feather stroke="var(--color-darkBlue-base)" type="menu"></vue-feather>
      </button>
    </div>
  </div>

  <div :class="`mobile-menu gradient-bkg w-full h-[100vh] z-[9] ${show_menu ? 'show-mobile-menu' : null}`">
    <button class="close-button" @click.prevent="show_menu = false">
      <vue-feather stroke="var(--color-white)" type="x"></vue-feather>
    </button>

    <div class="mobile-menu-items w-full flex flex-col gap-[1.6rem]">
      <router-link  to="/">Home</router-link>
      <router-link to="/our-story">Our Story</router-link>
      <router-link to="/lets-connect">Lets Connect</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rcisa-header {
  padding: 1.2rem 0;
  border-radius: 0 0 1.6rem 1.6rem;
  box-shadow: 0 12px 16px -4px #1018281A;


  .rcisa-menu-container {
    display: flex;
    gap: 2rem;

    a {
      padding: 1.2rem .8rem;
      font-size: 1.6rem;
      font-weight: 500;
      font-family: "outfit", serif;
      color: var(--color-darkBlue-base);
      transition: .3s linear;

      &:hover, &.router-link-active {
        color: var(--color-green-base);
      }
    }
  }

  .rcisa-btn {
      font-size: 1.4rem;
      padding: 1rem 1.6rem;
    }

  .menu-button {
    display: none;
    padding: 1.6rem;
  }

  @media (max-width: 991px) {
    border-radius: 0;
    padding: 1.6rem 0;

    .rcisa-menu-container, .rcisa-btn {
      display: none;
    }

    .menu-button {
      display: block;
    }
  }
}

.mobile-menu {
  padding: 2.4rem;
  display: none;
  flex-direction: column;
  gap: 3.2rem;
  align-items: flex-end;
  position: fixed!important;

  .close-button {
    padding: 1.6rem;
  }

  .mobile-menu-items {
    a {
      padding: 2.4rem;
      text-align: center;
      font-family: "Outfit", serif;
      font-size: 3rem;
      font-weight: 700;
      line-height: 3.8rem;
      color: #919191;

      &.router-link-active {
        color: var(--color-white);
      }
    }
  }

  &.show-mobile-menu {
    display: flex;
  }
}
</style>
