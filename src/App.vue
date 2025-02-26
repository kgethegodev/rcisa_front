<script setup lang="ts">
import { RouterView } from 'vue-router'
import RCISAHeader from '@/components/RCISAHeader.vue'
import RCISAFooter from '@/components/RCISAFooter.vue'
</script>

<template>
  <main>
    <RCISAHeader />
  <RouterView />
  </main>

  <RCISAFooter/>
</template>

<style scoped>
</style>
