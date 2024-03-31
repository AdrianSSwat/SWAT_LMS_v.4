import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { Allerta } from 'next/font/google';

const AllTutorials = () => {
    const posts = [
        {
            title: "Microsoft Word 2021 Full Tutorial",
            img: "/img/word/46.png",
            authorLogo: "/img/it.jpg",
            authorName: "ICT Department",
            date: "Mar 8 2024",
            href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=470s"
        },
      {
        title: "MS Word - Formatting Text  ",
        img: "/img/word/43.png",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1008s"
    },
    {
      title: "MS Word - Paragraph Layouts  ",
      img: "/img/word/42.png",
      authorLogo: "/img/it.jpg",
      authorName: "ICT Department",
      date: "Mar 8 2024",
      href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1509s"
    },
    {
      title: "MS Word - Creating Lists  ",
      img: "/img/word/41.png",
      authorLogo: "/img/it.jpg",
      authorName: "ICT Department",
      date: "Mar 8 2024",
      href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1854s"
    },
    {
      title: "MS Word - Shading and Borders  ",
      img: "/img/word/40.png",
      authorLogo: "/img/it.jpg",
      authorName: "ICT Department",
      date: "Mar 8 2024",
      href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=2302s"
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
  {
    title: "MS Excel - Simple Excel Functions ",
    img: "/img/excel/38.png",
    authorLogo: "/img/it.jpg",
    authorName: "ICT Department",
    date: "Mar 8 2024",
    href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=2213s"
},
    
    ]
    
    return (
      <>
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 bg-gray-500 bg-opacity-10 py-8 rounded-lg">
            <div className="text-center bg-transparent py-8">
                <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-semibold">
                    Latest Tutorials
                </h1>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {
                    posts.map((items, key) => (
                        <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative" key={key}>
                            <a href={items.href}>
                             
                             <Image 
                                  src={items.img} loading="lazy" alt={items.title}  
                                  className="object-cover object-center"
                                  width={1000}
                                  height={1000} />
                             
                                <div className="flex items-center  pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <Image src={items.authorLogo} 
                                          className="w-full h-full rounded-full" 
                                          width={500}
                                          height={500}alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block dark:text-gray-100 text-gray-900">{items.authorName}</span>
                                        <span className="block dark:text-gray-500 text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl dark:text-gray-100 text-gray-900">
                                        {items.title}
                                    </h3>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default AllTutorials