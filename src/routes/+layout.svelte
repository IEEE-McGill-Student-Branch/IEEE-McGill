<script>
    import Navbar from "$components/Navbar.svelte";
    import Footer from "$components/Footer.svelte";
    import "../app.css";
</script>

<style lang="postcss">
    /* Common style among pages for standardization */
    :global(body) {
        font: 16px;
        @apply ring-red-200 font-sans m-0;
        overflow: scroll;
    }
</style>
<Navbar/>
<slot/>
<Footer/>

