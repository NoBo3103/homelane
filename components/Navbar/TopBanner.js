import React from 'react'
import Link from 'next/link'

const TopBanner = () => {
    return (
        <div className="w-full my-3 ">
            <nav className="flex justify-between p-2 mx-16">

                <div className="grid grid-cols-4 gap-x-6">
                    <div className="text-sm hover:text-red-400 lato">
                        <Link href="#">   Join as Design Expert</Link>
                    </div>
                    <div className="text-sm hover:text-red-400 lato">
                        <Link href="#">   Partner with HomeLane</Link>
                    </div>
                    <div className="text-sm hover:text-red-400 lato text-center">
                        <Link href="#">    Refer and Earn</Link>
                    </div>
                    <div className="text-sm hover:text-red-400 lato">
                        <Link href="#">Join Us</Link>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-x-2">

                    <div className="text-sm hover:text-red-400">
                        <Link href="#">   Visit Us</Link>
                    </div>

                    <div className="text-sm hover:text-red-400">
                        <Link href="#"> Login/Register</Link>
                    </div>


                </div>


            </nav>


        </div>
    )
}

export default TopBanner
