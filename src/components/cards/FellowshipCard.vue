<script setup lang="ts">
defineProps({
  reverse: {
    type: Boolean,
    default: false,
    required: false,
  }
})
</script>

<template>
  <div :class="`flex gap-[3.2rem] ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col`">
    <img src="@/assets/placeholder-fellowship.png" alt="" srcset="">
    <div class="fellowship-blurb">
      <p class="outfit-xs-bold text-[var(--color-darkBlue-base)] mb-[1.6rem]">Fellowship type</p>
      <p class="outfit-xl-regular mb-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>
      <router-link to="/" class="rcisa-btn alt-rcisa-btn">
        <span class="outfit-sm-medium">Learn more</span>
        </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fellowship-blurb {
  .rcisa-btn {
    padding: 1rem 1.6rem;
  }
}
</style>
