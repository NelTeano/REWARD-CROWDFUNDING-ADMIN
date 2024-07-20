'use client'

import React from 'react'

import {
    LayoutDashboard,
    SquareGanttChart,
    Newspaper,
} from "lucide-react"

import Link from 'next/link'
import Image from "next/image";


// import { useRouter } from 'next/navigation';



export default function Page() {

    // const router = useRouter();

    const navigation = [
        {
            name: 'Dashboard',
            icons:  <LayoutDashboard height={16} width={16} />, 
            link: '/',
        },
        {
            name: 'All Products',
            icons:  <SquareGanttChart height={16} width={16}/>, 
            link: '/',
        },
        {
            name: 'Order List',
            icons:  <Newspaper height={16} width={16} />, 
            link: '/',
        },
    ];

    // const currentPath = router.pathname;
    // console.log(currentPath)

    return (
        <nav className='flex flex-col items-center w-[300px] min-h-[1549px] bg-dividerFAWhite gap-8 border'>
            <section className='mt-8'>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={175}
                    height={48}
                    priority
                />
            </section>

            <section className='flex flex-col gap-4'>
                {navigation.map((items, index) => (
                    <section key={index}>
                        <Link href={items.link} className='flex flex-row items-center gap-2 bg-blue text-white text-sm rounded-md h-12 w-[212px]'>
                            <div className='ml-4'>{items.icons}</div>
                            <p>{items.name}</p>
                        </Link>
                    </section>
                ))}
            </section>
        </nav>
    )
}
