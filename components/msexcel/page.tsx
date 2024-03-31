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
                Microsoft Word
                </h1>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {
                posts.map((items, key) => (
                <li key={key}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                    <Link
                     href={items.href}>
                    <Image src={items.img}
                     loading="lazy" alt={items.title}         
                     width={500}
                     height={500}
                     className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                    {items.title}
                    </h2>
                    <p className="mt-2 tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                    {items.authorName}
                    </p>

                    </Link>
      
                </div>
                </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default msexcel