import React, { useEffect } from "react";
import "./videodata.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../../redux/actions/channel.action";

const VideoData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoData">
      <div className="videoData__top">
        <h5>{title}</h5>
        <div className="videoData__top__info">
          <div>
            <span>
              {numeral(viewCount).format("0.a")} Views •{" "}
              {moment(publishedAt).fromNow()}
            </span>
          </div>
          <div className="like">
            <span className="">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span>
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="videoData__channel">
        <div className="videoData__channel__info">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className=""
          />
          <div className="videoData__channel__info__title">
            <span>{channelTitle}</span> <br />
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="videoData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
      <hr />
    </div>
  );
};

export default VideoData;
