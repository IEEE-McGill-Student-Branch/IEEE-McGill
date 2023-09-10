<script>
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  import GroupPicture from "$images/IEEEexec-5293.jpg";
  export let data;
</script>

<title>Meet the team!</title>

<h1>Meet the team!</h1>
<Section>
  <img src={GroupPicture} alt="IEEE group" id="groupPic"/>

  <div class="memberDiv">
    {#each data.members as member}
      <Member email={member.email}>
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
        <div slot="email">{member.email}</div>
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
    @apply flex flex-wrap justify-center m-0;
  }

  #profilepic {
    width: min(24rem, 100vw);
    @apply shadow-gray-500 drop-shadow-lg py-2;
  }

  #groupPic {
    @apply border-4 border-spacing-1 rounded-lg;
    border: #da5555af 5px solid;
  }
</style>
