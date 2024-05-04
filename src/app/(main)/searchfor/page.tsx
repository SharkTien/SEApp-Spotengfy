'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { SearchListResponse } from '@/types/response';
import { fetchSearchQuery } from '@/lib/api';


const Search = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('q');

  if (!searchQuery) {
    throw new Error('Error fetching search query');
  }

  const {
    data: searchResults,
    error,
  } = useSWR<SearchListResponse>(`fetchVideos/${searchQuery}`, (key: string) =>
    fetchSearchQuery(searchQuery)
  );

  if (error) {
    throw new Error('Error fetching search query');
  }

  return (
    <div className='mt-3 pt-[70px] px-10'>
      {searchResults?.items.map(item => (
        <Link
          href={`/${item.id.videoId}`}
          key={item.id.videoId}
          className=''
        >
        <div className='flex items-center w-full h-[80px] overflow-hidden my-3 p-3 bg-gray-300/10 md:rounded-lg rounded-md'>
        <Image
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
            width={50}
            height={50}
            className='object-cover rounded-lg md:mr-8 mr-3 max-w-none h-[50px]'
        />  
        <div className='w-full h-full'>
        <h4 className='text-lg overflow-hidden md:w-full w-[380px] h-[30px] whitespace-nowrap text-ellipsis md:text-xl font-semibold'>{item.snippet.title}</h4>
        <p className='text-sm overflow-hidden md:w-full w-[380px] h-[30px] whitespace-nowrap text-ellipsis md:text-lg dark:text-background-light'>
        {item.snippet.channelTitle}
        </p>
        </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;
