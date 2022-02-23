import { useEffect } from "react";
import "./myHomeScreen.css";
import Videos from "../Videos/myVideos";
import Catagories from "../CatagoriesBar/myCatagories";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../Redux/Actions/VideosAction";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../skeleton/skeletonVideos";
const HomeScreen = () => {
  const { videos, activeCatagories ,loading} = useSelector((state) => state.homeVideos);
  console.log(videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCatagories === "All") {
      dispatch(getVideosByCategory());
    } else {
      dispatch(getPopularVideos(activeCatagories));
    }
  };
  return (
    <Container>
      <Catagories />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className=" text-danger d-block mx-auto"></div>}
      >
        <Row>
          {!loading
            ? videos.map((arr,i) => {
                return (
                  <Col key={i} lg="3" md="4">
                    <Videos video={arr} id={arr.id} />
                  </Col>
                );
              })
            : [...Array(20)].map((i) => (
                <Col lg={3} md={4}>
                  <SkeletonVideo key={i} />
                </Col>
              ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
