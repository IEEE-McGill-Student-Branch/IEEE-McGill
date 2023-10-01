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
  <div>
    {#each data.sponsors as sponsor}
      <!-- <Sponsor sponsorLink={sponsor.link}> -->
      <Sponsor>
        <div slot="logo">
          <img src={sponsor.logo} alt={sponsor.name} />
        </div>
      </Sponsor>
    {/each}
  </div>
</Section>

<style lang="postcss">
  img {
    @apply h-40;
  }
</style>
