<script>
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  export let data;
</script>

<title>Contact</title>

<Section>
  <div class="memberDiv">
    {#each data.membersInfo as member}
      <Member memberID={member.id}>
        <!-- <div slot="profilepic">
          <img class="profilepic" src={member.imageSrc} alt={member.id} />
        </div> -->
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

  .profilepic {
    width: 12rem;
  }

  .memberDiv {
    @apply flex flex-wrap justify-center p-4;
  }
</style>
