import { members } from '$lib/team.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        members
    };
}