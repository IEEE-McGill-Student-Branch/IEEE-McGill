import { loadPosts } from '$lib/posts.js';

/**
 * @typedef {Object} Post
 * @property {string} slug - Unique identifier for the post
 * @property {string} title - Title of the post
 * @property {string} date - Date of the event
 * @property {string} location - Location of the event
 * @property {string} background - Background image URL
 * @property {string} shortDescription - Short description of the event
 * @property {string} content - Full markdown content of the post
 */

export async function load() {
	const posts = await loadPosts();
	return {
		summaries: posts.map(
			/**
			 * @param {Post} post - Post object with slug, title, date, background, location, and shortDescription
			 */
			(post) => ({
				slug: post.slug,
				title: post.title,
				date: post.date,
				background: post.background,
				location: post.location,
				shortDesc: post.shortDescription
			})
		)
	};
}
