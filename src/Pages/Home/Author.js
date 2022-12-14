import React from "react";

const Author = ({ author }) => {
  return (
    <>
      <div className="bg-slate-700 my-2 flex flex-row justify-between px-2">
        {/* 1st - avatar */}
        <div className="flex">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={author.profileImage} alt="author" />
            </div>
          </div>
          <div className="grid m-0">
            <div className="flex align-middle">
              <p className="text-white">{author.name}</p>
              <p className="text-white text-opacity-50 ml-2">
                {author.summary.stories} stories
              </p>
            </div>
            <div>
              <p className="text-white text-opacity-75">{author.bio}</p>
            </div>
          </div>
        </div>
        {/* 2nd - followers */}
        <div>
          <div className="flex">
            <p className="text-white mr-2">
              {author.summary.followers} Followers
            </p>
            {author.summary.followers !== 200 ? (
              <p className="text-blue-600">Follow</p>
            ) : (
              <p className="text-white text-opacity-50">Follow</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
