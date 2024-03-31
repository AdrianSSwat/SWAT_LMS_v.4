import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-600 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
                    Learning Management System
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-200">
                    Empowering The Workforce In S.W.A.T. , Elevating Skills, Enhance Performance, Drive Success
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <a href="#category"  className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </a>
                    <a href="javascript:void(0)" className="inline-block py-2 px-4 text-gray-600 dark:text-gray-200 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero