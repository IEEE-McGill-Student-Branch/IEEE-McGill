import { error } from "@sveltejs/kit";
import { posts } from "$lib/posts.js";
import { marked } from "marked";

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  if (!post.content) {
    throw Error("Post content not found");
  }

  let postContent = marked.parse(post.content);

  return {
    post,
    postContent,
  };
}
