import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { API } from "./assets/api";

export default function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [token, setToken] = useState("");
  console.log(token);

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    }
  }

  async function fetchPosts() {
    const res = await fetch(`${API}/posts`);
    const info = await res.json();
    setPosts(info.posts);
  }

  async function fetchSubreddits() {
    const res = await fetch(`${API}/subreddits/`);
    const info = await res.json();
    setSubreddits(info.subreddits);
  }

  useEffect(() => {
    fetchUser();
    fetchPosts();
    fetchSubreddits();
  }, [token]);
  return (
    <>
      <div>
        <Navbar user={user} setToken={setToken} setUser={setUser} />
        <Outlet
          context={{
            posts,
            fetchPosts,
            fetchSubreddits,
            subreddits,
            setToken,
            user,
          }}
        />
      </div>
    </>
  );
}
