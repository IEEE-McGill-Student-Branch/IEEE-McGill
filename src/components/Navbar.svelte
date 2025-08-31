<script>
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import IEEELogo from '$images/small_logo.png';

  let NavItemClass = 'text-xl';
  let activeUrl = $derived($page.url.pathname);
</script>

<Navbar   rounded class="m-3 p-3 md:p-0 w-auto shadow-lg border-2 border-solid border-red-300 bg-rose-50">
  {#snippet children({ hidden, toggle })}
    <NavBrand href="/">
      <img src={IEEELogo} class="m-3 h-6 md:h-9" alt="IEEE McGill Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IEEE McGill</span>
    </NavBrand>

    <NavHamburger on:click={toggle} />
    <NavUl {hidden} {activeUrl}>
      <NavLi class={NavItemClass} href="/">Home</NavLi>
      <NavLi class={NavItemClass} href="/events">Events</NavLi>
      <!-- <NavLi class={NavItemClass} href="/gallery">Gallery</NavLi> -->
      <NavLi class={NavItemClass} href="/ourteam">Our Team</NavLi>
      <NavLi class={NavItemClass} href="/faq">FAQs</NavLi>
      <NavLi class={NavItemClass} href="/sponsors">Sponsors</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
