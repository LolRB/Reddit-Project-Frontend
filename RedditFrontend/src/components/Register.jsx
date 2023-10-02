import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../assets/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setToken } = useOutletContext();

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();
    if (!info.success) {
      return setError(info.error);
    }
    // Authentication
    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/");
    console.log(info);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username.."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password.."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Register</button>
        <p>{error}</p>
      </form>
    </div>
  );
}
