<script setup lang="ts">
import TimelineCard from '@/components/cards/TimelineCard.vue'
import FellowshipCard from '@/components/cards/FellowshipCard.vue'
</script>

<template>
  <div class="container mx-auto flex flex-col gap-[4rem] sm:pt-[15.6rem] sm:pb-[9.6rem] pt-[18.5rem] pb-[4.8rem]">
      <h1>
        <span>One big family</span>
        OUR STORY
      </h1>
      <div class="sm:h-[53rem] h-[25rem] overflow-hidden relative rounded-[2.4rem]">
        <img src="@/assets/placeholder.png" class="absolute w-full sm:top-[-50%]">
      </div>
      <div>
        <p class="outfit-xl-regular sm:mb-[3.2rem] mb-[1.6rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis.</p>
        <p class="outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis.</p>
      </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container flex flex-col mx-auto gap-[4rem]">
    <h1>
      <span>The history </span>
      TIMELINE
    </h1>

    <div class="timeline-container">
      <timeline-card />
      <timeline-card />
      <timeline-card />
      <timeline-card />
      <timeline-card />
      <timeline-card />
    </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1>Our faith & beliefs</h1>
    <p class="outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. </p>

    <div class="beliefs-row grid sm:grid-cols-3 sm:gap-[3.2rem] gap-[2rem]">
      <div class="p-[2.4rem] rounded-[2.4rem] bg-darkBlue-base text-white">
        <p class="outfit-xl-regular">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="p-[2.4rem] rounded-[2.4rem] bg-green-base text-white">
        <p class="outfit-xl-regular">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="p-[2.4rem] rounded-[2.4rem] bg-warning-base text-white">
        <p class="outfit-xl-regular">Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <p class="outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. </p>
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
    <p class="outfit-xl-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae. Fusce sed vestibulum felis. Vivamus id lacinia lorem. Ut a sodales nulla. Phasellus eget hendrerit velit. Fusce consectetur quis. </p>

    <div class="grid sm:grid-cols-4 sm:gap-[0] gap-[4rem]">
      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Evangelism Missions</p>
        <p class="outfit-xl-regular text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Education Initiatives</p>
        <p class="outfit-xl-regular text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Education Initiatives</p>
        <p class="outfit-xl-regular text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem] items-center">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <vue-feather type="circle" stroke="var(--color-white)" />
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Local Outreach Programs</p>
        <p class="outfit-xl-regular text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et congue ipsum. Praesent varius lorem dolor, sed vehicula eros congue vitae.</p>
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
  grid-template-columns: repeat(3, 1fr);
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
