'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart () {

    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('randomvalue'));




    
    return <div>
        <h1>Cart Shop Page</h1>
    </div>
}