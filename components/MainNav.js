import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainNav() {
  const router = useRouter();

  return (
    <div className="pb-2 backdrop-blur-sm sticky top-[4.25rem] z-40 align-items-center text-center">
      <div className="py-2 flex w-full container space-x-4 items-center text-base">
        {/* <p className="flex-grow flex uppercase">Filters</p> */}
        
        <ul className="flex justify-between space-x-2">
          <li className="">
            <Link href="/" className="">
              <a
                className={`hover:bg-white hover:border-white hover:text-black border-neutral-400 text-neutral-400 px-3 py-1 border border-solid rounded-full no-underline ${
                  router.pathname == '/'
                    ? 'border-solid border border-x-white border-y-white text-black bg-white drop-shadow-xl'
                    : ''
                }`}
              >
                All
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/music" className="">
              <a
                className={`hover:bg-black hover:border-black hover:text-white border-neutral-400  text-neutral-400 px-2 py-1 border border-solid rounded-full decoration-transparent no-underline  ${
                  router.pathname == '/music'
                    ? 'border-solid border border-x-white border-y-white text-black bg-white drop-shadow-xl'
                    : ''
                }`}
              >
                Music
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/video" className="">
              <a
                className={`hover:bg-black hover:border-black hover:text-white border-neutral-400 text-neutral-400 px-2 py-1  border border-solid rounded-full decoration-transparent  no-underline ${
                  router.pathname == '/video'
                    ? 'border-solid border border-x-white border-y-white text-black bg-white drop-shadow-xl'
                    : ''
                }`}
              >
                Video
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/writing" className="">
              <a
                className={`hover:bg-black hover:border-black hover:text-white border-neutral-400 text-neutral-400 px-2 py-1 border border-solid rounded-full decoration-transparent no-underline ${
                  router.pathname == '/writing'
                    ? 'border-solid border border-x-white border-y-white text-black bg-white drop-shadow-xl'
                    : ''
                }`}
              >
                Writing
              </a>
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
  );
}
