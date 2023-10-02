import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Subreddit({ subreddit, user }) {
  const canDelete = user && user.id === subreddit.userId;
  const { subreddits } = useOutletContext();
  const { subredditId } = useParams();
  //   const subreddit = subreddits.find(
  //     (_subreddit) => _subreddit.id === +subredditId
  //   );
  return (
    <div>
      <div>
        <h1>{subreddit.name}</h1>
      </div>
      {canDelete && <button>Delete</button>}
    </div>
  );
}
