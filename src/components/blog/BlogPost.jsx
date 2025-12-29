import React from 'react'

export default function BlogPost() {
  return (
    <div className='py-20 md:px-18 px-2'>
        <div className='flex md:flex-row flex-col gap-5'>

            <div className='grid grid-cols-1 space-y-8'>
                <div className='max-w-xs'>
                    <div className='overflow-hidden z-40 relative'>
                        <img src="/images/blog-post-1.webp" alt="Blog Post" className='object-cover hover:scale-110 transition-transform duration-300'/>
                        <div className='rounded-md px-4 py-1.5 text-white text-sm bg-[#e74c3c] w-fit h-fit top-4 left-3 absolute'>
                            <p>Entertainment</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <a href="/home" className='text-[#163535]'>Maecenas tempus tellus eget condimentum rhoncus semper quam</a>
                    </div>
                    <div className='flex gap-2 text-sm text-[#323b3b99] mt-2'>
                        <span>March 15, 2025</span>
                        <span>.</span>
                        <span>3 Comments</span>
                    </div>
                </div>
                <div className='max-w-xs'>
                    <div className='overflow-hidden z-40 relative'>
                        <img src="/images/blog-post-2.webp" alt="Blog Post" className='object-cover hover:scale-110 transition-transform duration-300'/>
                        <div className='rounded-md px-4 py-1.5 text-sm text-white bg-[#2ecc71] w-fit h-fit top-4 left-3 absolute'>
                            <p>Technology</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <a href="/home" className='text-[#163535]'>Donec pede justo fringilla vel aliquet nec vulputate eget</a>
                    </div>
                    <div className='flex gap-2 text-sm text-[#323b3b99] mt-2'>
                        <span>March 14, 2025</span>
                        <span>.</span>
                        <span>5 Comments</span>
                    </div>
                </div>
            </div>

            <div className='max-w-xl'>
                <div className='overflow-hidden z-40 relative'>
                    <img src="/images/blog-post-3.webp" alt="Blog Post" className='object-cover hover:scale-110 transition-transform duration-300'/>
                    <div className='rounded-md px-4 py-1.5 text-sm text-white bg-[#3498db] w-fit h-fit top-4 left-4 absolute'>
                        <p>Business</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <a href="/home" className='text-[#163535] text-2xl'>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus</a>
                </div>
                <div className='py-2'>
                    <p className='text-[16px] text-[#323b3b]'>
                        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
                        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    </p>
                </div>
                <div className='flex gap-2 text-sm text-[#323b3b99] mt-2'>
                    <span>March 16, 2025</span>
                    <span>.</span>
                    <span>8 Comments</span>
                </div>
            </div>

            <div className='grid grid-cols-1 space-y-8'>
                <div className='max-w-xs'>
                    <div className='overflow-hidden z-40 relative'>
                        <img src="/images/blog-post-4.webp" alt="Blog Post" className='object-cover hover:scale-110 transition-transform duration-300'/>
                        <div className='rounded-md px-4 py-1.5 text-sm text-white bg-[#2ecc71] w-fit h-fit top-4 left-3 absolute'>
                            <p>Technology</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <a href="/home" className='text-[#163535]'>Aenean vulputate eleifend tellus aenean leo ligula porttitor</a>
                    </div>
                    <div className='flex gap-2 text-sm text-[#323b3b99] mt-2'>
                        <span>March 13, 2025</span>
                        <span>.</span>
                        <span>2 Comments</span>
                    </div>
                </div>
                <div className='max-w-xs'>
                    <div className='overflow-hidden z-40 relative'>
                        <img src="/images/blog-post-2.webp" alt="Blog Post" className='object-cover hover:scale-110 transition-transform duration-300'/>
                        <div className='rounded-md px-4 py-1.5 text-sm text-white bg-[#9b59b6] w-fit h-fit top-4 left-3 absolute'>
                            <p>Lifestyle</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <a href="/home" className='text-[#163535]'>Etiam sit amet orci eget eros faucibus tincidunt duis leo</a>
                    </div>
                    <div className='flex gap-2 text-sm text-[#323b3b99] mt-2'>
                        <span>March 12, 2025</span>
                        <span>.</span>
                        <span>4 Comments</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
