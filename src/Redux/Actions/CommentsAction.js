import request from "../../API";
import {
  CommentsListFail,
  CommentsListRequest,
  CommentsListSuccess,
  AddCommentsSuccess,
  AddCommentsFail,
} from "../actionType";

export const getCommentsOfVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CommentsListRequest,
    });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });
    dispatch({
      type: CommentsListSuccess,
      payload: data.items,
    });
    console.log(data.items);
  } catch (error) {
    dispatch({
      type: CommentsListFail,
      payload: error.response.data.message,
    });
  }
};

export const addComments = (id, text) => async (dispatch, getState) => {
    try {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    },
                },
            },
        }
        console.log(obj);
        await request.post('/commentThreads', obj, {
            params: {
               part: 'snippet',
            },
            headers: {
               Authorization: `Bearer ${getState().auth.accessToken}`
            },
         })
         dispatch({
            type: AddCommentsSuccess,
         })
   
         setTimeout(() => dispatch(getCommentsOfVideoById(id)), 3000)
      } catch (error) {
      console.log(error.response.data);
    dispatch({
      type: AddCommentsFail,
      payload: error.response.data.message,
    });
  }
};
