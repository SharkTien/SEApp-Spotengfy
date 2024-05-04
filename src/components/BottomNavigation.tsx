import React from 'react'
import Image from 'next/image'


const BottomNavigation = () => {
  return (
    <div className='fixed z-20 flex mb-[60px] h-[70px] bottom-0 justify-center items-center w-full'>
      <div className='absolute rounded-xl h-full md:mb-0 w-11/12 md:w-full bg-background-dark'>
        <div className='flex items-center w-full h-[70px] overflow-hidden my-3 p-3 bg-gray-300/10 md:rounded-lg rounded-md'>
            {/* <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                width={50}
                height={50}
                className='object-cover rounded-lg md:mr-8 mr-3 max-w-none h-[50px]'
            />   */}
            <div className='w-full h-full'>
            {/* <h4 className='text-lg overflow-hidden md:w-full w-[200px] h-[30px] whitespace-nowrap text-ellipsis md:text-xl font-semibold'>{item.snippet.title}</h4> */}
            {/* <p className='text-sm overflow-hidden md:w-full w-[200px] h-[30px] whitespace-nowrap text-ellipsis md:text-lg dark:text-background-light'> */}
              {/* {item.snippet.channelTitle} */}a
            {/* </p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default BottomNavigation
