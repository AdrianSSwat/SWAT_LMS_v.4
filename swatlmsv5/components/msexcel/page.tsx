import React from 'react'
import Link from "next/link";
import Image from 'next/image'

const msexcel = () => {
    const posts = [
        {
            title: "Microsoft Excel 2021 Full Tutorial",
            img: "/img/excel/1.png",
            authorLogo: "/img/it.jpg",
            authorName: "ICT Department",
            date: "Mar 8 2024",
            href: "https://www.youtube.com/watch?v=bF31VEFvMmY&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=1"
        },
        {
            title: "MS Excel - Zooming, Navigating, and Shortcuts ",
            img: "/img/excel/40.png",
            authorLogo: "/img/it.jpg",
            authorName: "ICT Department",
            date: "Mar 8 2024",
            href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=811s"
        },
        {
          title: "MS Excel - Performing Excel Calculations ",
          img: "/img/excel/39.png",
          authorLogo: "/img/it.jpg",
          authorName: "ICT Department",
          date: "Mar 8 2024",
          href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=1699s"
      },
]
  return (
    <>
        <section className="bg-white dark:bg-transparent ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                Microsoft Excel
                </h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {
                posts.map((items, key) => (
                <div key={key} className='shadow-xl p-4 rounded-lg'>
                    <Link className="object-cover object-center w-full h-64 rounded-lg lg:h-60" href={items.href}>
                    <Image src={items.img}
                     loading="lazy" alt={items.title}         
                     width={500}
                     height={500}
                    className="object-cover w-full rounded-lg h-96 "
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                    {items.title}
                    </h2>
                    <p className="mt-2 tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                    {items.authorName}
                    </p>

                    </Link>
      
                </div>
                        ))
                    }
                </div>
            </div>
            <Link href='/msexcel' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ml-9">
                Learn More
                    <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </Link>
        </section>
    </>
  )
}

export default msexcel