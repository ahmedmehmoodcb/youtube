import request from "../../API";
import {
  homeVideosFail,
  homeVideosRequest,
  homeVideosSuccess,
  SelectedVideosFail,
  SelectedVideosRequest,
  SelectedVideosSuccess,
} from "../actionType";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: homeVideosRequest,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "PK",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    dispatch({
      type: homeVideosSuccess,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: homeVideosFail,
      payload: error.messege,
      catagory: "All",
    });
  }
};
export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  console.log(keyword);
  try {
    dispatch({
      type: homeVideosRequest,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",

        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: homeVideosSuccess,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: homeVideosFail,
      payload: error.message,
    });
  }
};
export const getVideosById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SelectedVideosRequest,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    dispatch({
      type: SelectedVideosSuccess,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: SelectedVideosFail,
      payload: error.messege,
    });
  }
};
