'use client'

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'

import { useAuth, useSession } from '@clerk/nextjs';
import { checkUserRole } from '@/utils/checkUserRole';


// COMPONENTS
import Navbar from '@/components/navbar/page'
import SalesChart from '@/components/sales-graph/page'



export default function Page() {
    const { isLoaded } = useAuth();
    const { session } = useSession();
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        if (session) {
            const role = checkUserRole(session);
            setUserRole(role);
        }
    }, [session]);

    console.log(userRole);
    console.log(isLoaded);


    if(userRole == 'org:member' || 'org:administrator' ){
        return (
            <React.Fragment>
                {!isLoaded || userRole === null ? (
                    <div>
                        Loading
                    </div>
                ) : (
                    <div>
                        Welcome Admin-Client {userRole}
                        <SalesChart/>
                    </div>
                )}
            </React.Fragment>
        );
    }
}
