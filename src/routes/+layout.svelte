<script>
    import Navbar from "$components/Navbar.svelte";
    import TempNav from "$components/TempNav.svelte";
    import Footer from "$components/Footer.svelte";
    import "../app.css";
</script>

<style lang="postcss">
    /* Common style among pages for standardization */
    :global(body) {
        font: 16px;
        /* padding: 0 10vh; */
        @apply ring-red-200 font-sans m-0;
        overflow: scroll;
    }
</style>
<Navbar/>
<!-- <TempNav/> -->
<slot/>
<Footer/>

