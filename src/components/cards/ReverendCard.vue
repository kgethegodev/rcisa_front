<script setup lang="ts">
</script>

<template>
  <div class="reverend-card">
    <div class="flex flex-col gap-[2.4rem]">
      <img src="@/assets/reverend-placeholder.png" alt="" srcset="" />
      <div class="flex flex-col gap-[1.6rem] text-white">
        <p class="anton-xs-regular">Rev M. Munenerwa</p>
        <p class="outfit-xl-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent
          varius lorem dolor, sed vehicula eros congue vitae.
        </p>
        <div class="flex gap-[.8rem] flex-wrap">
          <a href="tel:+27 12 345 6789" class="pt-[.4rem] px-[1.2rem] flex gap-[.4rem] rounded-[1.6rem] bg-[var(--color-white-20)] text-white outfit-sm-regular items-center">
            <vue-feather type="phone" stroke="var(--color-white)" size="2rem"/>
            +27 12 345 6789
          </a>
          <a href="mailto:email@rcisapta.com" class="pt-[.4rem] px-[1.2rem] flex gap-[.4rem] rounded-[1.6rem] bg-[var(--color-white-20)] text-white outfit-sm-regular items-center">
            <vue-feather type="mail" stroke="var(--color-white)" size="2rem"/>
            email@rcisapta.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
