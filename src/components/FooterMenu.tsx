import { Home, Search, Library } from 'lucide-react';
import Link from 'next/link';

const FooterMenu = () => {
  return (
    <footer className='bg-white dark:bg-black md:hidden text-[12px] h-14 fixed w-full flex items-center justify-around bottom-0 left-0 z-20'>
      <div className='flex flex-col items-center'>
        <Link href='/home/' className='cursor-pointer items-center'>
          <Home className='m-auto'/>
          <span>Home</span>
        </Link>
      </div>

      <div className='flex flex-col items-center'>
        <Link href='/search/' className='cursor-pointer items-center'>
          <Search className='m-auto'/>
          <span>Search</span>
        </Link>
      </div>

      <div className='flex flex-col items-center'>
        <Link href='/library/' className='cursor-pointer items-center'>
          <Library className='m-auto'/>
          <span>Library</span>
        </Link>
      </div>
    </footer>
  );
};

export default FooterMenu;
