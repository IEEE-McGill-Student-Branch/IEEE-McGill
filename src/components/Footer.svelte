<!-- Footer of the page -->
<script>
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
  } from "flowbite-svelte";
  import { DarkMode } from 'flowbite-svelte';
  let darkModeClasses = 'text-grey-300 dark:text-yellow-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-2xl m-0 p-2';
</script>

<Footer footerType="socialmedia">
  <div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <!-- RESOURCE SECTION -->
        <h2
          class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
        >
          Resources
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/events">Upcoming Events</FooterLink>
          <FooterLink
            liClass="mb-4"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBLRxNxYmR7UxWEuJAscu5ZIueQRd3guV9stMVClLK3zghig/viewform"
            target="_blank">Our newsletter</FooterLink
          >
          <FooterLink liClass="mb-4" href="/sponsors">Our Sponsors</FooterLink>
        </FooterLinkGroup>
      </div>
      <!-- SOCIAL MEDIA SECTION -->
      <div>
        <h2
          class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
        >
          Follow us
        </h2>
        <FooterLinkGroup>
          <FooterLink
            liClass="mb-4"
            href="https://www.instagram.com/ieeemcgill/"
            target="_blank">Instagram</FooterLink
          >
          <FooterLink
            liClass="mb-4"
            href="https://www.facebook.com/mcgillieeesb"
            target="_blank">Facebook</FooterLink
          >
          <FooterLink
            liClass="mb-4"
            href="https://github.com/IEEE-McGill-Student-Branch"
            target="_blank">GitHub</FooterLink
          >
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright by="IEEE McGill Student Branch." year={2023}/>
    <DarkMode btnClass={darkModeClasses}/>
  </div>
</Footer>