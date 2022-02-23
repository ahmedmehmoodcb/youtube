import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../../Redux/Actions/Actions'
import './login.css'
const Login = () => {
const dispatch = useDispatch()
const accessToken = useSelector(state => state.auth.accessToken)
const LoginHandler = ()=>{
   dispatch(login())
}

const history = useHistory()
   useEffect(() => {
     if(accessToken){
      history.push('/')
     }
      
   }, [accessToken,history])
   
    return (
        <div className='login'>
        <div className='login__container'>
           <h2>Youtube Login</h2>
           <img
              src='http://pngimg.com/uploads/youtube/youtube_PNG2.png '
              alt=''
           />
           <button onClick={LoginHandler}>Login With google</button>
           <p>This Project is made using YOUTUBE DATA API</p>
        </div>
     </div>
       
    )
}

export default Login
