<script setup lang="ts">
defineProps({
  date: String,
  blurb: String,
})
</script>

<template>
  <div class="timeline-card p-[2.4rem] flex flex-col gap-[2rem] min-h-[27rem]">
    <div class="flex flex-row gap-[2rem] items-center">
      <div class="bg-[var(--color-warning-base)] p-[.8rem] rounded-[100%] w-[4rem] h-[4rem]">
        <vue-feather type="calendar" stroke="var(--color-white)"/>
      </div>
      <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">{{ date }}</p>
    </div>

    <p class="outfit-xl-regular">{{ blurb }}</p>
  </div>
</template>

<style scoped lang="scss">
.timeline-card {
  border: .1rem solid var(--color-darkBlue-base);
  border-radius: 2.4rem;
}
</style>
