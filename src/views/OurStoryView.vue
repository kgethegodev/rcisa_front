<script setup lang="ts">
import TimelineCard from '@/components/cards/TimelineCard.vue'
import FellowshipCard from '@/components/cards/FellowshipCard.vue'

const timeline_entries = [
  {
    date: '2008–2009',
    blurb: 'Informal prayer meetings were initiated by pioneers Messrs. Chimenya, Kagura, and Manyange, with the first gathering at Johannesburg Zoo under the theme “Starting Afresh” (Isaiah 65:17-24).',
  },
  {
    date: 'July 2009',
    blurb: 'The first formal service took place at the Dutch Reformed Church (DRC) Johannesburg, led by Rev. Munikwa.',
  },
  {
    date: 'December 6, 2009',
    blurb: 'RCISA was officially launched under the theme “Come Let Us Reason Together” (Isaiah 1:18).',
  },
  {
    date: '2010',
    blurb: 'The Pretoria Congregation was formally established, marking a key expansion beyond Johannesburg.',
  },
]
</script>

<template>
  <div class="container mx-auto flex flex-col gap-[4rem] sm:pt-[15.6rem] sm:pb-[9.6rem] pt-[18.5rem] pb-[4.8rem]">
      <h1>
        <span>One big family</span>
        Our Story
      </h1>
      <div class="sm:h-[53rem] h-[25rem] overflow-hidden relative rounded-[2.4rem]">
        <img src="@/assets/placeholder.png" class="absolute w-full sm:top-[-50%]">
      </div>
      <div>
        <p class="outfit-xl-regular sm:mb-[3.2rem] mb-[1.6rem]">The Reformed Church International South Africa (RCISA) is a thriving faith community dedicated to serving Zimbabwean migrants in South Africa. Established as an extension of the Reformed Church in Zimbabwe (RCZ), RCISA provides spiritual guidance, fellowship, and community support rooted in the rich traditions of Reformed theology. Since its founding in 2009, the church has continued to grow, nurturing faith and empowering communities across South Africa.</p>
      </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container flex flex-col mx-auto gap-[4rem]">
    <h1>
      <span>The history </span>
      Timeline
    </h1>

    <div class="timeline-container">
      <timeline-card v-for="entry in timeline_entries" :blurb="entry.blurb" :date="entry.date"/>
    </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1>Our faith & beliefs</h1>
    <p class="outfit-xl-regular">RCISA upholds the core tenets of Reformed theology, emphasizing:</p>

    <div class="grid sm:grid-cols-3 sm:gap-[0] gap-[4rem]">
      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="outfit-xl-regular text-center">The <strong>sovereignty of God</strong> and the authority of <strong>Scripture</strong>.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="outfit-xl-regular text-center">The sacraments of <strong>baptism</strong> and the <strong>Lord's Supper</strong>.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="outfit-xl-regular text-center">A commitment to <strong>evangelism, social justice, and community empowerment</strong>.</p>
      </div>
    </div>

    <p class="outfit-xl-regular">For a deeper look into our doctrinal foundations, including the <strong>Heidelberg Catechism</strong> and <strong>Belgic Confession</strong>, visit the RCZ Beliefs page.</p>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1>
      <span>Living our faith</span>
      Fellowship Groups
    </h1>

    <fellowship-card />
    <fellowship-card :reverse="true"/>
    <fellowship-card />
    <fellowship-card :reverse="true"/>
    <fellowship-card />
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1>Community Impact & Outreach</h1>
    <p class="outfit-xl-regular">Guided by Christ's love, RCISA actively engages in mission work and social development, including:</p>

    <div class="grid sm:grid-cols-4 sm:gap-[0] gap-[4rem]">
      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Evangelism Missions</p>
        <p class="outfit-xl-regular text-center">supporting outreach in Binga, Zimbabwe.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Education initiatives</p>
        <p class="outfit-xl-regular text-center">including funding the construction of <strong>Nyajena Mission School</strong> in Zimbabwe.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Humanitarian aid</p>
        <p class="outfit-xl-regular text-center">such as contributions to <strong>Cyclone Idai relief efforts (2019)</strong>.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Local outreach programs</p>
        <p class="outfit-xl-regular text-center">offering weekly prayer meetings, baptismal services, and bereavement support.</p>
      </div>

      
    </div>

    <div class="gradient-bkg p-[3.2rem] rounded-[2.4rem]">
      <h1 class="text-white text-center mb-[2rem]">Our vision for the future</h1>
      <div class="grid sm:grid-cols-3 gap-[2rem] text-white text-center outfit-xl-regular">
        <p class="p-[2.4rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>
         <p class="p-[2.4rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>
         <p class="p-[2.4rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. </p>
      </div>
    </div>

    <h1>Our connection to RCZ</h1>
    <p class="outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. </p>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <div class="gradient-bkg p-[3.2rem] rounded-[2.4rem] flex flex-col gap-[4rem]">
      <h1 class="text-white text-center">
        <span>We would be honoured to have you</span>
        Join Us or plan a visit
      </h1>

      <div class="text-center">
        <router-link to="/" class="rcisa-btn">Let’s Connect</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3.2rem;
  grid-row-gap: 3.2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
