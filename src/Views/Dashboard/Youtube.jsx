import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Card from "../../Components/Card";
import Chart from "../../Components/Chart";
import Keyword from "../../Components/Keyword";
import Thumbnail from "../../Components/Thumbnail";
import Icon from "../../Components/Icon";
import calendar from "../../Assets/icons/calendar.svg";
import collapse from "../../Assets/icons/collapse.svg";
import thumbnail from "../../Assets/images/thumbnail.jpg";
import IframeRenderer from "../../Components/YoutubeIframe/IframeRenderer";

const Youtube = () => {
  const [user] = useContext(AuthContext);
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        "http://localhost:5500/youtube/channelData",
        {
          tokens: user.token,
          matrics: "views",
        }
      );
      setChannelData(data);
    })();
  }, []);
  const viewCard = (data, cb) => {
    const rows = data?.rows?.map((row) => {
      return row[1];
    });
    const views = rows?.reduce((current, previous) => current + previous);
    return cb(`+${views}`);
  };

  const subscriberCard = (data, cb) => {
    let state = true;
    const subsGainedRow = data?.rows?.map((row) => {
      return row[1];
    });
    const subsLostRow = data?.rows?.map((row) => {
      return row[2];
    });

    const subsGained = subsGainedRow?.reduce(
      (current, previous) => current + previous
    );
    const subsLost = subsLostRow?.reduce(
      (current, previous) => current + previous
    );

    if (subsGained >= subsLost) {
      state = true;
    } else {
      state = false;
    }
    return cb(state ? `+${subsGained}` : `-${subsLost}`);
  };
  return (
    <>
      <div className="outlet-header">
        <div>
          <h1 className="outlet-header-title">Overview</h1>
        </div>
        <div className="outlet-header-filter">
          <Icon src={calendar} margin="0rem 1rem 0rem 0rem" />
          <span>Last 30 Days</span>
          <Icon src={collapse} size={15} margin="0rem 0rem 0rem 1rem" />
        </div>
      </div>
      <div className="outlet-content">
        <Card
          className="outlet-content-card-1"
          heading="Subscribers"
          previous={"136"}
          direction="up"
          matrics="subscribersGained,subscribersLost"
          dataCallback={subscriberCard}
        />
        <Card
          className="outlet-content-card-1"
          heading="Views"
          previous={"241.1K"}
          direction="up"
          matrics="views,annotationClickThroughRate"
          dataCallback={viewCard}
        />
        <Card
          className="outlet-content-card-1"
          heading="Revenue"
          data={"$379900"}
          previous={"255000"}
          direction="up"
        />
        <div className="outlet-content-card-4">
          <div>
            <p className="card-header">Last 3 Videos With Views</p>
            <IframeRenderer endpoint="latestVideos" />
          </div>
        </div>
        <Card heading="User Statistics" className="outlet-content-card-5">
          <Chart
            options={{
              chart: {
                type: "spline",
                height: 150,
                backgroundColor: "#24223b",
              },
              title: {
                text: "",
              },
              xAxis: {
                type: "datetime",
              },
              yAxis: {
                title: {
                  text: "",
                },
                visible: false,
              },
              plotOptions: {
                spline: {
                  lineWidth: 3.5,
                  color: {
                    linearGradient: { x1: 0, x2: 1 },
                    stops: [
                      [0, "#9583FE"],
                      [1, "#FE82DB"],
                    ],
                  },
                  marker: {
                    enabled: false,
                  },
                  pointInterval: 3600000,
                  pointStart: Date.UTC(2022, 5, 13, 0, 0, 0),
                },
              },
              legend: { enabled: false },
              series: [
                {
                  name: "Views",
                  data: channelData
                    ? channelData?.rows?.map((row) => row[1])
                    : [],
                },
              ],
            }}
          />
        </Card>
        <Card
          heading="Top 3 Keywords"
          action="Details"
          className="outlet-content-card-6"
        >
          <Keyword keywords={["Stefania", "Top", "Popular"]} />
        </Card>
        <Card
          heading="Top Video"
          action="Details"
          className="outlet-content-card-7"
        >
          <IframeRenderer endpoint="topVideo" />
        </Card>
        <Card heading="Best Thumbnails" className="outlet-content-card-8">
          <Thumbnail
            thumbnails={[
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
              { img: thumbnail, title: "Who Cares", views: "14.6K" },
            ]}
          />
        </Card>
      </div>
    </>
  );
};

export default Youtube;
