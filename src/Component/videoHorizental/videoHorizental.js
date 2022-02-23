import './videoHorizental.css'
import { Col , Row } from 'react-bootstrap'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
const VideoHorizental = (i) => {
    return (
        <Row
        key={i}
         className='py-2 m-1 videoHorizontal align-align-items-center'
        //  onClick={handleClick}
         >
         {/* //TODO refractor grid */}
         <Col xs={6} md={6} className='videoHorizontal__left'>
            <LazyLoadImage
               src=''
               effect='blur'
               className='videoHorizontal__thumbnail'
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            <span className='videoHorizontal__duration'>
                {/* {_duration} */}
                duration
                </span>
         </Col>
         <Col xs={6} md={6} className='p-0 videoHorizontal__right'>
            <p className='mb-1 videoHorizontal__title'>
                {/* {title} */} Title
                </p>
            <div className='videoHorizontal__details'>
               <AiFillEye /> {numeral(2222).format('0.a')} Views •
               {moment(2019).fromNow()}
            </div>

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {/* //TODO show in search screen */}
               {/* <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
             
            /> */}
               <p className='mb-0'>
                   {/* {channelTitle} */}
                   title
               </p>
            </div>
         </Col>
      </Row>
    )
}

export default VideoHorizental
