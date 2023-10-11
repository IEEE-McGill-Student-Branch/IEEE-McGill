<script>
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  import GroupPicture from "$images/exec/IEEEexec-5293.jpg";
  export let data;
</script>

<title>Meet the team!</title>

<h1>Meet the team!</h1>
<Section>
  <div class="flex justify-center">
    <img src={GroupPicture} alt="IEEE group" id="groupPic"/>
  </div>

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
    @apply text-3xl text-center py-4 font-semibold;
  }

  .memberDiv {
    @apply flex flex-wrap justify-center m-0;
  }

  #profilepic {
    @apply shadow-gray-500 drop-shadow-lg py-2;
  }

  #groupPic {
    width: 90vw;
    @apply border-4 border-spacing-1 rounded-lg;
    @apply border-solid border-rose-400 dark:border-rose-900;
    @apply border-spacing-0;
  }
</style>
