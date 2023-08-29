import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts.js';
import MarkdownIt from 'markdown-it';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	let md = new MarkdownIt();
	let postContent = md.render(post.content);

	return {
		post, postContent
	};
}
