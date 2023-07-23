<script>
  import { fade, draw, fly } from 'svelte/transition';
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  import GroupPicture from "$images/IEEEexec-5293.png";
  export let data;
</script>

<title>Meet the team</title>

<Section>
  <h1>Meet the team</h1>
  <img src={GroupPicture} alt="IEEE group"/>
  <div class="memberDiv">
    {#each data.members as member}
      <Member>
        <div slot="profilepic">
          <img
            id="profilepic"
            src={member.profilepic}
            alt="{member.name} pic"
          />
        </div>
        <div id="name" slot="name">{member.name}</div>
        <div slot="pronouns">{member.pronouns}</div>
        <div slot="role">{member.role}</div>
      </Member>
    {/each}
  </div>
</Section>

<!-- CONTACT PAGE -->

<style lang="postcss">
  * {
    transition: all 1s ease-in-out;
  }

  h1 {
    @apply text-4xl text-center py-4 font-semibold;
  }

  .memberDiv {
    @apply flex flex-wrap justify-center p-4;
  }

  #name {
    @apply text-2xl;
  }

  #profilepic {
    width: 16rem;
    margin: 0 1em 0 0;
  }
</style>
