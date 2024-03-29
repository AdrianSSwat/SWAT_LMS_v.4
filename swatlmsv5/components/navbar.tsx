import React from 'react'
import Image from 'next/image'
import DropdownMenu from './dropdown'
import Link from 'next/link'

const navbar = () => {
  return (
    <>
      <header className="text-gray-400 dark:bg-transparent bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert invert"
              src="/logo.svg"
              alt="Learning-Management-System"
              width={200}
              height={200}
              priority
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900 dark:text-gray-100">Home</a>
            <DropdownMenu />
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <Link href="mailto:helpdesk@gradstt.com">Helpdesk</Link>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default navbar