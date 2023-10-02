import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Subreddit from "./Subreddit";

export default function Subreddits() {
  const { subreddits, token, fetchPosts, user, posts, fetchSubreddits } =
    useOutletContext();
  const { subredditName } = useParams();
  const filteredPosts = posts
    ? posts.filter((post) => post.subredditName === subredditName)
    : [];
  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>Author: {post.user.username}</p>
          <button onClick={() => handleLike(summary)}>
            👍{summary.likes.length}
          </button>
        </div>
      ))}
    </div>
  );
}
