<script setup lang="ts">
const rcisa_events: IEvent[] = [{
  title: "Vue.js Workshop",
  date: new Date("2025-03-10"),
  host: "Vue Community",
  location: "Cape Town, South Africa",
  start_time: "14:00",
  end_time: "16:30",
},
  {
    title: "Tech Conference 2025",
    date: new Date("2025-04-05"),
    host: "Tech Innovators",
    location: "Johannesburg, South Africa",
    start_time: "09:00",
    end_time: "17:00",
  }];
import type { IEvent } from '../../types/Event.type.ts'
import EventCard from '@/components/events/EventCard.vue'
import { ref } from 'vue'
</script>

<template>
  <div class="home-banner gradient-bkg flex flex-col justify-center">
    <div class="container mx-auto flex flex-col gap-[4rem]">
      <p class="anton-2xl-regular text-white">REFORMED CHURCH INTERNATIONAL&nbsp;SOUTH&nbsp;AFRICA</p>
      <div class="text-white outfit-lg-regular">
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
        <p>Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
      </div>

      <div class="flex flex-row gap-[1.6rem]">
        <router-link to="/events" class="rcisa-btn">Plan a visit</router-link>
        <router-link to="/events" class="rcisa-btn alt-rcisa-btn">Our Story</router-link>
      </div>
    </div>
  </div>

  <div class="py-[9.6rem]">
    <div class="container flex flex-col mx-auto gap-[4rem]">
      <h1>
        <span>Exciting things to look forward to</span>
        UPCOMING EVENTS
      </h1>

      <div class="home-events-card-row">
        <event-card :event v-for="event in rcisa_events" />
      </div>
    </div>
  </div>
</template>
 <style lang="scss">
 .home-banner {
   height: 100dvh;
 }

 .home-events-card-row {
   display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
 }
 </style>
