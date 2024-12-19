import React, { useRef, useState } from "react";
import Button from "../Accessibility/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCourse = () => {
  const [duration, setDuration] = useState(null);
  const videoRef = useRef(null);

  const handleMetadataLoaded = () => {
    if (videoRef.current) {
      const totalSeconds = videoRef.current.duration;

      // Calculate minutes and seconds
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = (totalSeconds % 60).toFixed(0); // Round to 2 decimal places

      // Format as MM:SS
      setDuration(`${minutes}:${seconds}`);
    }
  };

  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    navigate("/");
  }

  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    // imageUrl: "",
    videoUrl: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const tutorId = localStorage.getItem("tutorId");
    videoData.authorId = tutorId;
    videoData.duration = duration;
    const response = await axios.post(
      `${process.env.REACT_APP_BaseURL}api/createCourse`,
      videoData
    );
    console.log(response);
  };

  return (
    <div className="w-full h-full p-10 flex ">
      <form
        method="POST"
        className="w-full h-full flex  gap-4"
        onSubmit={submitHandler}
      >
        <div className="w-4/6 h-full bg-purple-600 rounded-xl shadow-xl p-10 flex flex-col justify-around gap-2">
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
          </div>{" "}
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
          {/* <div className="card  bg-base-100 shadow-xl">
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
        </div> */}
        </div>
        <div className="w-2/6 bg-base-100 rounded-xl shadow-xl p-10">
          <div className="w-full h-[300px] shadow-lg  rounded-xl  overflow-hidden flex flex-col gap-3">
            <video
              ref={videoRef}
              onLoadedMetadata={handleMetadataLoaded}
              // src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              src={videoData.videoUrl ? videoData.videoUrl : "null"}
              autoPlay
              loop
              muted
              controls
              className="w-full h-full"
            ></video>
          </div>
          <br />
          <div className="w-full h-[calc(100%-300px)] truncate text-lg flex flex-col items-center relative gap-3">
            <div className="w-full border-2 rounded-xl p-3 max-h-[200px] overflow-hidden overflow-y-scroll">
              <span className="font-bold ">Course:&nbsp; </span>
              <span className="text-sm text-wrap max-w-full">
                {videoData.title}
              </span>
            </div>
            <div className="w-full border-2 rounded-xl p-3 max-h-[200px] overflow-hidden overflow-y-scroll">
              <span className="font-bold ">Description:&nbsp; </span>
              <span className="text-sm  max-w-full text-wrap ">
                {videoData.description}
              </span>
            </div>
            {duration !== null && <p>Duration: {duration} seconds</p>}
            <Button
              text="Publish"
              className="absolute bottom-0  bg-purple-600 text-white rounded-lg shadow-xl"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
