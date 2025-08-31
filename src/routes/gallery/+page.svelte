<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Section from "$components/Section.svelte";
    /**
     * @param x {any}
     */
    const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });

    
    /**
     * @typedef {Object} Props
     * @property {import('./$types').PageData} data
     */

    /** @type {Props} */
    let { data } = $props();
</script>

<title>Gallery</title>

<h1> PAGE IS UNDER DEVELOPMENT :) </h1>

<Section>
    <Carousel
        images={data.images}
        transition={scaleAnimation}
        
        
        class="h-1/2"
    >
        {#snippet children({ Controls, Indicators })}
                <Controls />
            <Indicators />
                    {/snippet}
        </Carousel>
    <Thumbnails class="bg-transparent gap-3"   images={data.images}>
        {#snippet children({ Thumbnail, image })}
                <Thumbnail {...image} class="h-16 rounded-md shadow-xl hover:outline-solid hover:outline-primary-500" activeClass="outline outline-primary-400"/>
                    {/snippet}
        </Thumbnails>
</Section>
