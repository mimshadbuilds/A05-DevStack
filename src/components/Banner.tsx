import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
    <section className='container mx-auto px-4'>
        <div className='flex flex-col items-center md:gap-8 md:flex-row py-8 md:py-16'>
            <div className="w-full md:w-[60%] text-center md:text-left">
                <h1 className='text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl mb-4'>
                    <span>Build Your Ideal</span> <br /> <span className='text-gradient-custom'>Development Stack</span>
                </h1>
                <p className='text-sm md:text-[18px] sm:text-lg leading-relaxed text-gray-600 max-w-xl md:mx-0 pb-10'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className='flex md:justify-start justify-center items-center w-full gap-3 sm:gap-4 mt-4'>
                    <button className="btn-gradient btn text-xs sm:text-sm font-semibold rounded-lg px-3 md:px-4 md:py-2 flex-1">Explore Technologies</button>
                    <button className="btn bg-white text-xs sm:text-sm font-normal rounded-lg px-3 md:px-8 md:py-4 flex-1">Learn more</button>
                </div>
            </div>
            <div className="w-full md:w-[40%]">
                <img src={banner} alt="" className="mx-auto w-full max-w-md" />
            </div>
        </div>
    </section>
    );
};

export default Banner;
