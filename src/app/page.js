'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//useRoute -> next/navigation

export default function Home() {

  const router = useRouter()

  console.log(router);

  function handleNavigate() {
    router.push('products')
  }


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1>Welcome to my NextJs24 Course Journey</h1>
     <Link href={'/products'}>navigate to products page</Link>
     <Link href={'/account'}>navigate to account page</Link>

     <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRoute</h2>
     <button onClick={handleNavigate}>Navigate to products page using use router</button>
    </main>
  );
}
