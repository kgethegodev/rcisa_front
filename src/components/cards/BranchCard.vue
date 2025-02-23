<script setup lang="ts">

</script>

<template>
  <div class="branch-card rounded-[2.4rem] sm:p-[2.4rem] p-[1.6rem] flex flex-col sm:gap-[2rem] gap-[1.6rem]">
    <div class="flex flex-row justify-between items-center">
      <p class="outfit-xl-bold text-[var(--color-darkBlue-base)]">Branch Name</p>
      <router-link to="/" class="branch-card-link">
        <vue-feather stroke="var(--color-white)" type="chevron-right"></vue-feather>
      </router-link>
    </div>

    <div class="flex flex-row gap-[.8rem]">
      <div class="min-w-[2.4rem]">
        <vue-feather stroke="var(--color-darkBlue-40)" type="map"></vue-feather>
      </div>
      <p class="outfit-md-regular text-[var(--color-darkBlue-base)]">234 Ben Schoeman, Pretoria Central, Gauteng, 012</p>
    </div>

    <div class="flex flex-row gap-[.8rem]">
      <div class="min-w-[2.4rem]">
        <vue-feather stroke="var(--color-darkBlue-40)" type="phone"></vue-feather>
      </div>
      <p class="outfit-md-regular text-[var(--color-darkBlue-base)]">+27 12 345 6789</p>
    </div>

    <div class="flex flex-row gap-[.8rem]">
      <div class="min-w-[2.4rem]">
        <vue-feather stroke="var(--color-darkBlue-40)" type="clock"></vue-feather>
      </div>
      <p class="outfit-md-regular text-[var(--color-darkBlue-base)]">Sundays 09 am - 11 am</p>
    </div>
  </div>
</template>

<style scoped>
.branch-card {
  border: solid 0.1rem var(--color-darkBlue-base);

  .branch-card-link {
    background: var(--color-green-base);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s linear;

    &:hover {
      background: var(--color-darkBlue-base);
    }
  }
}
</style>
