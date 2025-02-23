<script setup lang="ts">
import type { IEvent } from '../../../types/Event.type.ts'
import { onMounted, reactive } from 'vue'

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
  <div class="event-card p-[2.4rem] bg-[var(--color-darkBlue-base)] flex flex-col gap-[1.6rem]">
    <div class="flex flex-row sm:gap-[3.2rem] gap-[1.6rem]">
      <p class="event-date anton-md-regular text-white">
      <span class="text-[var(--color-success-base)]">{{rcisa_event.month}}</span>
      {{rcisa_event.day}}
    </p>
      <div class="flex flex-col gap-[.8rem]">
        <p class="sm:outfit-xs-bold outfit-lg-bold text-white">{{event.title}}</p>
        <p class="outfit-md-regular text-[var(--color-darkBlue-10)]">{{event.host ? `Hosted By: ${event.host}` : 'Check WhatsApp groups or for more information'}}</p>
      </div>
    </div>
    <div class="flex flex-row flex-wrap gap-[.8rem]">
          <div class="event-detail-pill flex flex-row gap-[.4rem] py-[.4rem] px-[1rem] bg-[var(--color-darkBlue-50)] rounded-[1.6rem] items-center">
            <vue-feather size="2rem" stroke="var(--color-darkBlue-30)" type="map-pin"></vue-feather>
            <p class="text-white sm:outfit-md-medium outfit-sm-medium">Polokwane Branch</p>
          </div>

          <div class="event-detail-pill flex flex-row gap-[.4rem] py-[.4rem] px-[1rem] bg-[var(--color-darkBlue-50)] rounded-[1.6rem] items-center">
            <vue-feather size="2rem" stroke="var(--color-darkBlue-30)" type="clock"></vue-feather>
            <p class="text-white sm:outfit-md-medium outfit-sm-medium">09:00 - 0:30</p>
          </div>

          <div class="event-detail-pill flex flex-row gap-[.4rem] py-[.4rem] px-[1rem] bg-[var(--color-darkBlue-50)] rounded-[1.6rem] items-center">
            <vue-feather size="2rem" stroke="var(--color-darkBlue-30)" type="calendar"></vue-feather>
            <p class="text-white sm:outfit-md-medium outfit-sm-medium">MAR 30 - 31</p>
          </div>
        </div>
  </div>
</template>

<style scoped lang="scss">
.event-card {
  border: .1rem solid var(--color-darkBlue-50);
  border-radius: 2.4rem;

  .event-date {
    text-transform: uppercase;
    text-align: right;
    font-size: 4rem;

    span {
      font-family: "Outfit", sans-serif;
      display: block;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 24px;
    }
  }
}
</style>
