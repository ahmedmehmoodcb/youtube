import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ChannelDetailsReducer } from './Reducer/ChannelReducer'
import { CommentsReducer } from './Reducer/CommentsReducer'
import { Reducers } from './Reducer/Reducers'
import { HomeVideosReducer, SelectedVideosReducer } from './Reducer/videosReducer'

const rootReducer = combineReducers({
   auth: Reducers,
   homeVideos:HomeVideosReducer,
   selectedvideos:SelectedVideosReducer,
   ChannelDetails:ChannelDetailsReducer,
   Comments:CommentsReducer
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store