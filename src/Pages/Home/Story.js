import React from "react";

const Story = ({ story }) => {
  return (
    <div className="mb-2 bg-black">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[100%] h-[150px]"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>{story.content}</p>
        </div>
        <div className="divider"></div>
        {/* after divider */}
        <div className="flex flex-row justify-around">
          {/* 1st avatar */}
          <div className="">
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
          </div>
          {/* 2nd - date */}
          <div className="mt-2 text-black">
            <p className="text-black text-opacity-50">{story.created}</p>
          </div>
          {/* 3rd - Travel for explore */}
          <div className="mt-2">
            <p>Travel for explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
