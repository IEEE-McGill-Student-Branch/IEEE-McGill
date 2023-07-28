<script>
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  import GroupPicture from "$images/IEEEexec-5293.jpg";
  export let data;
</script>

<title>Meet the team!</title>

  <h1>Meet the team!</h1>
<Section>
  <div class="memberDiv">
    {#each data.members as member}
      <Member>
        <div slot="profilepic">
          <img
            id="profilepic"
            src={member.profilepic}
            alt="{member.name} profile picture"
          />
        </div>
        <div slot="name">{member.name}</div>
        <div slot="pronouns">{member.pronouns}</div>
        <div slot="role">{member.role}</div>
      </Member>
    {/each}
  </div>
  <img src={GroupPicture} alt="IEEE group"/>

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

  #profilepic {
    width: 27rem;
    @apply shadow-gray-500 drop-shadow-lg py-2;
  }
</style>
