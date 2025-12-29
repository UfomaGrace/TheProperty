import React from 'react'

const blognews = [
    {
        id: 1,
        img: <img src="/images/blog-headline-1.webp" alt="Blog Post"/>,
        title: "Politics",
        heading: "Dolorum optio tempore voluptas dignissimos",
        person: <img src="/images/blog-agent-1.webp" alt="Blog Agent" />,
        name: "Maria Doe",
        date: "Jan 1, 2022",
    },
    {
        id: 2,
        img: <img src="/images/blog-headline-2.webp" alt="Blog Post" />,
        title: "Sports",
        heading: "Nisi magni odit consequatur autem nulla dolorem",
        person: <img src="/images/blog-agent-2.webp" alt="Blog Agent" />,
        name: "Allisa Mayer",
        date: "Jun 5, 2022",
    },
    {
        id: 3,
        img: <img src="/images/blog-headline-3.webp" alt="Blog Post" />,
        title: "Entertainment",
        heading: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
        person: <img src="/images/blog-agent-3.webp" alt="Blog Agent" />,
        name: "Mark Dower",
        date: "Jun 22, 2022",
    },
    {
        id: 4,
        img: <img src="/images/blog-headline-4.webp" alt="Blog Post" />,
        title: "Sports",
        heading: "Non rem rerum nam cum quo minus olor distincti",
        person: <img src="/images/blog-agent-4.webp" alt="Blog Agent" />,
        name: "Lisa Neymar",
        date: "Jun 30, 2022",
    },
    {
        id: 5,
        img: <img src="/images/blog-post-2.webp" alt="Blog Post" />,
        title: "Politics",
        heading: "Accusamus quaerat aliquam qui debitis facilis consequatur",
        person: <img src="/images/blog-agent-5.webp" alt="Blog Agent" />,
        name: "Denis Peterson",
        date: "Jan 30, 2022",
    },
    {
        id: 6,
        img: <img src="/images/blog-headline-6.webp" alt="Blog Post" />,
        title: "Entertainment",
        heading: "Distinctio provident quibusdam numquam aperiam aut",
        person: <img src="/images/blog-agent-6.webp" alt="Blog Agent" />,
        name: "Mika Lendon",
        date: "Feb 14, 2022",
    },
]

export default function BlogHeadlines() {
  return (
    <div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:px-20 px-2 gap-8'>
            {blognews.map((item) => (
                <div key={item.id} className='max-w-lg rounded-2xl shadow-2xl '>
                    <div className='rounded-tr-2xl rounded-tl-2xl object-cover'>
                        {item.img}
                    </div>
                    <div className='md:px-6 px-2 md:py-4 py-2'>
                        <div className='mb-4'>
                            <p className='text-lg text-[#323b3b99] mb-2'>{item.title}</p>
                            <a href='/' className='text-[#163535] font-bold text-xl cursor-pointer hover:text-teal-700 transition-colors duration-200'>{item.heading}</a>
                        </div>
                        <div className='flex gap-4 mb-4'>
                            <div className='w-12 h-12 overflow-hidden rounded-full'>
                                {item.person}
                            </div>
                            <div>
                                <p className='font-semibold text-lg'>{item.name}</p>
                                <p className='text-sm text-[#323b3b99]'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
