import React from 'react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'

const footer = () => {
  return (
    <>
    <footer className="text-gray-400 bg-gray-900 dark:bg-transparent body-font">
        <div className=" px-5 py-8 flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert invert"
              src="/logo.svg"
              alt="Learning-Management-System"
              width={200}
              height={200}
              priority
            />
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 Adrian Solomon —
            <a
                href="/"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                S.W.A.T. ICT Department
            </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <ThemeToggle />
            </span>
        </div>
    </footer>
    </>
  )
}

export default footer