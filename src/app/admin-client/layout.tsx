'use client'

import Navbar from '@/components/navbar/page'
import React from 'react'


// PROVIDER
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// ICONS 
import {
  Bell
} from "lucide-react"

// COMPONENTS
import { Button } from '@/components/ui/button'

interface Props {}

function Layout({ children } : Readonly<{children: React.ReactNode;}> ) {


    return (
        <>
            <div className='flex flex-row md:bg-[white] sm:bg-[darkBlue]'>
                <Navbar />
                <main className='flex flex-col w-full'>
                    <header className='flex justify-end items-center w-full h-[96px] gap-8 bg-dividerFAWhite'>
                      <Button className='rounded-full bg-blue'>
                        <Bell  />  
                      </Button>
                      <div className='flex flex-row items-center justify-center w-auto mr-[60px] '>
                          <SignedIn>
                            <UserButton  />  
                          </SignedIn>
                      </div> 
                    </header>
                    <div className='flex w-full h-full bg-gray'>
                      {children}  
                    </div>
                </main>
            </div>
        </>
    )

}

export default Layout