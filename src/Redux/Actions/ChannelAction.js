import request from "../../API";
import { ChannelDetailsFail, ChannelDetailsRequest, ChannelDetailsSuccess, ChannelSubscription } from "../actionType";

export const getChannelDetails = (id) => async (dispatch) => {
    
   try {
     dispatch({
       type: ChannelDetailsRequest,
     });
     const { data } = await request("/channels", {
        
     
       params: {
         part: "snippet,statistics,contentDetails",
         id
       },
     });
     dispatch({
       type: ChannelDetailsSuccess,
       payload:data.items[0],
       
     });
     
   } catch (error) {
    dispatch({
       type: ChannelDetailsFail,
       payload:error.response.data,
       
     });
   }
 };
 export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
   const abc=  `Authorization: Bearer ${getState().auth.accessToken}`
  console.log(abc);
  try {
     const { data } = await request('/subscriptions', {
       
        params: {
           part: 'snippet',
           forChannelId: id, 
           mine:true 
        },
        headers: {
           Authorization: `Bearer ${getState().auth.accessToken}`,
        },
     })
     dispatch({
       type: ChannelSubscription,
       payload:data.items.length!==0,
      })
      console.log(data);
  } catch (error) {
    console.log(error);
  }
}