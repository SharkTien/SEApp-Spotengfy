'use client'
import { fetchChannels } from "@/lib/api";
import Link from "next/link";
import Image from 'next/image';
import useSWR from "swr";

const LibraryTab = () => {
    const {
        data: channelResults,
    } = useSWR(`fetchChannels`, () => fetchChannels('music official video', 10));
    return (
        <>
        <div className='md:pt-20 pt-[50px] h-[550px] md:h-screen w-screen px-7'>
            <div className='text-lg md:text-xl mt-3'>Available artists</div>
            <div className='block md:overflow-hidden overflow-x-auto no-scrollbar w-full mb-3'>
                <div className='flex md:grid md:grid-cols-5 md:grid-rows-5 md:gap-4 h-fit w-fit md:w-full mb-3'>
                    {channelResults?.map(channels => (
                    <div className="flex flex-col mr-8 my-4 place-items-center py-5 md:w-3/4 md:h-fit md:bg-gray-300/10 md:rounded-lg text-white">
                    <Image
                        src={channels.image}
                        alt={channels.name}
                        width = {120}
                        height = {120}
                        className = 'object-cover mb-3 rounded-full' 
                    />
                    <h1 className='overflow-hidden truncates'>{channels.name}</h1>
                    <span className="text-gray-200/30 text-sm">Artist</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default LibraryTab; 