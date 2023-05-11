import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] h-[300px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] lg:left-0 lg:p-28 p-5 top-0">
                    <div className='text-white lg:space-y-7 lg:w-1/2'>
                        <h1 className='lg:text-6xl text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:flex-row flex-col lg:mt-0 mt-2 gap-4 font-semibold'>
                            <button className="bg-red-600 p-2 lg:p-3 rounded-lg lg:w-36 w-32">Discover More</button>
                            <button className="outline outline-1 outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 lg:right-20 right-5 lg:bottom-10 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-600">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] lg:left-0 lg:p-28 p-5 top-0">
                    <div className='text-white lg:space-y-7 lg:w-1/2'>
                        <h1 className='lg:text-6xl text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:flex-row flex-col lg:mt-0 mt-2 gap-4 font-semibold'>
                            <button className="bg-red-600 p-2 lg:p-3 rounded-lg lg:w-36 w-32">Discover More</button>
                            <button className="outline outline-1 outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 lg:right-20 right-5 lg:bottom-10 bottom-0">
                    <a href="#slide1" className="btn btn-circle hover:bg-red-600">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] lg:left-0 lg:p-28 p-5 top-0">
                    <div className='text-white lg:space-y-7 lg:w-1/2'>
                        <h1 className='lg:text-6xl text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:flex-row flex-col lg:mt-0 mt-2 gap-4 font-semibold'>
                            <button className="bg-red-600 p-2 lg:p-3 rounded-lg lg:w-36 w-32">Discover More</button>
                            <button className="outline outline-1 outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 lg:right-20 right-5 lg:bottom-10 bottom-0">
                    <a href="#slide2" className="btn btn-circle hover:bg-red-600">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] lg:left-0 lg:p-28 p-5 top-0">
                    <div className='text-white lg:space-y-7 lg:w-1/2'>
                        <h1 className='lg:text-6xl text-4xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:flex-row flex-col lg:mt-0 mt-2 gap-4 font-semibold'>
                            <button className="bg-red-600 p-2 lg:p-3 rounded-lg lg:w-36 w-32">Discover More</button>
                            <button className="outline outline-1 outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 lg:right-20 right-5 lg:bottom-10 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:bg-red-600">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-red-600">❯</a>
                </div>
            </div>
        </div>
    )
};

export default Banner;