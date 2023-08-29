import { sponsors } from '$lib/sponsors.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        sponsors
    };
}