import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";



const slides =[
        {
            id: 1,
            title: "Designer",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint adipisci molestiae labore facilis, maxime ex voluptatibus nulla ipsam expedita vero distinctio quisquam doloribus blanditiis ad. Facilis laboriosam quia illo.",
            about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui hic harum pariatur maiores magni cum itaque labore numquam obcaecati deserunt, quisquam commodi, assumenda nam deleniti ratione at distinctio id!",
            image: <img src='/images/testimonial-person-4.webp' alt='Sara Willson' className="w-16 h-16 rounded-full shadow-md"/>,
            name: "Sara Willson",
            position: "Designer",
            image2: <img src='/images/testimonial-person-4.webp' alt='Sara Willson' className='rounded-2xl'/>
        },
        {
            id: 2,
            title: "Customer",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint adipisci molestiae labore facilis, maxime ex voluptatibus nulla ipsam expedita vero distinctio quisquam doloribus blanditiis ad. Facilis laboriosam quia illo.",
            about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui hic harum pariatur maiores magni cum itaque labore numquam obcaecati deserunt, quisquam commodi, assumenda nam deleniti ratione at distinctio id!",
            image: <img src='/images/testimonial-person-3.webp' alt='Saul Goodman' className="w-16 h-16 rounded-full shadow-md"/>,
            name: "Saul Goodman",
            position: "client",
            image2: <img src='/images/testimonial-person-3.webp' alt='Saul Goodman' className='rounded-2xl'/>
        },
        {
            id: 3,
            title: "FreeLancer",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint adipisci molestiae labore facilis, maxime ex voluptatibus nulla ipsam expedita vero distinctio quisquam doloribus blanditiis ad. Facilis laboriosam quia illo.",
            about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui hic harum pariatur maiores magni cum itaque labore numquam obcaecati deserunt, quisquam commodi, assumenda nam deleniti ratione at distinctio id!",
            image: <img src='/images/testimonial-person-1.webp' alt='Matt Brandon' className="w-16 h-16 rounded-full shadow-md"/>,
            name: "Matt Brandon",
            position: "FreeLancer",
            image2: <img src='/images/testimonial-person-1.webp' alt='Matt Brandon' className='rounded-2xl'/>
        },
        {
            id: 4,
            title: "Store Owner",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint adipisci molestiae labore facilis, maxime ex voluptatibus nulla ipsam expedita vero distinctio quisquam doloribus blanditiis ad. Facilis laboriosam quia illo.",
            about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui hic harum pariatur maiores magni cum itaque labore numquam obcaecati deserunt, quisquam commodi, assumenda nam deleniti ratione at distinctio id!",
            image: <img src='/images/testimonial-person-2.webp' alt='Jena Karlis' className="w-16 h-16 rounded-full shadow-md"/>,
            name: "Jena Karlis",
            position: "Store Owner",
            image2: <img src='/images/testimonial-person-2.webp' alt='Jena Karlis' className='rounded-2xl '/>
        },
    ]


function Testimonial() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // ✅ turns on autoplay
    autoplaySpeed: 4000,   // ✅ 3 seconds per slide
    pauseOnHover: true,   // ✅ stops when user hovers
  }; 
  return (
    <div className='py-16 bg-[#2a7c7b1f] mt-6'>
        <div className='text-center items-center justify-center mb-10'>
            <h2 className='text-3xl font-bold mb-2'>Testimonials</h2>
            <p className='text-[#323b3b]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="slider-container overflow-hidden items-center justify-center ">
            <Slider ref={sliderRef} {...settings} className="">
                {slides.map((item) =>(
                    <div key={item.id} className="w-full h-full max-w-full px-4 md:px-16">
                        <div className="relative w-full overflow-hidden bg-white rounded-2xl mb-20 md:p-8 p-3 grid grid-cols-1 md:grid-cols-7">
                            <div className="md:mt-6 mt-1 col-span-5 md:order-1 order-2">
                                <div className='text-2xl font-bold md:mb-8 mb-2'>
                                    {item.title}
                                </div>
                                <div className='mb-8'>
                                    <p className='text-[16px] text-[#323b3b] mb-7 italic'>{item.description}</p>
                                    <p className='text-[16px] text-[#323b3b] mb-7 italic'>{item.about}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <span>
                                        {item.image}
                                    </span>
                                    <div className='flex flex-col'>
                                        <span className="font-bold">{item.name}</span>
                                        <span className="text-gray-500 text-sm">{item.position}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full col-span-2 items-end md:order-2 order-1 hidden md:block">
                                {item.image2}
                            </div>
                        </div>
                    </div>
                ))}
                
            </Slider>
            <div className="flex justify-center gap-4">
                <button
                onClick={() => sliderRef.current.slickPrev()}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#2c7a7b] hover:text-white transition"
                >
                    <MdKeyboardArrowLeft className="text-4xl"/>
                </button>

                <button
                onClick={() => sliderRef.current.slickNext()}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#2c7a7b] hover:text-white transition"
                >
                    <MdKeyboardArrowRight className="text-4xl"/>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Testimonial;
