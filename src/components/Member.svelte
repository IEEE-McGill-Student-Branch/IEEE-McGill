<script>
  let { profilepic, name, pronouns, role, email } = $props();
</script>

<style>
  .member-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .member-card:hover {
    transform: translateY(-8px);
  }

  .member-card:hover .profile-image {
    transform: scale(1.05);
  }

  .profile-image {
    transition: transform 0.3s ease;
  }

  .profile-container::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, var(--color-rose-main), var(--color-rose-light));
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .member-card:hover .profile-container::before {
    opacity: 1;
  }
</style>

<article
  class="member-card flex flex-col items-center bg-white dark:bg-slate-800 rounded-2xl p-6 
         shadow-lg hover:shadow-2xl hover:shadow-rose-500/10 
         border border-gray-100 dark:border-slate-600"
>
  <!-- Profile Picture -->
  <div class="profile-container relative mb-5">
    <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700">
      {#if profilepic}
        <img
          src={profilepic}
          alt="{name}'s profile picture"
          class="profile-image w-full h-full object-cover"
        />
      {:else}
        <div class="w-full h-full flex items-center justify-center">
          <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      {/if}
    </div>
  </div>

  <!-- Info -->
  <div class="text-center flex-1 flex flex-col">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
      {name}
    </h3>

    {#if pronouns}
      <p class="text-gray-500 dark:text-gray-300 text-sm mb-2">
        {pronouns}
      </p>
    {/if}

    <p class="text-rose-500 dark:text-rose-300 font-medium mb-4">
      {role}
    </p>

    <!-- Email -->
    {#if email}
      <a
        href="mailto:{email}"
        class="mt-auto inline-flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-200 
               hover:text-rose-500 dark:hover:text-rose-300 transition-colors group"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="group-hover:underline">{email}</span>
      </a>
    {/if}
  </div>
</article>
