import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import VideoHorizental from "../../videoHorizental/videoHorizental";
import VideoMetaData from "../../videoMetaData/videoMetaData";
import Comments from '../../Comments/Comments'
import "./watchScreen.css";
import { useParams } from "react-router";
import { getVideosById } from "../../../Redux/Actions/VideosAction";
const WatchScreen = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getVideosById(id))
    }, [ dispatch,id])
   
const {loading,video} = useSelector(state=>state.selectedvideos)

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`} 
            frameBorder="0"
              title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h6>Loading...</h6>
            )}
        <Comments
               videoId={id}
               totalComments={video?.statistics?.commentCount}
            />
      </Col>
      <Col lg={4}>
        {/* {[...Array(10)].map((i) => (
          <VideoHorizental i={i}/>
        ))} */}
        {/* {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )} */}
      </Col>
    </Row>
  );
};

export default WatchScreen;
