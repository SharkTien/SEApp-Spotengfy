"use client";

import { fetchVideoDetails } from '@/lib/api';
import { useParams } from 'next/navigation';
import ReactPlayer from 'react-player';
import React from 'react';
import useSWR from 'swr';

const VideoDetails = () => {
    const { id } = useParams();
    const {
      data: videoDetails,
    } = useSWR(`/videoDetails/${id}`, () => fetchVideoDetails(id as string), {
      revalidateOnFocus: false,
    });
    
    return (
      <div className='mb-9 pt-[50px]'>
        <div className='px-4 h-[50vh] mt-14'>
          <ReactPlayer url={"https://www.youtube.com/watch?v="+id} width='100%' height='100%' />
        </div>
  
        <div className='p-2 md:p-4 grid grid-cols-12 gap-7'>
          <div className='md:col-span-8 col-span-12'>
            <div>
              <h3 className='text-xl font-semibold'>{videoDetails?.title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default VideoDetails;
  