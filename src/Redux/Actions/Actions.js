import firebase from 'firebase/compat/app'
import auth from '../../Firebase'
import {
    LoginRequest,
    LoginSuccess,
    LoginFail,
    LogOut,
    LoadProfile,
  } from "../actionType";
  export const login = () => async dispatch => {
    try {
        dispatch({
            type:LoginRequest, 
        })
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
     const res = await auth.signInWithPopup(provider)
     console.log(res);
     const accessToken = res.credential.accessToken;
     const profile={
         name:res.additionalUserInfo.profile.name,
         photoURL:res.additionalUserInfo.profile.picture,
     }
     console.log(profile);
     sessionStorage.setItem('Access-token', accessToken)
      sessionStorage.setItem('User', JSON.stringify(profile))
     dispatch({
         type:LoginSuccess,
         payload:accessToken,
     })
     dispatch({
        type:LoadProfile,
        payload:profile,
    })
    }
    catch(error){
console.log(error.messege);
dispatch({
    type:LoginFail,
    payload:error.messege,
})
    }
}

export const log_out = () => async dispatch => {
    await auth.signOut()
    dispatch({
       type: LogOut,
    })
 
    sessionStorage.removeItem('Access-token')
    sessionStorage.removeItem('User')
 }