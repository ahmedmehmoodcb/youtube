import { ChannelDetailsFail, ChannelDetailsRequest, ChannelDetailsSuccess, ChannelSubscription } from "../actionType";

const initialState = {
    loading: true,
    channel: {},
    subscriptionStatus: false,
  };
  
  export const ChannelDetailsReducer = (State = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case ChannelDetailsRequest:
        return {
          ...State,
          loading: true,
        };
      case ChannelDetailsSuccess:
        return {
          ...State,
          channel:payload,
          loading: false,
        };
      case ChannelDetailsFail:
        return {
          ...State,
          loading: false,
          channel:null,
          error: payload,
        };
        case ChannelSubscription:
         return {
            ...State,
            subscriptionStatus: payload,
         }
      default:
        return State;
    }
  };
  