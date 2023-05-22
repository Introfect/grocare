import React from 'react'
import { useSelector } from 'react-redux'
import { selectVideo } from '../slices/videoSlice'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'


const VideoPlayer = () => {
    const item=useSelector(selectVideo)
    console.log(item)
  return (
    <div>
<Navbar/>
    <div>
        {item.map((videoData)=>{
          return(
            <div className='flex justify-around bg-gray-900 py-20'> 
              <div>
            <ReactPlayer
             className='react-player'
          
             controls = {true}
            url={videoData.mediaUrl}
            />
              </div>
              <div className='m-3'>
              <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-5">
    <img class="w-32 h-32 rounded-full mx-auto" src={videoData.pic} alt="Profile picture"/>
    <h2 class="text-center text-2xl font-semibold mt-3">{videoData.creatorName}</h2>
    <p class="text-center text-gray-600 mt-1">@{videoData.handle}</p>
    <div class="flex justify-center mt-5">
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Bio</h3>
      <p class="text-gray-600 mt-2">{videoData.description}</p>
    </div>
  </div>
              </div>
            </div>
          )
          
        })}
    </div>
          </div>
  )
}

export default VideoPlayer