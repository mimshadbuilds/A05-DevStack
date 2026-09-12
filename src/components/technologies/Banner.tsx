import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
    <section className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
            <div className="w-full md:w-[60%]">
                <h1 className='mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl'>
                    <span>Build Your Ideal</span> <br /> <span className='text-gradient-custom'>Development Stack</span>
                </h1>
                <p className='text-[18px] leading-relaxed max-w-xl pb-10'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className='flex justify-start items-center gap-4'>
                    <button className="btn-gradient btn font-semibold rounded-lg px-8 py-4">Explore Technologies</button>
                    <button className="btn bg-[#ffffff] font-normal rounded-lg px-10 py-4">Learn more</button>
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
