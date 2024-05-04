import BannerImage from "../../banner.png";

const HomeTab = () => {
    return (
        <>
        <div className='md:pt-20 pt-[50px] h-screen flex md:h-screen w-full overflow-hidden'>
            <img className='w-full h-[70%] md:h-full object-cover overflow-hidden' src={BannerImage.src} alt='spotengfy 2024 banner'/>
        </div>
        {/* <div>
            <div className='w-full md:h-screen h-[550px] md:flex justify-center items-center bg-black'>
                <div className='w-[88%] p-30 md:flex overflow-hidden text-white rounded-s-xl h-[300px] bg-gradient-to-b from-black to-[#111] shadow-[0_40px_100px_rgba(255,255,255,0.1)]'>    
                </div>
            </div>
        </div> */}
        </>
    );
};

export default HomeTab; 