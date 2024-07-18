import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
    return (
        <React.Fragment>
            <SignIn />
        </React.Fragment>
    )
}
