<script>
  import Section from "$components/Section.svelte";
  import Sponsor from "$components/Sponsor.svelte";
  let { data } = $props();
</script>

<head>
  <title>Our Sponsors</title>
</head>

<Section>
  <h1 class="text-2xl font-bold text-center">Special thanks to our sponsors throughout our events!</h1>
  <div class="flex flex-row flex-wrap place-content-center place-items-center gap-10">
    {#each data.sponsors as sponsor}
      <Sponsor sponsorLink={sponsor.link}>
        {#snippet logo()}
          <div>
            <img class="grid place-self-center h-32 m-4" src={sponsor.logo} alt={sponsor.name} />
          </div>
        {/snippet}
      </Sponsor>
    {/each}
  </div>
</Section>