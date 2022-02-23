import {
  homeVideosFail,
  homeVideosRequest,
  homeVideosSuccess,
  SelectedVideosFail,
  SelectedVideosRequest,
  SelectedVideosSuccess,
} from "../actionType";

const initialState = {
  videos: [],
  nextPageToken: null,
  loading: false,
  initialCatagory: "All",
};

export const HomeVideosReducer = (State = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case homeVideosSuccess:
      return {
        ...State,
        videos:
          State.activeCatagory === payload.catagory
            ? [...State.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCatagory: payload.catagory,
      };
    case homeVideosRequest:
      return {
        ...State,
        loading: true,
      };
    case homeVideosFail:
      return {
        ...State,
        loading: false,
        error: payload,
      };
    default:
      return State;
  }
};
export const SelectedVideosReducer = (
  State = { loading: true, videos: null },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SelectedVideosRequest:
      return {
        ...State,
        loading: true,
      };
    case SelectedVideosSuccess:
      return {
        ...State,
        video: payload,
        loading: false,
      };
    case SelectedVideosFail:
      return {
        ...State,
        video: null,
        loading: false,
        error: payload,
      };
    default:
      return State;
  }
};
