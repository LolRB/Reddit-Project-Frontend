import React from "react";

export default function CreateSubreddit() {
  const [inputValue, setInputValue] = useState("");
  const [subreddits, setSubreddits] = useState([]);

  async function fetchSubreddits() {
    const res = await fetch(`${API}/subreddits`);
    const info = await res.json();
    console.log(info);
    setSubreddits(info.messages);
  }

  async function handleCeateSubreddit(e) {
    e.preventDefault();

    const res = await fetch(`${API}/subreddits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: inputValue,
      }),
    });
    const info = await res.json();
    if (info.sucess) {
      fetchSubreddits();
      setInputValue("");
    }
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  }

  useEffect(() => {
    fetchSubreddits();
  }, []);

  return <div></div>;
}
