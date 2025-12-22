import { error } from "@sveltejs/kit";
import { loadPosts } from "$lib/posts.js";
import { marked } from "marked";

export async function load({ params }) {
  const posts = await loadPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) error(404);

  if (!post.content) {
    throw Error("Post content not found");
  }

  let postContent = marked.parse(post.content);

  return {
    post,
    postContent,
  };
}
