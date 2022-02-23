import axios from "axios";
const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyD7Zn2tbllIC_WKh6tMPEob5GQ4nAwK8QY",
        
    }
})
export default request