'use client'
import { fetchTrack } from "@/lib/api";
import Link from "next/link";
import Image from 'next/image';
import useSWR from "swr";
import { FormEvent, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchTab = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchInputRef.current) {
        const searchQuery = searchInputRef.current.value;
        
        console.log(searchQuery);
            router.push(`/searchfor?q=${searchQuery}`);
        }
    };
    
    return (
        <div className='md:hidden dark:bg-background-dark bg-background-light h-screen w-screen'>
            <div className='flex items-center justify-center pt-[70px]'>
                <form
                    onSubmit={handleSubmit}
                    className='flex items-center h-10 mx-auto'
                >
                    <input 
                    type='search'
                    placeholder='Search your songs ...'
                    ref={searchInputRef}
                    className='px-4 h-full md:w-48 lg:w-96 border dark:border-white border-r-[0px] rounded-l-full focus:outline-none'
                    />
                    <div className='h-full px-3 grid border mr-7 dark:border-white border-l-[0px] place-content-center rounded-r-full'>
                    <Search />
                    </div>
                </form>
            </div>
       </div>
    );
};

export default SearchTab; 