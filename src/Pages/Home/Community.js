import React from "react";

const Community = ({ community }) => {
  return (
    <>
      <div className="bg-slate-700 my-2 flex flex-row justify-between px-2">
        {/* 1st - avatar */}
        <div className="flex">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={community.profileImage} alt="community" />
            </div>
          </div>
          <div className="grid m-0">
            <div className="flex align-middle">
              <p className="text-white">{community.name}</p>
              <p className="text-white text-opacity-50 ml-2">
                {community.summary.stories} stories
              </p>
              <p className="text-white text-opacity-50 ml-2">
                {community.summary.authors} authors
              </p>
            </div>
            <div>
              <p className="text-white text-opacity-75">
                {community.bio.slice(0, 51)} ...
              </p>
            </div>
          </div>
        </div>
        {/* 2nd - followers */}
        <div>
          <div className="flex">
            <p className="text-white mr-2">
              {community.summary.followers} Followers
            </p>
            <p className="text-blue-600">Follow</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
