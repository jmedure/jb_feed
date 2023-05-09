import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainNav() {
  const router = useRouter();

  return (
    <div className="pb-2 align-items-center text-center ">
      <div className="py-2 flex w-full space-x-4 items-center text-base">
        {/* <p className="flex-grow flex uppercase">Filters</p> */}

        <ul className="flex justify-between space-x-2">
          <li className="group transition-visible">
            <Link href="/" className="">
              All
            </Link>
            <p className="group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg">
              Filter by <i>All</i> results
            </p>
          </li>
          <li className="group transition-all">
            <Link href="/music" className="">
              Music
            </Link>
            <p className="group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg">
              Filter by <i>Music</i> results
            </p>
          </li>
          <li className="group transition-all">
            <Link href="/video" className="">
              Video
            </Link>
            <p className="group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg">
              Filter by <i>Video</i> results
            </p>
          </li>
          <li className="group transition-all">
            <Link href="/writing" className="">
              Writing
            </Link>
            <p className="group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg">
              Filter by <i>Writing</i> results
            </p>
          </li>
          {/* <li className="">
                    <Link href="/shop" className="">
                        <a className={`hover:bg-lime-400 px-4 py-1 border border-solid border-blue-700 rounded-full decoration-transparent no-underline ${router.pathname == "/shop" ? "bg-lime-400 " : "bg-white"}`}>Shop</a>
                    </Link>
                </li> */}
        </ul>
      </div>
    </div>
  );
}
