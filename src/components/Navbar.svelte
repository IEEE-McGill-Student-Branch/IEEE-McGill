<script>
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import IEEELogo from '$images/small_logo.png';

  let NavItemClass = 'dark:active:bg-rose-200 text-xl';
  $: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle rounded class="m-3 w-auto shadow-lg border-2 border-solid border-red-400">
  <NavBrand href="/">
    <img src={IEEELogo} class="mr-3 h-6 sm:h-9" alt="IEEE McGill Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IEEE McGill</span>
  </NavBrand>

  <NavHamburger on:click={toggle} />
  <NavUl {hidden} {activeUrl}>
    <NavLi class={NavItemClass} href="/">Home</NavLi>
    <NavLi class={NavItemClass} href="/events">Events</NavLi>
    <NavLi class={NavItemClass} href="/members">Members</NavLi>
  </NavUl>
</Navbar>
