import "./videoMetaData.css";
import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../Redux/Actions/ChannelAction";
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
///////////////////
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
//////////////////////
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.ChannelDetails.channel);
    const subscriptionStatus = useSelector(state => state.ChannelDetails.subscriptionStatus)
    console.log(subscriptionStatus)
    // channelStatistics?.subscriberCount
////////////////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  ////////////////////
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaDataTop">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-item-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 my-2 videoMetaDataChannel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button
               className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
      </div>
      <div className="videoMetaDataDiscription">
        <ShowMoreText
          lines={2}
          more="Show more"
          less="Show less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
