import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./watchscreen.scss";
import VideoData from "../../components/VideoData/VideoData";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import Comments from "../../components/Comments/Comments";
import {
  getVideoById,
  getRelatedVideos,
} from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <div className="watchScreen">
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameborder="0"
              title={video?.snippet?.title}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>

          {!loading ? (
            <VideoData video={video} videoId={id} />
          ) : (
            <h6>Loading...</h6>
          )}

          <Comments
            videoId={id}
            totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          {!loading &&
            videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} />
              ))}
        </Col>
      </Row>
    </div>
  );
};

export default WatchScreen;
