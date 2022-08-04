import Link from "next/link"
import styles from '../styles/MainNav.module.css'
import { useRouter } from "next/router";
import Breadcrumbs from "nextjs-breadcrumbs";

export default function MainNav() {
    
    const router = useRouter();

    return (
        <div className="my-2 bg-white/90 sticky backdrop-blur-sm top-[4.7rem] z-40 align-items-center text-center ">
            
            <div className="border-t py-4 border-solid border-neutral-500 flex w-full container justify-between items-center text-base">
                
                <p className="flex-grow flex">filters </p>
            <ul className="flex justify-between space-x-2">
                <li className="">
                    <Link href="/" className="">
                        <a className={`hover:text-black hover:border-black border-neutral-400 text-neutral-400 px-2 py-1 border border-solid rounded-full no-underline ${router.pathname == "/" ? "border-solid border border-x-black border-y-black text-black " : ""}`}>All</a>
                    </Link>
                </li>
                <li className="">
                    <Link href="/music" className="">
                        <a className={`hover:text-black hover:border-black border-neutral-400 text-neutral-400 px-2 py-1 border border-solid rounded-full decoration-transparent no-underline  ${router.pathname == "/music" ? "border-solid border border-x-black border-y-black text-black " : " text-neutral-400"}`}>Music</a>
                    </Link>
                </li>
                <li className="">
                    <Link href="/video" className="">
                        <a className={`hover:text-black hover:border-black border-neutral-400 text-neutral-400 px-2 py-1  border border-solid rounded-full decoration-transparent  no-underline ${router.pathname == "/video" ? "border-solid border border-x-black border-y-black text-black" : ""}`}>Video</a>
                    </Link>
                </li>
                <li className="">
                    <Link href="/writing" className="">
                        <a className={`hover:text-black hover:border-black border-neutral-400 text-neutral-400 px-2 py-1 border border-solid rounded-full decoration-transparent no-underline ${router.pathname == "/writing" ? "border-solid border border-x-black border-y-black text-black" : ""}`}>Writing</a>
                    </Link>
                </li>
                {/* <li className="">
                    <Link href="/shop" className="">
                        <a className={`hover:bg-lime-400 px-4 py-1 border border-solid border-black rounded-full decoration-transparent no-underline ${router.pathname == "/shop" ? "bg-lime-400 " : "bg-white"}`}>Shop</a>
                    </Link>
                </li> */}
            </ul>
        </div>
    </div>
    )
}