import React, { useEffect, useState } from "react";
import Authors from "./Authors";
import Communities from "./Communities";
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
    <div className="">
      {stories.slice(0, 3).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <Authors />
      {stories.slice(3, 6).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <Communities />
    </div>
  );
};

export default Stories;
