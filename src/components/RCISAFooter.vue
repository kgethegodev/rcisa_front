<script setup lang="ts">
import FacebookIcon from '@/components/icons/socials/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/socials/InstagramIcon.vue'
import YoutubeIcon from '@/components/icons/socials/Youtube-Icon.vue'
</script>

<template>
<div class="rcisa-footer pb-[4.8rem] pt-[9.6rem] flex flex-col md:gap-[7.2rem] gap-[6.4rem]">
  <div class="container mx-auto flex md:flex-row flex-col md:gap-[7.2rem] gap-[3.2rem] justify-between">
    <img src="@/assets/footer-logo.svg" alt="" srcset="" class="md:max-w-full max-w-[50%]">
    <div class="flex flex-col md:gap-[2.4rem] gap-[3.2rem] rcisa-footer-info">
      <p class="text-white">We obediently and faithfully witness the kingdom of God through the inspiration of the Holy Spirit to humankind in order to address the spiritual, physical and social needs of the people through</p>

      <div class="footer-contact-details flex md:flex-row flex-col gap-[3.2rem]">
        <div class="footer-contact-detail text-[var(--color-darkBlue-40)]">
          <p>Email</p>
          <a href="mailto:info@rcisapta.org" class="text-white">info@rcisapta.org</a>
        </div>
        <div class="footer-contact-detail text-[var(--color-darkBlue-40)]">
          <p>Call Us</p>
          <a href="tel:+27 12 3415 6789" class="text-white">+27 12 3415 6789</a>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto flex md:flex-row flex-col-reverse justify-between gap-[2.4rem]">
    <div class="copyright-text text-[var(--color-darkBlue-30)]">Copyright ©{{new Date().getFullYear()}} Reformed church International. All Rights Reserved.</div>
    <div class="flex flex-row gap-[3.2rem] footer-socials">
      <a href="">
        <facebook-icon  />
      </a>
      <a href="">
        <instagram-icon />
      </a>
      <a href="">
        <youtube-icon />
      </a>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.rcisa-footer {
  background: var(--color-darkBlue-60);

  .container {
    max-width: min(121.6rem, calc(100% - 4.8rem));
  }

  .rcisa-footer-info {
    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3.2rem;

      @media (max-width: 768px) {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 3.2rem;
      }
    }
  }

  .footer-contact-detail {
    p {
      font-size: 1.6rem;
      font-weight: 500;
    }

    a {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .copyright-text {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;

    @media (max-width: 768px) {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding-right: 8rem;
    }
  }

  .footer-socials {
    a {
      svg {
        transition: .2s ease-in-out;
      }
      &:hover {
        svg {
          fill: var(--color-darkBlue-30);
        }
      }
    }
  }
}
</style>
