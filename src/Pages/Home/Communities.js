import React, { useEffect, useState } from "react";
import Community from "./Community";

const Communities = () => {
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    const url = `community.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCommunities(data));
  }, []);

  return (
    <>
      <div className="mt-2 pt-4 bg-black">
        <h5 className="text-white text-xl">Amazing Communities to follow</h5>
        <div className="grid">
          {communities.map((community) => (
            <Community key={community.summary.authors} community={community} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Communities;
