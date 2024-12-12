import React, { useState } from "react";
import Button from "../Accessibility/Button";

const CreateCourse = () => {
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    videoUrl: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };
  return (
    <div className="w-full h-full p-10 flex  gap-4">
      <div className="w-4/6 h-full bg-purple-600 rounded-xl shadow-xl p-10 flex flex-col justify-around gap-2">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Course title:</h2>
            <input
              type="text"
              onChange={changeHandler}
              name="title"
              placeholder="Enter course title"
              className="input input-bordered w-full rounded-xl focus:ring-2 ring-purple-400"
            />
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Description:</h2>
            <input
              type="text"
              onChange={changeHandler}
              name="description"
              placeholder="Enter course title"
              className="input input-bordered w-full rounded-xl focus:ring-2 ring-purple-400"
            />
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Image url:</h2>
            <input
              type="text"
              onChange={changeHandler}
              name="imageUrl"
              placeholder="Enter course title"
              className="input input-bordered w-full rounded-xl focus:ring-2 ring-purple-400"
            />
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Video url:</h2>
            <input
              type="text"
              onChange={changeHandler}
              name="videoUrl"
              placeholder="Enter course title"
              className="input input-bordered w-full rounded-xl focus:ring-2 ring-purple-400"
            />
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-base-100 rounded-xl shadow-xl p-10">
        <div className="w-full h-[300px] shadow-lg  rounded-xl  overflow-hidden flex flex-col gap-3">
          <video
            src="http://media.w3.org/2010/05/sintel/trailer.mp4"
            autoPlay
            loop
            muted
            controls
            className="w-full h-full"
          ></video>
        </div>
        <br />
        <div className="w-full h-[calc(100%-300px)] truncate text-lg flex flex-col items-center relative gap-3">
          <div className="w-full border-2 rounded-xl p-3">
            <span className="font-bold">Course:&nbsp; </span>
            <span className="text-[16px] font-semibold">{videoData.title}</span>
          </div>
          <div className="w-full border-2 rounded-xl p-3">
            <span className="font-bold">Description:&nbsp; </span>
            <span className="text-[16px] max-w-full text-wrap font-semibold">
              {videoData.description}
            </span>
          </div>
          <Button
            text="Publish"
            className="absolute bottom-0  bg-purple-600 text-white rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
