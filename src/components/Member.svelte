<script>
  let { profilepic, name, pronouns, role, email } = $props();
</script>

<article
  class="flex flex-col items-center w-80 rounded-md p-4 m-4 border-4 border-rose-400 dark:border-rose-900 shadow-lg"
>
  <div>
    <img
      id="profilepic"
      src={profilepic}
      alt="{name} profile picture"
      class="shadow-gray-500 drop-shadow-lg py-2"
    />
  </div>

  <div class="text-center">
    <p class="text-xl font-semibold font-sans">
      {name}
    </p>

    <p class="text-base">
      {pronouns}
    </p>

    <p class="text-lg">
      {role}
    </p>

    <a
      href="mailto:{email}"
      class="text-base text-rose-700 underline dark:text-rose-300"
    >
      {email}
    </a>
  </div>
</article>
