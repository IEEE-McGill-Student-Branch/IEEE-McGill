import { loadPosts } from '$lib/posts.js';

export async function load() {
	const posts = await loadPosts();
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			date: post.date,
			background: post.background,
			location: post.location,
			shortDesc: post.shortDescription
		}))
	};
}
