import React, { useEffect, useState } from "react";
import Authors from "./Authors";
import Communities from "./Communities";
import MediumStory from "./MediumStory";
import ShortStory from "./ShortStory";
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
      {stories.slice(0, 1).map((story) => (
        <ShortStory key={story.created} story={story}></ShortStory>
      ))}
      {stories.slice(2, 3).map((story) => (
        <MediumStory key={story.created} story={story}></MediumStory>
      ))}
      {stories.slice(3, 4).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <Authors />
      {stories.slice(1, 2).map((story) => (
        <ShortStory key={story.created} story={story}></ShortStory>
      ))}
      {stories.slice(4, 5).map((story) => (
        <MediumStory key={story.created} story={story}></MediumStory>
      ))}
      {stories.slice(5, 6).map((story) => (
        <Story key={story.created} story={story}></Story>
      ))}
      <Communities />
    </div>
  );
};

export default Stories;
