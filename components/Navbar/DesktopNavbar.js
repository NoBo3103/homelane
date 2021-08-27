import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopBanner from './TopBanner'

const DesktopNavbar = () => {
    return (
        <div className="w-100">
            <div  >
            <TopBanner />
            <hr className="text-gray-200"></hr>
            <div className="py-2 bg-white shadow-md z-50 mt-1">
                <div className="flex justify-between mx-16" >
                    <div className="px-2 pr-12">
                     <Image src="https://images.unsplash.com/photo-1616627440455-9907b864b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=629&q=80" height={50} width={150} /> 
                     {/* <Image src="/applepay.svg" height={100} width={150}/> */}
                    </div>
                    <nav className="grid md:grid-cols-7  mt-4 px-6">
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Design Gallery</Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Modular Kitchen</Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Bedroom</Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Living Room </Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center" >
                            <Link href="#">   Space Saving Furniture</Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Home Office</Link>
                        </div>
                        <div className="text-sm hover:text-red-400 text-center">
                            <Link href="#">   Customer Stories </Link>
                        </div>

                    </nav>

                    <div className="pl-28">
                        <div className="p-2 text-white font-semibold rounded-md bg-red-600 cursor-pointer">
                            Get Free Estimate
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    )
}

export default DesktopNavbar
