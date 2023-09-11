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
    <AccordionItem>
      <span slot="header">How to register for IEEE Student Membership?</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>

      <p class="text-gray-500 dark:text-gray-400">More instructions...</p>
    </AccordionItem>

    <AccordionItem>
      <div slot="header">Is there any discount for the membership?</div>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Yes! Use code <b>WELCOME50</b> at registration checkout for 50% discount!
      </p>
    </AccordionItem>

    <AccordionItem>
      <div slot="header">How can I get updates on events by IEEE McGill?</div>
      <p>
        You can sign up to our newsletter at
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBLRxNxYmR7UxWEuJAscu5ZIueQRd3guV9stMVClLK3zghig/viewform"
          target="_blank"
          class="underline text-rose-800 dark:text-rose-300"
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
