import React from 'react'
import { useDispatch } from 'react-redux'
import {addToVideo } from '../slices/videoSlice'
import { useNavigate } from 'react-router-dom'


const VideoComp = ({
  postId,
  creatorName,
  creatorId,
  handle,
  pic,
  comment,
  reaction,
  submission,
  description,
  mediaUrl,
  thumbnail}) => {


  const navigate=useNavigate()
  const dispach =useDispatch()
  const handleNavigate=()=>{
    navigate('/video')
    dispach(addToVideo({postId,creatorName,creatorId,handle,pic,comment,reaction,submission,description,mediaUrl,thumbnail}))
  }
  return (
    <div className='bg-gray-900 text-white'>
      <div 
      key={postId}
      onClick={handleNavigate}
      className='relative flex-col border-2 rounded-xl w-3/4 m-5 bg-gray-800'>
      <img src={thumbnail} alt=''/>
      <div className='flex justify-around p-2 '>
      <div className='flex'>
      <img src={pic} alt='' className='rounded-full w-2/5'/>

      </div>
      <div className='flex flex-col'>
      <h1 className='font-bold text-white my-2'>{submission}</h1>
      <h1 className='line-clamp-1'>{description}</h1>
        </div>
      </div>

            <p className='text-xs my-2 text-gray-400 line-clamp-2'>{submission.description}</p>
      
      

    </div> 
      {/* <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div> */}
      

    </div>
  ) 
}

export default VideoComp