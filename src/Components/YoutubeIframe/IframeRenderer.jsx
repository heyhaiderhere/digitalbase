import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import YoutubeIframe from "./YoutubeIframe";

const IframeRenderer = ({ endpoint }) => {
  const [user] = useContext(AuthContext);
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const video = await axios.post(
        `http://localhost:5500/youtube/${endpoint}`,
        {
          tokens: user.token,
        }
      );

      setVideoData(video.data);
    };
    if (endpoint) {
      fetchData();
    }
  }, []);
  return (
    <div>
      {Array.isArray(videoData)
        ? videoData?.map((video) => (
            <YoutubeIframe
              videoId={video.videoId}
              videoTitle={video.videoTitle}
              channelName={video.channelTitle}
            />
          ))
        : null}
    </div>
  );
};

export default IframeRenderer;
