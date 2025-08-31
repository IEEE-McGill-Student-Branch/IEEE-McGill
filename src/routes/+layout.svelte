<script>
    import Navbar from "$components/Navbar.svelte";
    import Footer from "$components/Footer.svelte";
    import "../app.css";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
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
{@render children?.()}
<Footer/>

