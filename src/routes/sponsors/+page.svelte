<script>
  import Section from "$components/Section.svelte";
  import Sponsor from "$components/Sponsor.svelte";
  export let data;
</script>

<head>
  <title>Our Sponsors</title>
</head>

<Section>
  <h1>Special thanks to our sponsors throughout our events!</h1>
  <div class="flex justify-center flex-row flex-wrap">
    {#each data.sponsors as sponsor}
      <Sponsor sponsorLink={sponsor.link}>
        <div slot="logo">
          <img class="logo" src={sponsor.logo} alt={sponsor.name} />
        </div>
      </Sponsor>
    {/each}
  </div>
</Section>

<style lang="postcss">
  h1 {
    @apply text-2xl font-bold text-center;
  }
  
  .logo {
    @apply flex items-center object-cover object-center w-32;
    /* width: 20vw;
    min-height: 20vw; */
  }
</style>
