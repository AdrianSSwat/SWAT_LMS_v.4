import React from 'react'
import Image from 'next/image'

const page = () => {
  const team = [
    {
        avatar: "/img/word.png",
        name: "MS Word",
        path: "/Word",
    },
    {
        avatar: "/img/excel.png",
        name: "MS Excel",
        path: "/Excel",
    },
    {
        avatar: "/img/motivation.png",
        name: "Professional Development",
        path: "/Professional-Development",
    },
]

return (
    <>
    <section id='category'>
        <div className="container py-24 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Categories
                    </h1>
            <ul className="grid grid-cols-1 gap-8  xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {
                team.map((item, idx) => (
                <li key={idx} className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-slate-600 " >
                    <Image
                            className="object-cover "
                            src={item.avatar}
                            width={100}
                            height={100} alt={''}                />
                    <a className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white" href={item.path}>         
                        {item.name}
                    </a>
                </li>
                ))
                }
            </ul>
        </div>
    </section>
    </>
   
  )
}

export default page