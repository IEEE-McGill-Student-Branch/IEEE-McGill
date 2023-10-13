<script>
  import Section from "$components/Section.svelte";
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<head>
  <title>FAQ</title>
</head>

<Section>
  <h1>Frequently Asked Questions</h1>

  <Accordion multiple>
    <AccordionItem class="flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700">
      <span slot="header">How to register for IEEE Student Membership?</span>
      <p class="mb-2 text-black dark:text-gray-200">
        Follow the link to <a href="htstps://www.ieee.org/membership/join/index.html" target="_blank" class="underline text-rose-600 dark:text-rose-200">IEEE Membership</a>
        and select <b> "Join as a student"</b>. Follow the steps to create your account! <br>
        <!-- Don't forget to use a discount code at checkout if you have one! (psst, we have one below!) -->
      </p>

      <p class="text-black dark:text-gray-200"></p>
    </AccordionItem>

    <AccordionItem>
      <div slot="header">Is there any discount for the membership?</div>
      <p class="mb-2 text-black dark:text-gray-200">
        <!-- Yes! Use code <b class="text-rose-600 dark:text-rose-200">FUTURE50</b> at registration checkout for 50% discount! -->
        Unfortunately, there is no discount code available at the moment :( <br>
      </p>
    </AccordionItem>

    <AccordionItem>
      <div slot="header">How can I get updates on events by IEEE McGill?</div>
      <p class="text-black dark:text-gray-200">
        You can sign up to our newsletter at
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBLRxNxYmR7UxWEuJAscu5ZIueQRd3guV9stMVClLK3zghig/viewform"
          target="_blank"
          class="underline text-rose-600 dark:text-rose-300"
        >
          our newsletter
        </a>
      </p>
    </AccordionItem>
  </Accordion>
</Section>

<style lang="postcss">
  h1 {
    @apply text-2xl text-center font-semibold px-4 mt-4 mb-8;
  }
</style>
