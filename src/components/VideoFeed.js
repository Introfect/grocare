import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoComp from './VideoComp'




const VideoFeed = () => {


const prevPage=()=>
{
  const newPage=page-1;
  if(newPage>-1)
  setPage(newPage)

}
const nextPage=()=>
{
  const newPage=page+1;
  setPage(newPage)

}
    const [ videoData,setVideoData ] = useState();
    const [page, setPage]= useState(0);

    const getData= async()=>{
      await axios.get(`https://internship-service.onrender.com/videos?page=${page}`).then((response)=>{
      setVideoData(response.data)

  })
} 
    useEffect(()=>{  
      getData(); 
    },[page])



  return ( 
    <div>

    <div 
    
    className='cursor-pointer grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:-mt-54 mx-auto'>
         {videoData?videoData.data.posts.map((data)=>{
           return(
            <VideoComp
            className='anchal'
            postId={data.postId}
            creatorName={data.creator.name}
            creatorId={data.creator.Id}
            handle={data.creator.handle}
            pic={data.creator.pic}
            comment={data.comment.count}
            reaction={data.reaction.count}
            submission={data.submission.title}
            description={data.submission.description}
            mediaUrl={data.submission.mediaUrl}
            thumbnail={data.submission.thumbnail}
            /> 
            
            )
            
          }):null
        }   
    </div>
    

<div className='bg-gray-900 flex justify-center'>
<div
onClick={prevPage}
className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium dark:bg-gray-800 rounded:md dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Previous
</div>
<div
onClick={nextPage}
className="cursor-pointer inline-flex items-center px-4 py-2 ml-3 text-sm font-medium rounded:md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Next
</div>
  </div>


        </div>
  )
}

export default VideoFeed