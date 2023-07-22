<script>
    import Navbar from "$components/Navbar.svelte";
    import "../app.css";
</script>

<style lang="postcss">
    /* Common style among pages for standardization */
    :global(body) {
        font: 16px monospace;
        margin: 0;
        //padding: 0 10vh;
        background-color: theme(colors.gray.100);
        overflow: scroll;
    }
</style>

<Navbar/>
<slot/>


