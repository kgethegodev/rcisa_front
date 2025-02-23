<script setup lang="ts">
import BranchCard from '@/components/cards/BranchCard.vue'

const rcisa_events: IEvent[] = [
  {
    title: 'Vue.js Workshop',
    date: new Date('2025-03-10'),
    host: 'Vue Community',
    location: 'Cape Town, South Africa',
    start_time: '14:00',
    end_time: '16:30',
  },
  {
    title: 'Tech Conference 2025',
    date: new Date('2025-04-05'),
    host: 'Tech Innovators',
    location: 'Johannesburg, South Africa',
    start_time: '09:00',
    end_time: '17:00',
  },
  {
    title: 'Tech Conference 2025',
    date: new Date('2025-04-05'),
    host: 'Tech Innovators',
    location: 'Johannesburg, South Africa',
    start_time: '09:00',
    end_time: '17:00',
  },

  {
    title: 'Tech Conference 2025',
    date: new Date('2025-04-05'),
    host: 'Tech Innovators',
    location: 'Johannesburg, South Africa',
    start_time: '09:00',
    end_time: '17:00',
  },
]
import type { IEvent } from '../../types/Event.type.ts'
import EventCard from '@/components/cards/EventCard.vue'
import { ref } from 'vue'
import SermonCard from '@/components/cards/SermonCard.vue'
</script>

<template>
  <div class="home-banner">
    <div class="home-banner-content">
      <div class="container mx-auto flex flex-col gap-[4rem]">
        <p class="anton-2xl-regular text-white">
          REFORMED CHURCH INTERNATIONAL&nbsp;SOUTH&nbsp;AFRICA
        </p>
        <div class="text-white outfit-lg-regular">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent
            varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus
            id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur
            quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum.
            Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis.
            Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce
            consectetur quis.
          </p>
        </div>
        <div class="flex flex-row gap-[1.6rem]">
          <router-link to="/events" class="rcisa-btn">Plan a visit</router-link>
          <router-link to="/events" class="rcisa-btn alt-rcisa-btn">Our Story</router-link>
        </div>
      </div>
    </div>

    <video
      src="@/assets/videos/5ed549ba96ef942b810c471cf43f099ebd224380.mp4"
      autoplay
      loop
      preload="auto"
      muted
    />
  </div>

  <div class="bg-[var(--color-darkBlue-700)]">
    <div class="container flex flex-col mx-auto gap-[4rem] py-[9.6rem]">
      <h1 class="text-white">
        <span>Exciting things to look forward to</span>
        Upcoming Events
      </h1>

      <div class="home-events-card-row">
        <event-card :event v-for="event in rcisa_events" />
      </div>
    </div>
  </div>

  <div class="gradient-bkg">
    <div class="container mx-auto py-[9.6rem] flex flex-col gap-[4rem]">
      <h1 class="text-white">
        <span>One big family</span>
        Our Story
      </h1>

      <div class="flex gap-[4.8rem]">
        <div class="text-white">
          <p class="mb-[3.2rem] outfit-xl-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent
            varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus
            id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur
            quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum.
            Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis.
            Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce
            consectetur quis.
          </p>
          <p class="mb-[3.2rem] outfit-xl-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent
            varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus
            id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur
            quis.
          </p>

          <router-link to="/our-story" class="rcisa-btn">Our Story</router-link>
        </div>

        <img src="@/assets/placeholder.png" alt="" srcset="" />
      </div>
    </div>
  </div>

  <div class="container flex flex-col mx-auto gap-[4rem] py-[9.6rem]">
    <h1>
      <span>We would love to meet you!</span>
      VISIT OUR BRANCHES
    </h1>

    <div class="branches-container">
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
      <branch-card />
    </div>
  </div>

  <div class="container flex flex-col mx-auto gap-[4rem] py-[9.6rem]">
    <h1>
      <span>Hear the word</span>
      SERMONS
    </h1>

    <div class="sermons-container">
      <sermon-card />
      <sermon-card />
      <sermon-card />
    </div>

    <div class="flex justify-center">
      <a href="#" class="rcisa-btn alt-rcisa-btn">View More</a>
    </div>
  </div>
</template>
<style lang="scss">
.home-banner {
  position: relative;

  .home-banner-content {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(25, 53, 89, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 9.6rem;
    z-index: 7;
  }

  video {
    width: 100%;
    z-index: 0;
  }
}

.home-events-card-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}

.home-events-card-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.branches-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3.2rem;
  grid-row-gap: 3.2rem;
}

.sermons-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3.2rem;
  grid-row-gap: 3.2rem;
}
</style>
