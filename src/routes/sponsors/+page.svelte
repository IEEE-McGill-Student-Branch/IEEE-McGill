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
        <h2 slot=name>{sponsor.name}</h2>

        <div slot=logo>
          <img src={sponsor.logo} alt={sponsor.name} />
        </div>
        
        <a slot=link href={sponsor.link}>Learn More</a>
      </Sponsor>
    {/each}
  </div>
</Section>
