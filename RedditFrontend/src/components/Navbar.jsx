import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ user, setToken, setUser }) => {
  function handleLogout() {
    setToken("");
    setUser([]);
    localStorage.removeItem("token");
  }

  return (
    <div className="navbar-container">
      <i className="fa-brands fa-reddit fa-2xl"></i>
      <Link to={"/"}>Home</Link>
      <Link to={"/subreddits"}>Subreddits</Link>
      <Link to={"/subreddits/create-subreddit"}>CreateSubreddit</Link>
      <Link to={"/create-post"}>CreatePost</Link>

      {!user.id ? (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      ) : (
        <>
          <span>Welcome {user.username}</span>
          <Link onClick={handleLogout} to={"/"}>
            Logout
          </Link>
        </>
      )}
    </div>
  );
};
