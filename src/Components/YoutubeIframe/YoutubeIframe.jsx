const YoutubeIframe = ({
  videoTitle = "",
  channelName = "",
  views = "",
  videoId = "",
  ...rest
}) => {
  return (
    <div {...rest}>
      <div className="youtube-video-wrapper">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="youtube-video-meta">
        {videoTitle}
        <span>- {channelName} </span>
      </p>
    </div>
  );
};

export default YoutubeIframe;
