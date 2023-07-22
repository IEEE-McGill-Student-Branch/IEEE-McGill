import { sponsors } from '$lib/sponsors';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        sponsors
    };
}