import React, { useEffect, useState } from "react";

const ShortStory = ({ story }) => {
  const hash = story.hashtags;

  return (
    <div className="mb-2 bg-black">
      <div className="hero h-80 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://avatars.githubusercontent.com/u/61946723?v=4"
            className="max-w-sm h-[300px] rounded-lg shadow-2xl"
            alt="author"
          />
          <div>
            <h1 className="text-3xl font-bold">{story.title}</h1>
            <div className="flex flex-row justify-between py-10">
              {/* 1st avatar */}
              <div className="flex">
                <div className="avatar">
                  <div className="w-9 h-9 rounded-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/61946723?v=4"
                      alt="author"
                    />
                  </div>
                </div>
                <div className="ml-2 mt-2">
                  <p className="font-bold">{story.author.name}</p>
                </div>
              </div>

              {/* 3rd - Travel for explore */}
              <div className="mt-2">
                <p className="font-bold">Travel for explore</p>
              </div>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div className="divider"></div>
            <div className="flex flex-row justify-items-end">
              {/* 1st avatar */}
              {/* <div className="">
                <div className="avatar">
                  <div className="w-9 h-9 rounded-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/61946723?v=4"
                      alt="author"
                    />
                  </div>
                  <div className="ml-2 mt-2">
                    <p>{story.author.name}</p>
                  </div>
                </div>
              </div> */}
              {/* 2nd - date */}
              <div className=" text-black">
                <p className="text-black text-opacity-50">
                  {story.created} | {story.readTime}
                </p>
              </div>
              {/* 3rd - Travel for explore */}
              <div className="ml-2">
                <p>
                  {hash[0]} {hash[1]} {hash[2]} {hash[3]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortStory;
