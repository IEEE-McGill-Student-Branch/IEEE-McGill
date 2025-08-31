<script>
  import Member from "$components/Member.svelte";
  import Section from "$components/Section.svelte";
  import GroupPicture from "$images/exec/IEEE-AllExecs.jpg";
  let { data } = $props();
</script>

<title>Meet the team!</title>

<h1 class="text-3xl text-center py-4 font-semibold">Meet the team!</h1>

<Section>
  <!-- Group Picture -->
  <div class="flex justify-center">
    <img
      src={GroupPicture}
      alt="IEEE group"
      id="groupPic"
      class="w-[90vw] border-4 border-spacing-1 rounded-lg border-solid border-rose-400 dark:border-rose-900"
    />
  </div>

  <!-- Members Section -->
  <div class="flex flex-wrap justify-center m-0">
    {#each data.members as member}
      <Member
        name={member.name}
        email={member.email}
        pronouns={member.pronouns}
        profilepic={member.profilepic}
        role={member.role}
      />
    {/each}
  </div>
</Section>
