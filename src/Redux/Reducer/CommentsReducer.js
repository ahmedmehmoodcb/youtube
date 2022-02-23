import { CommentsListFail, CommentsListRequest, CommentsListSuccess} from "../actionType";

export const CommentsReducer = (
    State = {
       loading: true,
       comments: null,
    },
    action
 ) => {
    const { payload, type } = action
    switch (type) {
      case CommentsListRequest:
        return {
          ...State,
          loading: true,
        };
      case CommentsListSuccess:
        return {
          ...State,
          comments:payload,
          loading: false,
        };
      case CommentsListFail:
        return {
          ...State,
          loading: false,
          error: payload,
        };
       
      default:
        return State;
    }
  };
  