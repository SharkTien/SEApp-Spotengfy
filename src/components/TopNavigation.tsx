'use client';

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger,  } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopNavigation = () => {
    
    const searchInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchInputRef.current.value.replaceAll(" ", "") != "") {
            const searchQuery = searchInputRef.current.value;
            router.push(`/searchfor?q=${searchQuery}`);
        }
    };
    
    return (
        <nav className='fixed flex justify-center md:justify-between items-center top-0 left-0 w-screen z-20 dark:bg-background-dark light: bg-background-light dark:text-white text-black'>
            <div className='flex items-center px-2 md:px-7 md:h-20 h-[50px]'>
                <div className='flex items-center md:border-r-[3px] md:pr-6 md:border-current'>
                    <Link href="/" className="text-[25px] font-semibold">spotengfy</Link> 
                </div>
                <div className='hidden md:flex w-[325px] ml-[10px] cursor-pointer items-center justify-around'>
                    <div>
                        <Link href="/home/" className="text-[20px]">HOME</Link>
                    </div>

                    <div>
                        <Link href="/library/" className="text-[20px]">LIBRARY</Link>
                    </div>

                    <div>
                        <Link href="/discover/" className="text-[20px]">DISCOVER</Link>
                    </div>
                </div>
            </div>

            
            <div className='hidden md:flex items-center justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='flex items-center h-10 mx-auto'
                >
                    <input 
                    type='search'
                    placeholder='Search your songs'
                    ref={searchInputRef}
                    className='px-4 h-full md:w-48 lg:w-96 border dark:border-white border-r-[0px] rounded-l-full focus:outline-none'
                    />
                    <div className='h-full px-3 grid border mr-7 dark:border-white border-l-[0px] place-content-center rounded-r-full'>
                    <Search />
                    </div>
                </form>
                <div className='hidden md:block mr-7'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:outline-none'>
                        <Avatar>
                        <AvatarImage src='' alt='' />
                        <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-72 p-2'>
                        <DropdownMenuLabel>
                            <h3 className='mb-4'>Username</h3>
                            <div className='flex items-center'>
                                <span className='mr-2'> Appearance: </span> <ThemeToggle />
                            </div>
                            <Link
                                href={``}
                                className='text-red-500'
                            >
                                Sign out
                            </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>    
            </div>

        </nav>
    );
}

export default TopNavigation;