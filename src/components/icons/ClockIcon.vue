<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 20
  }
})
</script>

<template>
<svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1169)">
<path d="M10 4.99996V9.99996L13.3334 11.6666M18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 5.39759 5.39765 1.66663 10 1.66663C14.6024 1.66663 18.3334 5.39759 18.3334 9.99996Z" stroke="#8899AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_469_1169">
<rect :width="size" :height="size" fill="white"/>
</clipPath>
</defs>
</svg>
</template>

<style scoped>

</style>
