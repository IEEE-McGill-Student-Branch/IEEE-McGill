<script>
  import { page } from "$app/state";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import IEEELogo from "$images/small_logo.png";

  let NavItemClass = "text-xl font-bold";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar
  class="m-3 p-3 md:p-0 w-auto shadow-lg bg-rose-50 dark:bg-gray-700 rounded-lg"
  fluid={true}
>
  {#snippet children({ toggle })}
    <!-- Logo and Brand Name -->
    <NavBrand href="/" class="flex items-center">
      <img src={IEEELogo} class="m-3 h-6 md:h-9" alt="IEEE McGill Logo" />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        IEEE McGill
      </span>
    </NavBrand>

    <!-- Hamburger Toggle for Mobile -->
    <NavHamburger onclick={toggle} />

    <!-- Navigation Links -->
    <NavUl
      {activeUrl}
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
    >
      <NavLi class={NavItemClass} href="/">Home</NavLi>
      <NavLi class={NavItemClass} href="/events">Events</NavLi>
      <NavLi class={NavItemClass} href="/ourteam">Our Team</NavLi>
      <NavLi class={NavItemClass} href="/faq">FAQs</NavLi>
      <NavLi class={NavItemClass} href="/sponsors">Sponsors</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
