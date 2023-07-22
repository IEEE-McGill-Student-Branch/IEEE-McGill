<script>
  import Section from "$components/Section.svelte";
  import Sponsor from "$components/Sponsor.svelte";
  export let data;
</script>

<head>
  <title>Sponsors</title>
</head>

<Section>
  <h1>SPONSOR PAGE</h1>
  <div>
    {#each data.sponsors as sponsor}
      <Sponsor>
        <img src={sponsor.imageSrc} alt={sponsor.name} />
        <h2>{sponsor.name}</h2>
        <a href={sponsor.link}>Learn More</a>
      </Sponsor>
    {/each}
  </div>
</Section>
