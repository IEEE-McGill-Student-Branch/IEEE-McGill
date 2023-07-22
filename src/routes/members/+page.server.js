import { members } from '$lib/team.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let membersInfo = members.map((member) => ({
        name: member.name,
        id: member.id,
        role: member.role,
        imageSrc: "/src/images/" + member.id + ".jpg",
        pronouns: member.pronouns,
        email: member.email
    }));
    return {
        membersInfo
    };
}