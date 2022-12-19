import Link from 'next/link';
import Image from 'next/image';
import Resource from '/components/Resource.js';

export default function Resources() {
  return (
    <div className="container">
      <div className="flex sticky top-0 p-4 align-middle justify-center mt-16 md:mt-8 transition-all hover:text-blue-500">
        <Link href="/" passHref>
          <div className="flex col-span-1 py-2 justify-end space-x-1 items-center hover:drop-shadow-xl transition-all duration-200 cursor-pointer">
            <div className="border-white border-2 border-solid rounded-full relative p-5 cursor-pointer">
              <Image
                alt="blue gradient"
                src="/logo.png"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="space-y-12 py-12">
        <div className="space-y-5">
          <h2 className="font-mont text-neutral-500 text-base font-medium tracking-tight">
            Templates
          </h2>
          <div className="rscCONT space-y-2">
            <Resource
              href="/"
              imgAlt="ableton live logo"
              imgURL="/icons/Ableton.svg"
              title="My vocal template"
              tag="Ableton • 2022"
            />
            <Resource
              href="/"
              imgAlt="ableton live logo"
              imgURL="/icons/Ableton.svg"
              title="My default production template"
              tag="Ableton • 2022"
            />
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="font-mont text-neutral-500 text-base font-medium tracking-tight">
            Templates
          </h2>
          <div className="rscCONT space-y-2">
            <Resource
              href="/"
              imgAlt="ableton live logo"
              imgURL="/icons/Ableton.svg"
              title="My vocal template"
              tag="Ableton • 2022"
            />
            <Resource
              href="/"
              imgAlt="ableton live logo"
              imgURL="/icons/Ableton.svg"
              title="My default production template"
              tag="Ableton • 2022"
            />
            <Resource
              href="/"
              imgAlt="ableton live logo"
              imgURL="/icons/Ableton.svg"
              title="My default production template"
              tag="Ableton • 2022"
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex w-full space-x-2 p-3 bg-[#EB5354]/10 shadow-[#EB5354] rounded-xl items-start justify-between sm:hover:cursor-pointer sm:hover:bg-[#EB5354]/20 transition-all duration-150">
            <div className="flex-block sm:flex space-y-4 sm:space-y-0 sm:items-center sm:space-x-4 items-start">
              <div className="flex items-start rounded-lg">
                <div className="flex p-8 relative">
                  <Image
                    alt="patreon logo"
                    src="/icons/patreon.svg"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="flex-block font-mont w-full space-y-1 sm:space-y-0 leading-4">
                <p className="text-xl md:text-xl font-medium">
                  Enjoying this page?
                </p>
                <p className="text-base md:text-base sm:w-[90%] text-neutral-700">
                  Consider joining my Patreon where I share more resources like
                  these, stems and sessions for all my songs + much more.
                </p>
              </div>
            </div>
            <span className="material-icons text-xl sm:pr-2 text-[#EB5354]">
              north_east
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
