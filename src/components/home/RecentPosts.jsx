import React from 'react'
import {Link} from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs'
const blogPosts = [
    {
        id: 1,
        image: <img src="/images/blog-headline-1.webp" alt="Blog Post" className='rounded-tr-md rounded-tl-md transition-all duration-300 object-cover group-hover:scale-125 ease-in-out hover:duration-300'/>,
        tag: "DECEMBER 12",
        title: "Eum ad dolor et. Autem aut fugiat debits",
        bloglink: "Read More",
        icon: <BsArrowRight />
    },
    {
        id: 2,
        image: <img src="/images/blog-headline-2.webp" alt="Blog Post" className='rounded-tr-md rounded-tl-md transition-all duration-300 object-cover group-hover:scale-125 ease-in-out hover:duration-300 '/>,
        tag: "JULY 17",
        title: "Et repellendus molestiae dqi est sed omnis",
        bloglink: "Read More",
        icon: <BsArrowRight />
    },{
        id: 3,
        image: <img src="/images/blog-headline-3.webp" alt="Blog Post" className='rounded-tr-md rounded-tl-md object-cover transition-all duration-300 group-hover:scale-125 ease-in-out hover:duration-300'/>,
        tag: "SEPTEMBER 05",
        title: "Quia assumenda est et veritati tirana ploder",
        bloglink: "Read More",
        icon: <BsArrowRight />
    },

]

export default function RecentPosts() {
  return (
    <div className='py-12'>
        <div className='text-center items-center justify-center mb-8'>
            <h2 className='text-3xl font-bold mb-2'>Recent Blog Posts</h2>
            <p className='text-[#323b3b]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:px-17 px-2 py-6'>
            {blogPosts.map((item) => (
                <div to={'/blog'} key={item.id} className='max-w-lg rounded-md shadow-2xl group transition-transform duration-300 hover:shadow-3xl'>
                    <div>
                        <div className='rounded-tr-md rounded-tl-md object-cover relative z-40 overflow-hidden'>
                            {item.image}
                            <span className='absolute top-4 left-4 rounded-md text-white bg-[#2a7c7b] px-4 py-1.5 text-sm font-bold'>
                                {item.tag}
                            </span>
                        </div>
                        <div to={'/blog'} className='text-lg font-bold mb-3 md:px-8 px-2 mt-6 group-hover:text-[#2a7c7b]'>
                            {item.title}
                        </div>
                        <div to={'/blog'} className='flex gap-1 text-[#2a7c7b] md:px-8 px-2 mb-6 underline decoration-[#2a7c7b] decoration-2'>
                            <span className='font-semibold'>
                                {item.bloglink}
                            </span>
                            <span className='transition-transform translate-y-1'>
                                {item.icon}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
