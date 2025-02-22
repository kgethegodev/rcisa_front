<script setup lang="ts"></script>

<template>
  <div class="sermon-card flex flex-col gap-[2.4rem]">
    <img src="@/assets/placeholder-1.png" alt="" class="max-w-full" />
    <div class="flex flex-col gap-[.8rem] sermon-card-info">
      <p class="text-[var(--color-green-base)] outfit-md-semibold">November 16, 2024</p>
      <p class="text-[var(--color-darkBlue-base)] outfit-xs-bold">
        Pretoria | Sunday Service with Rev
      </p>
    </div>
    <div class="sermon-link-container">
      <a href="#" class="sermon-link gap-[.8rem]">
        Watch Video
        <vue-feather type="external-link"></vue-feather>
      </a>
    </div>
  </div>
</template>

<style scoped>
.sermon-card {
  .sermon-card-info {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      //white-space: nowrap;
    }
  }

  .sermon-link {
    display: inline-flex;
    padding: 0.8rem 1.6rem;
    border-radius: 5rem;
    border: 0.1rem solid var(--color-darkBlue-base, #113357);
    box-shadow: 0 0.1rem 0.2rem 0 rgba(16, 24, 40, 0.05);
    align-items: center;
    justify-content: center;
    color: var(--color-darkBlue-base);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }
}
</style>
