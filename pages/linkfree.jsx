import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faYoutube,
    faApple,
    faInstagram,
    faTwitter,
    faTiktok,
    faSpotify,
    faSoundcloud,
    faDeezer,
    faNapster,
    faTwitch,
    faPatreon,
    faFigma,
    faGithub,
    faBehance,
    faDribbble,
    faMedium,
  } from '@fortawesome/free-brands-svg-icons';
import LinkCard from '../components/LinkCard';
import LinkCardLF from '../components/LinkCardLF';

export default function linkfree() {
  return (
    <div className="bg-neutral-900">
      <main className="container-blog h-full text-neutral-100">
        <div className="w-full flex justify-between flex-row items-center py-6 text-2xl">
          <div className="flex-row flex items-center space-x-2">
            <div className="rounded-full relative p-4 cursor-pointer">
              <Image
                alt="blue gradient"
                src="/logo.png"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
            <h1 className="font-medium">Linkfree</h1>
          </div>
          <div className="text-sm text-neutral-400">
            <p>v.1.0 (MVP)</p>
          </div>
        </div>
        <div className="py-12 space-y-8">
          {/* <div className="p-6 bg-blue-900/20 backdrop-blur-lg rounded-xl border-blue-400 border"> */}
          <p className="text-xl">
            This is a free, mobile responsive, and completely customizable
            linktree clone made using <a className="dark">Next.js</a>, styled
            with <a className="dark">Tailwind UI</a>, hosted on{' '}
            <a className="dark">Vercel</a> and tracked with privacy centric
            analytics tool, <a className="dark">Simple Analytics</a>. The very same linktree clone <Link href="/links" className='color-[#7DE0FF]'><a className='dark'>I use</a></Link> on my site.
          </p>
          <p className="text-xs text-neutral-400">
            Disclaimer: If you choose to sign up and pay for any of the paid tier services I will claim affiliate revenue on some of these links. I only will ever recommend products actually like and use.
          </p>
          <p className="text-xl">
            There are definitely some hurdles to getting started with this current
            version so I put together a brief <Link href="/how-to" className='dark'><a className='dark'>how-to</a></Link> covering the aforementioned services and generally how to make this yours.
         </p>
         <p className='text-xl'>
            You can start by cloning or downloading my github repo.
          </p>
          
          <div className="flex-row flex items-center space-x-4 w-full">
            <a href="https://github.com" className='w-full p-4 hover:relative hover:-translate-y-1 transition-all duration-200 bg-neutral-800/40 rounded-lg items-center flex flex-row justify-between no-underline hover:drop-shadow-2xl hover:text-white border border-neutral-500 hover:border-white hover:bg-neutral-800/80'>
              <div className="items-center flex-row flex space-x-2 text-white">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 align-middle justify-center text-2xl"
                />
                <p className='text-lg'>Github</p>
              </div>
              <span className="material-icons">north_east</span>
            </a>
            <a href="https://github.com" className='p-4 hover:relative hover:-translate-y-1 transition-all duration-200 bg-blue-800/20 rounded-lg items-center flex flex-row text-blue-400 justify-between no-underline hover:drop-shadow-2xl hover:text-white border border-blue-400/50 hover:border-blue-500 hover:bg-blue-800/50 w-full'>
              <p className='text-lg text-white group'>How-to</p>
              <span className="material-icons">east</span>
            </a>
          </div>
          <p className="text-xl py-12">
            Example linkfree site:
          </p>
          {/* <div className='flex w-full text-white align-middle justify-center items-center'>
            <span className="material-icons text-white">south</span>  
          </div> */}
        </div>
        <div className='space-y-4'>
        <div className="w-full flex z-30 bg-neutral-900/10 backdrop-blur-lg justify-between flex-row items-center py-6 text-2xl px-6 border border-neutral-600 rounded-full sticky top-8">
          <div className="flex-row flex items-center space-x-2">
            <div className="rounded-full relative p-4 cursor-pointer">
              <Image
                alt="blue gradient"
                src="/logo.png"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
            <h1 className="font-medium">Artist Name</h1>
          </div>
          <div className="text-sm text-neutral-400">
            <p>v.1.0 (MVP)</p>
          </div>
        </div>
        <div className="flex-col bg-inherit pt-6 pb-16 align-middle justify-center w-full space-y-4 ">
              <div className="border-white border-2 rounded-full mx-auto relative w-12 h-12 p-12">
                <Image
                  alt="blue gradient"
                  src="/logo.png"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }} />
              </div>
              <div>
                <h1 className="flex text-white tracking-tighter font-fruit font-medium text-8xl italic justify-center w-full align-middle">
                  Jacob&#39;s Blue
                </h1>
              </div>
            </div>
            <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faSpotify}
                label="Spotify"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faApple}
                label="Apple"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faInstagram}
                label="Instagram"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faSpotify}
                label="Spotify"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faApple}
                label="Apple"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faInstagram}
                label="Instagram"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faSpotify}
                label="Spotify"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faApple}
                label="Apple"
                mui="north_east"
              />
              <LinkCardLF
                href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
                fai={faInstagram}
                label="Instagram"
                mui="north_east"
              />
        </div>
        <div
          id="footer"
          className="items-center flex flex-row text-xs font-mono space-x-8 py-12"
        >
          <Link href="/how-to"><a className='dark'>How-to</a></Link>
          <p className=''>by <Link href="/"><a className='dark'>Jacobs blue</a></Link></p>
          <Link href="/"><a className='dark'>Traffic on this site</a></Link>
        </div>
      </main>
    </div>
  );
}
