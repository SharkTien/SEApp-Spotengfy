import BannerImage from "./banner.png";

const Home = () => {
    return (
        <>
        <div className='md:pt-20 pt-[50px] h-screen flex md:h-screen w-full overflow-hidden'>
            <img className='w-full h-[70%] md:h-full object-cover overflow-hidden' src={BannerImage.src} alt='spotengfy 2024 banner'/>
        </div>
        </>
    );
};

export default Home; 