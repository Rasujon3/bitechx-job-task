import React, { useEffect, useState } from "react";
import Author from "./Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const url = `users.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  return (
    <>
      <div className="mt-2 bg-black">
        <h5 className="text-white text-xl">Amazing Authors to follow</h5>
        <div className="grid">
          {authors.map((author) => (
            <Author key={author.summary.stories} author={author} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Authors;
