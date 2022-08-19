import React, { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const url = `story.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);
  return (
    <div className="mt-2">
      {stories.slice(0, 3).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <h2>description</h2>
      {stories.slice(3, 6).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <h2>description</h2>
    </div>
  );
};

export default Stories;
