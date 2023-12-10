<!-- Footer of the page -->
<script>
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
  } from "flowbite-svelte";
  import { DarkMode } from "flowbite-svelte";
  let darkModeClasses =
    "text-grey-300 dark:text-yellow-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-2xl m-0 p-2";
</script>

<Footer footerType="socialmedia">
  <div>
    <div class="grid grid-cols-2 gap-6">
      <!-- RESOURCE SECTION -->
      <div>
        <h2
          class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white"
        >
          Resources
        </h2>
        <hr class="my-2 border-gray-100 sm:mx-auto dark:border-gray-700" />
        <FooterLinkGroup class="grid grid-cols-1 md:grid-cols-3">
          <!-- <FooterLink liClass="mb-4" href="/events">Events</FooterLink> -->
          <FooterLink
            liClass="mb-4"
            href="https://forms.gle/83JgVNWmzafGPjM67"
            target="_blank">Newsletter</FooterLink
          >
          <FooterLink liClass="mb-4" href="/faq">FAQs</FooterLink>
          <FooterLink
          liClass="mb-4 md:col-span-2 col-span-3"
          href="https://www.ieee.org/membership/join/index.html"
          >Become an IEEE Student</FooterLink
          >
          <FooterLink
            liClass="mb-4 col-span-3"
            href="https://github.com/notkaramel/IEEE-McGill"
            target="">Contribute to this project!</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <!-- SOCIAL MEDIA SECTION -->
      <div>
        <h2
          class="mb-3 text-sm font-semibold uppercase text-gray-900 dark:text-white"
        >
          Follow us
        </h2>
        <hr class="my-2 border-gray-100 sm:mx-auto dark:border-gray-700" />

        <FooterLinkGroup class="grid md:grid-cols-3">
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
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-2 border-gray-300 sm:mx-auto dark:border-gray-700" />
  <div class="inline-flex">
    <div class="text-center mr-5">
      <DarkMode btnClass={darkModeClasses} />
    </div>
    <div class="col-span-3 self-center justify-self-start">
      <FooterCopyright
        by="IEEE McGill SB."
        year={2023}
        copyrightMessage={"All Rights Reserved."}
      />
    </div>
  </div>
</Footer>
