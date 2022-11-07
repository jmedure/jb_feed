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
              <a
                className={`hover:bg-sky-200 hover:ring-1 ring-offset-2 hover:border-blue-600 hover:text-blue-700 hover:drop-shadow-xl border-neutral-400 text-neutral-400 px-3 py-1 border border-solid rounded-full no-underline ${
                  router.pathname == '/'
                    ? 'border-solid border ring-1 ring-blue-300 border-x-blue-600 border-y-blue-600 text-blue-700 bg-sky-300 drop-shadow-xl'
                    : ''
                }`}
              >
                All
              </a>
            </Link>
            <p className='group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg'>Filter by <i>All</i> results</p>
          </li>
          <li className="group transition-all">
            <Link href="/music" className="">
              <a
                className={`hover:bg-lime-200 hover:border-lime-600 ring-offset-2 hover:ring-1 hover:text-lime-800 hover:drop-shadow-xl border-neutral-400 text-neutral-400 px-3 py-1 border border-solid rounded-full no-underline ${
                  router.pathname == '/music'
                    ? 'border-solid border ring-1 border-x-lime-600 border-y-lime-600 text-lime-800 bg-lime-300 drop-shadow-xl'
                    : ''
                }`}
              >
                Music
              </a>
              
            </Link>
            <p className='group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg'>Filter by <i>Music</i> results</p>
          </li>
          <li className="group transition-all">
            <Link href="/video" className="">
            <a
                className={`hover:bg-orange-200 hover:ring-1 ring-offset-2 hover:border-orange-600 hover:text-orange-800 hover:drop-shadow-xl border-neutral-400 text-neutral-400 px-3 py-1 border border-solid rounded-full no-underline ${
                  router.pathname == '/video'
                    ? 'border-solid border ring-1 border-x-orange-600 border-y-orange-600 text-orange-800 bg-orange-300 drop-shadow-xl'
                    : ''
                }`}
              >
                Video
              </a>
            </Link>
            <p className='group-hover:visible invisible py-1 px-3 absolute bg-slate-900 z-40 text-white mt-2 drop-shadow-lg rounded-lg'>Filter by <i>Video</i> results</p>
          </li>
          {/* <li className="">
            <Link href="/writing" className="">
            <a
                className={`hover:bg-pink-400 hover:ring-1 ring-offset-2 hover:border-pink-600 hover:text-pink-700 hover:drop-shadow-xl border-neutral-400 text-neutral-400 px-3 py-1 border border-solid rounded-full no-underline ${
                  router.pathname == '/writing'
                    ? 'border-solid border ring-1 border-x-pink-600 border-y-pink-600 text-pink-700 bg-pink-400 drop-shadow-xl'
                    : ''
                }`}
              >
                Writing
              </a>
            </Link>
          </li> */}
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
