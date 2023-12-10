<script>
    import { Carousel, Thumbnails } from "flowbite-svelte";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Section from "$components/Section.svelte";
    /**
     * @param x {any}
     */
    const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<title>Gallery</title>

<h1> PAGE IS UNDER DEVELOPMENT :) </h1>

<Section>
    <Carousel
        images={data.images}
        transition={scaleAnimation}
        let:Controls
        let:Indicators
        class="h-1/2"
    >
        <Controls />
        <Indicators />
    </Carousel>
    <Thumbnails class="bg-transparent gap-3" let:Thumbnail let:image images={data.images}>
        <Thumbnail {...image} class="h-16 rounded-md shadow-xl hover:outline hover:outline-primary-500" activeClass="outline outline-primary-400"/>
    </Thumbnails>
</Section>
