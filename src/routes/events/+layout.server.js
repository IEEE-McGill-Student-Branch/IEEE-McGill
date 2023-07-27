import { posts } from '$lib/posts.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			date: post.date,
			location: post.location,
			shortDesc: post.shortDescription
		}))
	};
}
