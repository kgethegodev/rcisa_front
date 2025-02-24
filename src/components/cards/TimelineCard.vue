<script setup lang="ts">

</script>

<template>
  <div class="timeline-card p-[2.4rem] flex flex-col gap-[2rem]">
    <div class="flex flex-row gap-[2rem] items-center">
      <div class="bg-[var(--color-warning-base)] p-[.8rem] rounded-[100%] w-[4rem] h-[4rem]">
        <vue-feather type="calendar" stroke="var(--color-white)"/>
      </div>
      <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Date</p>
    </div>

    <p class="sm:outfit-xl-regular outfit-sm-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis.</p>
  </div>
</template>

<style scoped lang="scss">
.timeline-card {
  border: .1rem solid var(--color-darkBlue-base);
  border-radius: 2.4rem;
}
</style>
