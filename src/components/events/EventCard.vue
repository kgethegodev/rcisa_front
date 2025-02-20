<script setup lang="ts">
import type { IEvent } from '../../../types/Event.type.ts'
import { onMounted, reactive, ref } from 'vue'

const props = defineProps<{event: IEvent}>()

const rcisa_event = reactive({
  month: '',
  day: ''
})

onMounted(() => {
  const date = new Date(props.event.date);
  rcisa_event.month = date.toLocaleString("en-US", { month: "short" });
  rcisa_event.day = String(date.getDate()).padStart(2, '0')
})
</script>

<template>
  <div class="p-[2.4rem] event-card flex flex-row gap-[3.2rem]">
    <p class="anton-md-regular text-[var(--color-warning-base)]">
      {{rcisa_event.day}} <br>
      {{rcisa_event.month}}
    </p>
    <div class="flex flex-col gap-[.8rem]">
      <p class="outfit-xs-bold text-[var(--color-darkBlue-base)]">{{event.title}}</p>
      <p class="outfit-md-regular text-[var(--color-white-90)]">Hosted By: {{event.host}}</p>
      <div class="flex gap-[1.6rem]">
        <div class="flex gap-[.8rem]">

        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
.event-card {
  border: .1rem solid var(--color-darkBlue-base);
  border-radius: 2.4rem;

  .event-date {
    text-transform: uppercase;
  }
}
</style>
