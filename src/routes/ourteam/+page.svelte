<script>
  import Member from "$components/Member.svelte";
  import GroupPicture from "$images/exec/IEEE-AllExecs.jpg";
  let { data } = $props();
</script>

<svelte:head>
  <title>Our Team | IEEE McGill</title>
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Page Header -->
  <div class="py-12 px-4 border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
        Meet Our Team
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Meet the passionate students behind the executive team of IEEE McGill!
      </p>
    </div>
  </div>

  <!-- Group Photo Section -->
  <div class="py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <img
          src={GroupPicture}
          alt="IEEE McGill Executive Team"
          class="w-full object-cover"
        />
      </div>
    </div>
  </div>

  <!-- Team Members Section -->
  <div class="py-12 px-4 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">
          Executive Team
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Get to know the people who make IEEE McGill possible.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each data.members as member, i}
          <div class="fade-in" style="animation-delay: {0.05 * i}s;">
            <Member
              name={member.name}
              email={member.email}
              pronouns={member.pronouns}
              profilepic={member.profilepic}
              role={member.role}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="py-12 px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Join The Team!
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        We're always looking for passionate students to help us grow.
      </p>
      <a 
        href="mailto:ieee@mcgilleus.ca"
        class="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl 
               transition-all duration-200 hover:-translate-y-0.5"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Get in Touch
      </a>
    </div>
  </div>
</div>
