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
        
        <div slot=logo>
          <img src={sponsor.logo} alt={sponsor.name} />
        </div>
        <h2 slot=name>{sponsor.name}</h2>
        
        <a slot=link href={sponsor.link}>Learn More</a>
      </Sponsor>
    {/each}
  </div>
</Section>
