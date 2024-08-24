import { usePathname } from "next/navigation"



export default function Car() {

    const pathName = usePathname();
    console.log(pathName);
    const searchParams = userSearchParams();

    console.log(searchParams.get('search'), searchParams.get('randomvalue'));



    return <div>
        <h1>This is Cart component</h1>
    </div>
}