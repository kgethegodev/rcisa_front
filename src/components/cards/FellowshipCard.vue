<script setup lang="ts">
export interface Fellowship {
  title: string,
  content: string
}

defineProps<{
  reverse?: boolean,
  fellowship: Fellowship
}>()
</script>

<template>
  <div :class="`flex gap-[3.2rem] ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col`">
    <img src="@/assets/placeholder-fellowship.png" alt="" srcset="">
    <div class="w-full">
      <p class="outfit-xs-bold text-[var(--color-darkBlue-base)] mb-[1.6rem]">{{ fellowship.title }}</p>

      <div v-html="fellowship.content" class="w-full"></div>

    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
