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

const fellowships = [
  {
    title: "Men's Christian Fellowship (Sungano yaVarume vaKristu)",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Evangelism, spiritual accountability, and supporting church activities.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular mb-[2rem]'><li>Conducting home visitations for prayer and evangelism.</li><li>Encouraging participation in Sunday services and sacraments.</li><li>Promoting family-centered spiritual leadership.</li></ol><p class='outfit-xl-regular'>Open to baptized male married members in good standing.</p>"
  },
  {
    title: "Women's Fellowship (Sungano yaMadzimai)",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Strengthening women's spiritual and social roles.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular mb-[2rem]'><li>Prayer meetings, charity work, and supporting widows orphans.</li><li>Organizing workshops on family welfare and health.</li></ol><p class='outfit-xl-regular'>Open to all female congregants.</p>"
  },
  {
    title: "Youth Boys' Fellowship (Sungano yaVakomana)",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Nurturing faith and moral integrity among young men.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular'><li>Bible study, mentorship, and community outreach.</li><li>Participation in church programs and youth camps.</li></ol>"
  },
  {
    title: "Youth Girls' Fellowship (Sungano yaVasikana)",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Empowering young girls through faith and education.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular'><li>Life skills training, Bible studies, and peer support.</li><li>Advocacy against early marriages and gender-based issues.</li></ol>"
  },
  {
    title: "Christian Soldiers/Warriors (Varwi vakristu)",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Encouraging spiritual resilience and discipleship.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular'><li>Intensive prayer sessions and fasting programs.</li><li>Addressing societal challenges through faith-based initiatives.</li></ol>"
  },
  {
    title: "Youth Movement League",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Strengthening marriages and family bonds.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular'><li>Marriage counseling, retreats, and joint community projects.</li><li>Promoting biblical principles in marital relationships.</li></ol>"
  },
  {
    title: "Widows & Single Mothers",
    content: "<p class='outfit-xl-regular mb-[2rem]'>Providing spiritual and material support.</p><ol class='list-decimal ml-[2.1rem] outfit-xl-regular'><li>Income-generating projects and childcare assistance.</li><li>Counseling and advocacy for legal/financial rights.</li></ol>"
  },
]
</script>

<template>
  <div class="container mx-auto flex flex-col gap-[4rem] sm:pt-[15.6rem] sm:pb-[9.6rem] pt-[18.5rem] pb-[4.8rem]">
      <h1 class="flex">
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
    <h1 class="flex">
      <span>The history </span>
      Timeline
    </h1>

    <div class="timeline-container">
      <timeline-card v-for="entry in timeline_entries" :blurb="entry.blurb" :date="entry.date"/>
    </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1 class="flex">Our faith & beliefs</h1>
    <p class="outfit-xl-regular">RCISA upholds the core tenets of Reformed theology,</p>

    <div class="grid sm:grid-cols-3 sm:gap-[0] gap-[4rem]">
      <div class="p-[2.4rem] flex flex-col gap-[2rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0613 16.8749L18.6637 13.4765L15.2456 2.19931C15.1485 1.87819 14.9736 1.58599 14.7366 1.34859C14.4996 1.11119 14.2076 0.935908 13.8866 0.838283C13.5657 0.740658 13.2256 0.723698 12.8965 0.788906C12.5674 0.854114 12.2595 0.999477 12 1.21212C11.7405 0.999477 11.4326 0.854114 11.1035 0.788906C10.7744 0.723698 10.4343 0.740658 10.1133 0.838283C9.79238 0.935908 9.50044 1.11119 9.2634 1.34859C9.02635 1.58599 8.85152 1.87819 8.75437 2.19931L5.33625 13.4774L1.93875 16.8749C1.65766 17.1562 1.49976 17.5376 1.49976 17.9352C1.49976 18.3329 1.65766 18.7143 1.93875 18.9956L5.00344 22.0602C5.14273 22.1996 5.3081 22.3101 5.49011 22.3855C5.67212 22.4609 5.86721 22.4997 6.06422 22.4997C6.26123 22.4997 6.45631 22.4609 6.63832 22.3855C6.82033 22.3101 6.98571 22.1996 7.125 22.0602L11.6512 17.5312C11.7767 17.4054 11.8933 17.271 12 17.129C12.1067 17.271 12.2233 17.4054 12.3487 17.5312L16.875 22.0612C17.0143 22.2005 17.1797 22.311 17.3617 22.3864C17.5437 22.4618 17.7388 22.5006 17.9358 22.5006C18.1328 22.5006 18.3279 22.4618 18.5099 22.3864C18.6919 22.311 18.8573 22.2005 18.9966 22.0612L22.0613 18.9965C22.2006 18.8572 22.3111 18.6918 22.3865 18.5098C22.4619 18.3278 22.5007 18.1327 22.5007 17.9357C22.5007 17.7387 22.4619 17.5436 22.3865 17.3616C22.3111 17.1796 22.2006 17.0142 22.0613 16.8749ZM6.06375 20.9999L3 17.9362L4.18969 16.7465L7.25437 19.8112L6.06375 20.9999ZM11.25 14.8827C11.2515 15.1786 11.1943 15.4718 11.0816 15.7454C10.969 16.019 10.8031 16.2675 10.5937 16.4765L8.31375 18.7499L5.25 15.6862L6.52969 14.4056C6.61702 14.3182 6.68142 14.2107 6.71719 14.0924L10.1859 2.63431C10.2211 2.50681 10.3017 2.39658 10.4126 2.32439C10.5234 2.2522 10.6568 2.22305 10.7876 2.24241C10.9185 2.26178 11.0377 2.32833 11.1229 2.42953C11.208 2.53073 11.2533 2.65958 11.25 2.79181V14.8827ZM13.4062 16.4765C13.1969 16.2675 13.031 16.019 12.9184 15.7454C12.8057 15.4718 12.7485 15.1786 12.75 14.8827V2.78899C12.75 2.6591 12.7967 2.53354 12.8816 2.43519C12.9664 2.33683 13.0838 2.27223 13.2123 2.25314C13.3407 2.23406 13.4718 2.26176 13.5816 2.33121C13.6913 2.40065 13.7725 2.50722 13.8103 2.63149L17.2791 14.0896C17.3148 14.2078 17.3792 14.3154 17.4666 14.4027L18.825 15.7612L15.6937 18.7612L13.4062 16.4765ZM17.9362 20.9999L16.7587 19.8215L19.8891 16.8215L21 17.9362L17.9362 20.9999Z" fill="white"/>
          </svg>
        </div>
        <p class="outfit-xl-regular">The <strong>sovereignty of God</strong> and the authority of <strong>Scripture</strong>.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-green-base)] p-[.8rem]">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8332 7.5C22.8332 6.50544 22.4381 5.55161 21.7348 4.84835C21.0316 4.14509 20.0777 3.75 19.0832 3.75H4.83318C3.97206 3.75052 3.13736 4.04739 2.4693 4.59074C1.80124 5.13408 1.34053 5.89079 1.16458 6.73374C0.988619 7.57669 1.10813 8.45451 1.50304 9.21974C1.89794 9.98497 2.54418 10.591 3.33318 10.9359V18.75C3.33318 19.1478 3.49121 19.5294 3.77252 19.8107C4.05382 20.092 4.43535 20.25 4.83318 20.25H19.0832C19.481 20.25 19.8625 20.092 20.1438 19.8107C20.4251 19.5294 20.5832 19.1478 20.5832 18.75V10.9359C21.2513 10.6435 21.8199 10.1629 22.2195 9.55278C22.619 8.94263 22.8323 8.22934 22.8332 7.5ZM4.83318 11.25C5.03209 11.25 5.22286 11.171 5.36351 11.0303C5.50416 10.8897 5.58318 10.6989 5.58318 10.5C5.58318 10.3011 5.50416 10.1103 5.36351 9.96967C5.22286 9.82902 5.03209 9.75 4.83318 9.75C4.23644 9.75 3.66415 9.51295 3.24219 9.09099C2.82023 8.66903 2.58318 8.09674 2.58318 7.5C2.58318 6.90326 2.82023 6.33097 3.24219 5.90901C3.66415 5.48705 4.23644 5.25 4.83318 5.25H13.8332C14.4299 5.25 15.0022 5.48705 15.4242 5.90901C15.8461 6.33097 16.0832 6.90326 16.0832 7.5C16.0832 8.09674 15.8461 8.66903 15.4242 9.09099C15.0022 9.51295 14.4299 9.75 13.8332 9.75C13.6343 9.75 13.4435 9.82902 13.3028 9.96967C13.1622 10.1103 13.0832 10.3011 13.0832 10.5C13.0832 10.6989 13.1622 10.8897 13.3028 11.0303C13.4435 11.171 13.6343 11.25 13.8332 11.25V18.75H4.83318V11.25ZM19.0832 9.75C18.8843 9.75 18.6935 9.82902 18.5528 9.96967C18.4122 10.1103 18.3332 10.3011 18.3332 10.5C18.3332 10.6989 18.4122 10.8897 18.5528 11.0303C18.6935 11.171 18.8843 11.25 19.0832 11.25V18.75H15.3332V10.9359C15.8516 10.7096 16.312 10.3689 16.6801 9.93943C17.0481 9.50993 17.3143 9.00273 17.4586 8.45581C17.6028 7.90888 17.6215 7.33641 17.5132 6.78124C17.4049 6.22607 17.1724 5.70259 16.8332 5.25H19.0832C19.6799 5.25 20.2522 5.48705 20.6742 5.90901C21.0961 6.33097 21.3332 6.90326 21.3332 7.5C21.3332 8.09674 21.0961 8.66903 20.6742 9.09099C20.2522 9.51295 19.6799 9.75 19.0832 9.75Z" fill="white"/>
          </svg>
        </div>
        <p class="outfit-xl-regular">The sacraments of <strong>baptism</strong> and the <strong>Lord's Supper</strong>.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-darkBlue-base)] p-[.8rem]">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4165 6.75H15.6665V3C15.6665 2.60218 15.5085 2.22064 15.2272 1.93934C14.9459 1.65804 14.5643 1.5 14.1665 1.5H11.1665C10.7687 1.5 10.3871 1.65804 10.1058 1.93934C9.82454 2.22064 9.6665 2.60218 9.6665 3V6.75H5.9165C5.51868 6.75 5.13715 6.90804 4.85584 7.18934C4.57454 7.47064 4.4165 7.85218 4.4165 8.25V11.25C4.4165 11.6478 4.57454 12.0294 4.85584 12.3107C5.13715 12.592 5.51868 12.75 5.9165 12.75H9.6665V21C9.6665 21.3978 9.82454 21.7794 10.1058 22.0607C10.3871 22.342 10.7687 22.5 11.1665 22.5H14.1665C14.5643 22.5 14.9459 22.342 15.2272 22.0607C15.5085 21.7794 15.6665 21.3978 15.6665 21V12.75H19.4165C19.8143 12.75 20.1959 12.592 20.4772 12.3107C20.7585 12.0294 20.9165 11.6478 20.9165 11.25V8.25C20.9165 7.85218 20.7585 7.47064 20.4772 7.18934C20.1959 6.90804 19.8143 6.75 19.4165 6.75ZM19.4165 11.25H14.9165C14.7176 11.25 14.5268 11.329 14.3862 11.4697C14.2455 11.6103 14.1665 11.8011 14.1665 12V21H11.1665V12C11.1665 11.8011 11.0875 11.6103 10.9468 11.4697C10.8062 11.329 10.6154 11.25 10.4165 11.25H5.9165V8.25H10.4165C10.6154 8.25 10.8062 8.17098 10.9468 8.03033C11.0875 7.88968 11.1665 7.69891 11.1665 7.5V3H14.1665V7.5C14.1665 7.69891 14.2455 7.88968 14.3862 8.03033C14.5268 8.17098 14.7176 8.25 14.9165 8.25H19.4165V11.25Z" fill="white"/>
          </svg>

        </div>
        <p class="outfit-xl-regular">A commitment to <strong>evangelism, social justice, and community empowerment</strong>.</p>
      </div>
    </div>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1 class="flex">
      <span>Living our faith</span>
      Fellowship Groups
    </h1>

    <fellowship-card v-for="(fellowship,index) in fellowships" :reverse="index % 2 === 0" :fellowship/>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <h1 class="flex">Community Impact & Outreach</h1>
    <p class="outfit-xl-regular">Guided by Christ's love, RCISA actively engages in mission work and social development, including:</p>

    <div class="grid sm:grid-cols-4 sm:gap-[0] gap-[4rem]">
      <div class="p-[2.4rem] flex flex-col gap-[2.4rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-warning-base)] p-[.8rem]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3809 4.09406C22.3129 3.98848 22.2195 3.90165 22.1093 3.84154C21.9991 3.78143 21.8755 3.74995 21.7499 3.75H14.2499C14.106 3.75006 13.9651 3.79154 13.844 3.86951C13.723 3.94748 13.627 4.05863 13.5674 4.18969L12.7443 6H2.62493C2.47965 6.00001 2.33751 6.04222 2.21576 6.12149C2.09402 6.20076 1.99792 6.31368 1.93914 6.44654C1.88035 6.57939 1.86142 6.72646 1.88464 6.86987C1.90786 7.01328 1.97223 7.14686 2.06993 7.25437L5.36149 10.875L2.06993 14.4956C1.97223 14.6031 1.90786 14.7367 1.88464 14.8801C1.86142 15.0235 1.88035 15.1706 1.93914 15.3035C1.99792 15.4363 2.09402 15.5492 2.21576 15.6285C2.33751 15.7078 2.47965 15.75 2.62493 15.75H9.47712C9.62108 15.7499 9.76198 15.7085 9.883 15.6305C10.004 15.5525 10.1001 15.4414 10.1596 15.3103L10.9827 13.5H16.8356L13.5674 20.6897C13.5236 20.7797 13.4982 20.8777 13.4927 20.9777C13.4873 21.0777 13.502 21.1778 13.5359 21.2721C13.5698 21.3663 13.6223 21.4529 13.6902 21.5265C13.7581 21.6002 13.84 21.6595 13.9312 21.7009C14.0224 21.7424 14.121 21.7652 14.2211 21.7679C14.3213 21.7707 14.4209 21.7533 14.5143 21.7169C14.6076 21.6805 14.6927 21.6258 14.7645 21.5559C14.8363 21.4861 14.8934 21.4026 14.9324 21.3103L22.4324 4.81031C22.4844 4.69614 22.507 4.57075 22.4979 4.44562C22.4889 4.32048 22.4487 4.19961 22.3809 4.09406ZM8.9943 14.25H4.31993L6.92993 11.3794C7.05536 11.2413 7.12486 11.0615 7.12486 10.875C7.12486 10.6885 7.05536 10.5087 6.92993 10.3706L4.31993 7.5H12.0627L8.9943 14.25ZM17.5171 12H11.6643L14.7327 5.25H20.5856L17.5171 12Z" fill="white"/>
          </svg>
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Evangelism Missions</p>
        <p class="outfit-xl-regular">Supporting outreach in Binga, Zimbabwe.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-green-base)] p-[.8rem]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2372 5.28849L12.2372 2.28849C12.0832 2.23717 11.9168 2.23717 11.7628 2.28849L2.76281 5.28849C2.61347 5.33828 2.48358 5.43379 2.39155 5.5615C2.29951 5.68921 2.24999 5.84264 2.25 6.00006V13.5001C2.25 13.699 2.32902 13.8897 2.46967 14.0304C2.61032 14.171 2.80109 14.2501 3 14.2501C3.19891 14.2501 3.38968 14.171 3.53033 14.0304C3.67098 13.8897 3.75 13.699 3.75 13.5001V7.04068L6.89906 8.08974C6.0624 9.44143 5.79634 11.0699 6.15931 12.6176C6.52229 14.1653 7.48462 15.5057 8.835 16.3444C7.1475 17.0063 5.68875 18.2035 4.62187 19.8404C4.56639 19.9228 4.52785 20.0155 4.50849 20.113C4.48914 20.2105 4.48936 20.3109 4.50913 20.4083C4.52891 20.5057 4.56785 20.5982 4.62369 20.6804C4.67953 20.7626 4.75116 20.8329 4.83441 20.8872C4.91766 20.9415 5.01087 20.9787 5.10863 20.9967C5.20639 21.0147 5.30674 21.013 5.40386 20.9918C5.50097 20.9707 5.59291 20.9304 5.67433 20.8734C5.75575 20.8164 5.82502 20.7438 5.87813 20.6597C7.29094 18.4922 9.52219 17.2501 12 17.2501C14.4778 17.2501 16.7091 18.4922 18.1219 20.6597C18.2319 20.8232 18.4018 20.9369 18.5949 20.9761C18.788 21.0153 18.9888 20.9769 19.1539 20.8693C19.3189 20.7616 19.435 20.5933 19.4769 20.4008C19.5189 20.2083 19.4834 20.0069 19.3781 19.8404C18.3112 18.2035 16.8469 17.0063 15.165 16.3444C16.5141 15.5057 17.4755 14.1662 17.8384 12.6196C18.2013 11.0731 17.9361 9.44573 17.1009 8.09443L21.2372 6.71631C21.3866 6.66655 21.5165 6.57105 21.6086 6.44334C21.7006 6.31563 21.7502 6.16218 21.7502 6.00474C21.7502 5.8473 21.7006 5.69386 21.6086 5.56615C21.5165 5.43843 21.3866 5.34294 21.2372 5.29318V5.28849ZM16.5 11.2501C16.5002 11.9615 16.3317 12.6628 16.0084 13.2965C15.6851 13.9302 15.2161 14.4782 14.6399 14.8956C14.0638 15.313 13.3969 15.5878 12.694 15.6975C11.9911 15.8072 11.2722 15.7487 10.5962 15.5268C9.92031 15.3049 9.30663 14.9258 8.80555 14.4208C8.30448 13.9158 7.93028 13.2991 7.71367 12.6215C7.49705 11.9438 7.44419 11.2245 7.55942 10.5225C7.67465 9.82043 7.95469 9.15572 8.37656 8.58287L11.7628 9.70787C11.9168 9.75919 12.0832 9.75919 12.2372 9.70787L15.6234 8.58287C16.1932 9.35537 16.5005 10.2901 16.5 11.2501ZM12 8.20974L5.37187 6.00006L12 3.79037L18.6281 6.00006L12 8.20974Z" fill="white"/>
          </svg>
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Education initiatives</p>
        <p class="outfit-xl-regular">Including funding the construction of Nyajena Mission School in Zimbabwe.</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-darkBlue-base)] p-[.8rem]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_660_194)">
            <path d="M21.5934 13.2245C21.3482 13.0354 21.067 12.8983 20.7671 12.8215C20.4671 12.7446 20.1547 12.7295 19.8488 12.7773C21.6094 10.9998 22.5 9.23259 22.5 7.50009C22.5 5.01853 20.5041 3.00009 18.0506 3.00009C17.3996 2.996 16.7556 3.13445 16.1638 3.40573C15.5721 3.67701 15.0468 4.07454 14.625 4.5704C14.2032 4.07454 13.6779 3.67701 13.0862 3.40573C12.4944 3.13445 11.8504 2.996 11.1994 3.00009C8.74594 3.00009 6.75 5.01853 6.75 7.50009C6.75 8.53134 7.05375 9.53352 7.69312 10.5938C7.16947 10.7265 6.69158 10.9987 6.31031 11.3813L4.18969 13.5001H1.5C1.10218 13.5001 0.720644 13.6581 0.43934 13.9394C0.158035 14.2207 0 14.6023 0 15.0001L0 18.7501C0 19.1479 0.158035 19.5294 0.43934 19.8107C0.720644 20.0921 1.10218 20.2501 1.5 20.2501H11.25C11.3113 20.2501 11.3724 20.2426 11.4319 20.2276L17.4319 18.7276C17.4701 18.7185 17.5075 18.7059 17.5434 18.6901L21.1875 17.1395L21.2288 17.1207C21.579 16.9457 21.8789 16.6844 22.1002 16.3615C22.3215 16.0385 22.457 15.6646 22.4939 15.2748C22.5307 14.885 22.4678 14.4923 22.3109 14.1336C22.154 13.7749 21.9084 13.462 21.5972 13.2245H21.5934ZM11.1994 4.50009C11.7803 4.49159 12.3505 4.65653 12.8371 4.97384C13.3238 5.29114 13.7047 5.74638 13.9313 6.28134C13.9878 6.4189 14.0839 6.53655 14.2074 6.61935C14.3309 6.70215 14.4763 6.74636 14.625 6.74636C14.7737 6.74636 14.9191 6.70215 15.0426 6.61935C15.1661 6.53655 15.2622 6.4189 15.3187 6.28134C15.5453 5.74638 15.9262 5.29114 16.4129 4.97384C16.8995 4.65653 17.4697 4.49159 18.0506 4.50009C19.6491 4.50009 21 5.87353 21 7.50009C21 9.32915 19.5197 11.3982 16.7194 13.4907L15.6797 13.7298C15.7709 13.3443 15.7738 12.9431 15.6879 12.5564C15.6021 12.1696 15.4298 11.8073 15.1841 11.4966C14.9383 11.1859 14.6254 10.9348 14.2688 10.7622C13.9122 10.5897 13.5212 10.5 13.125 10.5001H9.43875C8.62969 9.40884 8.25 8.44884 8.25 7.50009C8.25 5.87353 9.60094 4.50009 11.1994 4.50009ZM1.5 15.0001H3.75V18.7501H1.5V15.0001ZM20.5716 15.7698L17.0091 17.2866L11.1562 18.7501H5.25V14.5604L7.37156 12.4398C7.51035 12.2999 7.67555 12.189 7.85758 12.1135C8.03961 12.038 8.23482 11.9995 8.43188 12.0001H13.125C13.4234 12.0001 13.7095 12.1186 13.9205 12.3296C14.1315 12.5406 14.25 12.8267 14.25 13.1251C14.25 13.4235 14.1315 13.7096 13.9205 13.9206C13.7095 14.1316 13.4234 14.2501 13.125 14.2501H10.5C10.3011 14.2501 10.1103 14.3291 9.96967 14.4698C9.82902 14.6104 9.75 14.8012 9.75 15.0001C9.75 15.199 9.82902 15.3898 9.96967 15.5304C10.1103 15.6711 10.3011 15.7501 10.5 15.7501H13.5C13.5565 15.7499 13.6127 15.7436 13.6678 15.7313L19.9491 14.2866L19.9781 14.2791C20.1699 14.2259 20.3745 14.2455 20.5527 14.3341C20.7309 14.4227 20.87 14.574 20.9433 14.759C21.0167 14.944 21.0189 15.1496 20.9498 15.3362C20.8806 15.5228 20.7449 15.6772 20.5687 15.7698H20.5716Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_660_194">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Humanitarian aid</p>
        <p class="outfit-xl-regular">such as contributions to Cyclone Idai relief efforts (2019).</p>
      </div>

      <div class="p-[2.4rem] flex flex-col gap-[2.4rem]">
        <div class="w-[4rem] h-[4rem] rounded-[100%] bg-[var(--color-error-base)] p-[.8rem]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.95 14.1002C22.8712 14.1593 22.7816 14.2023 22.6862 14.2267C22.5908 14.2511 22.4915 14.2566 22.394 14.2426C22.2965 14.2287 22.2027 14.1957 22.1179 14.1455C22.0332 14.0953 21.9591 14.029 21.9 13.9502C21.448 13.3425 20.8596 12.8495 20.1822 12.5108C19.5048 12.1721 18.7574 11.9972 18 12.0002C17.8526 12.0002 17.7083 11.9567 17.5855 11.8751C17.4626 11.7936 17.3664 11.6776 17.3091 11.5417C17.2702 11.4495 17.2501 11.3503 17.2501 11.2502C17.2501 11.15 17.2702 11.0509 17.3091 10.9586C17.3664 10.8227 17.4626 10.7068 17.5855 10.6252C17.7083 10.5437 17.8526 10.5002 18 10.5002C18.4209 10.5001 18.8332 10.3821 19.1903 10.1594C19.5474 9.93677 19.8349 9.61844 20.0201 9.24058C20.2054 8.86273 20.2809 8.4405 20.2382 8.02185C20.1955 7.6032 20.0363 7.20493 19.7786 6.87225C19.5209 6.53958 19.175 6.28584 18.7803 6.13987C18.3856 5.9939 17.9579 5.96154 17.5458 6.04646C17.1336 6.13139 16.7535 6.3302 16.4487 6.62031C16.1439 6.91043 15.9265 7.28021 15.8213 7.68767C15.7967 7.78308 15.7535 7.87271 15.6942 7.95144C15.635 8.03017 15.5608 8.09645 15.4759 8.14651C15.391 8.19656 15.2971 8.22941 15.1995 8.24318C15.102 8.25694 15.0026 8.25135 14.9072 8.22673C14.8118 8.20211 14.7222 8.15893 14.6435 8.09967C14.5647 8.04041 14.4984 7.96622 14.4484 7.88134C14.3983 7.79646 14.3655 7.70256 14.3517 7.60498C14.338 7.50741 14.3435 7.40808 14.3682 7.31267C14.5142 6.74765 14.7901 6.22451 15.1738 5.78487C15.5576 5.34523 16.0387 5.00124 16.5788 4.78025C17.119 4.55926 17.7032 4.46738 18.2851 4.51191C18.867 4.55645 19.4304 4.73618 19.9306 5.0368C20.4308 5.33742 20.8539 5.75063 21.1663 6.24356C21.4787 6.73648 21.6718 7.29552 21.7301 7.87618C21.7884 8.45684 21.7104 9.0431 21.5023 9.58831C21.2942 10.1335 20.9617 10.6226 20.5313 11.0167C21.5511 11.4583 22.4377 12.159 23.1028 13.0492C23.1619 13.1282 23.2049 13.2181 23.2292 13.3137C23.2535 13.4093 23.2587 13.5088 23.2445 13.6064C23.2303 13.704 23.197 13.7979 23.1465 13.8826C23.0959 13.9673 23.0292 14.0413 22.95 14.1002ZM17.8988 19.8752C17.9531 19.9605 17.9895 20.056 18.0059 20.1558C18.0223 20.2556 18.0184 20.3577 17.9943 20.456C17.9703 20.5542 17.9266 20.6466 17.8659 20.7275C17.8052 20.8084 17.7288 20.8762 17.6412 20.9268C17.5536 20.9775 17.4567 21.0099 17.3563 21.022C17.2559 21.0342 17.154 21.026 17.0569 20.9978C16.9597 20.9696 16.8693 20.9221 16.791 20.8581C16.7127 20.794 16.6482 20.7148 16.6013 20.6252C16.1288 19.8252 15.456 19.1622 14.6491 18.7016C13.8422 18.241 12.9291 17.9988 12 17.9988C11.0709 17.9988 10.1579 18.241 9.35102 18.7016C8.54412 19.1622 7.87125 19.8252 7.39879 20.6252C7.3519 20.7148 7.28737 20.794 7.20908 20.8581C7.13078 20.9221 7.04034 20.9696 6.94319 20.9978C6.84605 21.026 6.7442 21.0342 6.64379 21.022C6.54338 21.0099 6.44647 20.9775 6.35889 20.9268C6.27132 20.8762 6.19489 20.8084 6.1342 20.7275C6.07352 20.6466 6.02983 20.5542 6.00576 20.456C5.9817 20.3577 5.97775 20.2556 5.99417 20.1558C6.01059 20.056 6.04702 19.9605 6.10129 19.8752C6.82841 18.6258 7.9371 17.6427 9.26441 17.0702C8.51753 16.4983 7.96863 15.7068 7.69485 14.8069C7.42108 13.9069 7.4362 12.9438 7.73808 12.053C8.03997 11.1621 8.61346 10.3882 9.37792 9.84005C10.1424 9.29194 11.0594 8.99716 12 8.99716C12.9407 8.99716 13.8577 9.29194 14.6222 9.84005C15.3866 10.3882 15.9601 11.1621 16.262 12.053C16.5639 12.9438 16.579 13.9069 16.3052 14.8069C16.0315 15.7068 15.4825 16.4983 14.7357 17.0702C16.063 17.6427 17.1717 18.6258 17.8988 19.8752ZM12 16.5002C12.5934 16.5002 13.1734 16.3242 13.6667 15.9946C14.1601 15.6649 14.5446 15.1964 14.7717 14.6482C14.9987 14.1 15.0582 13.4968 14.9424 12.9149C14.8266 12.333 14.5409 11.7984 14.1214 11.3788C13.7018 10.9593 13.1673 10.6736 12.5853 10.5578C12.0034 10.4421 11.4002 10.5015 10.852 10.7285C10.3038 10.9556 9.83528 11.3401 9.50563 11.8335C9.17599 12.3268 9.00004 12.9068 9.00004 13.5002C9.00004 14.2958 9.31611 15.0589 9.87872 15.6215C10.4413 16.1841 11.2044 16.5002 12 16.5002ZM6.75004 11.2502C6.75004 11.0513 6.67102 10.8605 6.53037 10.7198C6.38972 10.5792 6.19895 10.5002 6.00004 10.5002C5.57922 10.5001 5.16685 10.3821 4.80976 10.1594C4.45267 9.93677 4.16518 9.61844 3.97994 9.24058C3.79471 8.86273 3.71915 8.4405 3.76185 8.02185C3.80455 7.6032 3.9638 7.20493 4.22152 6.87225C4.47923 6.53958 4.82507 6.28584 5.21976 6.13987C5.61445 5.9939 6.04216 5.96154 6.45432 6.04646C6.86648 6.13139 7.24656 6.3302 7.55139 6.62031C7.85622 6.91043 8.07359 7.28021 8.17879 7.68767C8.22852 7.88036 8.35276 8.04541 8.52418 8.14651C8.6956 8.2476 8.90016 8.27646 9.09285 8.22673C9.28555 8.177 9.4506 8.05276 9.55169 7.88134C9.65279 7.70992 9.68164 7.50536 9.63192 7.31267C9.48589 6.74765 9.21002 6.22451 8.82624 5.78487C8.44246 5.34523 7.96137 5.00124 7.42125 4.78025C6.88112 4.55926 6.29688 4.46738 5.715 4.51191C5.13312 4.55645 4.56967 4.73618 4.06947 5.0368C3.56928 5.33742 3.14614 5.75063 2.83375 6.24356C2.52135 6.73648 2.32831 7.29552 2.26998 7.87618C2.21165 8.45684 2.28965 9.0431 2.49777 9.58831C2.70589 10.1335 3.03838 10.6226 3.46879 11.0167C2.44999 11.4587 1.56446 12.1594 0.90004 13.0492C0.780569 13.2084 0.729204 13.4084 0.757247 13.6054C0.785289 13.8024 0.890442 13.9802 1.04957 14.0997C1.2087 14.2192 1.40877 14.2705 1.60577 14.2425C1.80278 14.2144 1.98057 14.1093 2.10004 13.9502C2.55209 13.3425 3.14049 12.8495 3.81788 12.5108C4.49526 12.1721 5.24271 11.9972 6.00004 12.0002C6.19895 12.0002 6.38972 11.9211 6.53037 11.7805C6.67102 11.6398 6.75004 11.4491 6.75004 11.2502Z" fill="white"/>
          </svg>

        </div>
        <p class="anton-xs-regular text-[var(--color-darkBlue-base)]">Local outreach programs</p>
        <p class="outfit-xl-regular">offering weekly prayer meetings, baptismal services, and bereavement support.</p>
      </div>

      
    </div>

    <div class="gradient-bkg p-[3.2rem] rounded-[2.4rem]">
      <h1 class="text-white text-center mb-[4rem] flex">Our vision for the future</h1>
      <div class="grid sm:grid-cols-3 gap-[3.2rem] text-white text-center outfit-xl-regular text-white">
        <div class="px-[1.6rem] py-[3.6rem] bg-[rgba(255,255,255,.15)] rounded-[2.4rem] border-[.1rem] border-[var(--color-white-70)]">
          <p class="outfit-lg-regular text-center">Strengthening our digital presence through integrated websites and mobile apps.</p>
        </div>
        <div class="px-[1.6rem] py-[3.6rem] bg-[rgba(255,255,255,.15)] rounded-[2.4rem] border-[.1rem] border-[var(--color-white-70)]">
          <p class="outfit-lg-regular text-center">Expanding social enterprises to enhance financial sustainability.</p>
        </div>
        <div class="px-[1.6rem] py-[3.6rem] bg-[rgba(255,255,255,.15)] rounded-[2.4rem] border-[.1rem] border-[var(--color-white-70)]">
          <p class="outfit-lg-regular text-center">Establishing new branches to reach underserved communities.</p>
        </div>
      </div>
    </div>

    <h1 class="flex">Our connection to RCZ</h1>
    <p class="outfit-xl-regular">RCISA operates under the doctrinal and spiritual guidance of the Reformed Church in Zimbabwe (RCZ). We share their dedication to education, healthcare, and social advocacy, extending this mission within the South African context. For more information about RCZ's history and global impact, visit <a href="www.rcz.org.zw" target="_blank" class="underline">www.rcz.org.zw</a>.</p>
  </div>

  <div class="sm:py-[9.6rem] py-[4.8rem] container mx-auto flex flex-col gap-[4rem]">
    <div class="gradient-bkg p-[3.2rem] rounded-[2.4rem] flex flex-col gap-[4rem]">
      <h1 class="text-white text-center flex">
        <span>We would be honoured to have you</span>
        Join Us or plan a visit
      </h1>
      <p class="text-center text-white outfit-xl-regular">Be part of a growing faith community committed to worship, service, and fellowship.</p>
      <p class="text-center text-white outfit-xl-regular">"Unless the Lord builds the house, the builders labor in vain." - Psalm 127:1</p>
      <div class="text-center">
        <router-link to="/lets-connect" class="rcisa-btn">Let's Connect</router-link>
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
