import LinkCard from '../components/LinkCard';
import FeaturedLinkCard from '../components/FeaturedLinkCard';
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
import Link from 'next/link';
import SubheaderLinks from '../components/SubheaderLinks';
import Image from 'next/legacy/image';
import LinkCardI from '../components/LinkCardI';
import Footer from '../components/Footer';
import React from 'react';
import BlogSEO from '../components/BlogSEO';

export default function Links(props) {
  return (
    <React.Fragment>
      <BlogSEO
        title={'All links' + " from Jacob's Blue"}
        description="Where you can find any link ever attributed haha"
        image="/siteThumb.png"
      />
      <main className="mt-0 container-fg">
        <div className="w-full flex justify-between items-center mt-0">
          <h1 className="text-xl flex">Links</h1>
          <Link href="/" passHref legacyBehavior>
            <div className="flex py-2 space-x-1 hover:italic hover:font-light items-center cursor-pointer">
              <p>to main website</p>
              <span className="material-icons text-sm">east</span>
            </div>
          </Link>
        </div>
        <div className="container-fg">
          <div className="flex-col bg-inherit pt-6 pb-16 align-middle justify-center w-full space-y-4 ">
            <div className="border-white border-2 rounded-full mx-auto relative w-12 h-12 p-12">
              <Image
                alt="blue gradient"
                src="/logo.png"
                sizes="100vw"
                layout="fill"
              />
            </div>
            <div>
              <h1 className="flex tracking-tighter font-fruit font-medium text-8xl italic justify-center w-full align-middle">
                Jacob&#39;s Blue
              </h1>
              <SubheaderLinks />
            </div>
          </div>
          <h2 className="py-2 text-lg">Streaming</h2>
          <div className="flex flex-row w-full flex-wrap rounded-2xl overflow-hidden divide-y divide-black border-black divide-solid border-solid  border ">
            <LinkCard
              href="https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
              fai={faSpotify}
              label="Spotify"
              mui="north_east"
            />
            <LinkCard
              href="https://music.apple.com/us/artist/jacobs-black/1440563913"
              fai={faApple}
              label="Apple Music"
              mui="north_east"
            />
            <LinkCard
              href="https://www.youtube.com/channel/UCbEu4Cmh_e78gHDez9yQ5pA"
              fai={faYoutube}
              label="Youtube"
              mui="north_east"
            />
            <LinkCardI
              href="https://tidal.com/browse/artist/10532047"
              src="/icons/Tidal.svg"
              label="Tidal"
              mui="north_east"
            />
            <LinkCardI
              href="https://music.amazon.com/artists/B07K1J4GQP/jacob's-black"
              src="/icons/Amazon.svg"
              label="Amazon"
              mui="north_east"
            />
            <LinkCard
              href="https://soundcloud.com/jacobsblue"
              fai={faSoundcloud}
              label="Soundcloud"
              mui="north_east"
            />
            <LinkCardI
              href="https://audiomack.com/jacobs-black"
              src="/icons/Audiomack.svg"
              label="Audiomack"
              mui="north_east"
            />
            <LinkCard
              href="https://google.com"
              fai={faDeezer}
              label="Deezer"
              mui="north_east"
            />
            <LinkCard
              href="https://google.com"
              fai={faNapster}
              label="Napster"
              mui="north_east"
            />
          </div>
          <h2 className="py-2 text-lg">Socials</h2>
          <div className="flex flex-row w-full flex-wrap divide-y rounded-2xl overflow-hidden divide-black border-black divide-solid border-solid border">
            <LinkCard
              href="https://www.youtube.com/channel/UCbEu4Cmh_e78gHDez9yQ5pA"
              fai={faYoutube}
              label="Youtube"
              mui="north_east"
            />
            <LinkCard
              href="https://twitter.com/jacobs__blue"
              fai={faTwitter}
              label="Twitter"
              mui="north_east"
            />
            <LinkCard
              href="https://instagram.com/jacobs_blue"
              fai={faInstagram}
              label="Instagram"
              mui="north_east"
            />
            <LinkCard
              href="https://tiktok.com/@jacobs_blue"
              fai={faTiktok}
              label="Tiktok"
              mui="north_east"
            />
            <LinkCard
              href="https://www.twitch.tv/jacobs_blue"
              fai={faTwitch}
              label="Twitch"
              mui="north_east"
            />
            <LinkCard
              href="https://discord.gg/7FFkBbEA4a"
              fai={faDiscord}
              label="Discord"
              mui="north_east"
            />
            <LinkCard
              href="https://www.figma.com/@jacobs_blue"
              fai={faFigma}
              label="Figma"
              mui="north_east"
            />
            <LinkCard
              href="https://www.behance.net/jacobsblue/"
              fai={faBehance}
              label="Behance"
              mui="north_east"
            />
            <LinkCard
              href="https://github.com/jmedure"
              fai={faGithub}
              label="Github"
              mui="north_east"
            />
            <LinkCard
              href="https://dribbble.com/jmedure"
              fai={faDribbble}
              label="Dribbble"
              mui="north_east"
            />
            <LinkCard
              href="https://medium.com/@jacobsblue"
              fai={faMedium}
              label="Medium"
              mui="north_east"
            />
          </div>
          <h2 className="py-2 text-lg">Extras</h2>
          <div className="flex flex-row w-full flex-wrap divide-y rounded-2xl overflow-hidden divide-black border-black divide-solid border-solid  border">
            <LinkCardI
              href="https://genius.com/artists/Jacobs-black"
              src="/icons/Genius.svg"
              label="Genius"
              mui="north_east"
            />
            <LinkCard
              href="https://www.patreon.com/jacobsblue?fan_landing=true"
              fai={faPatreon}
              label="Patreon"
              mui="north_east"
            />
            <LinkCardI
              href="https://www.lyricallemonade.com/p/born-in-the-sunset-thoughts-to-oasis-jacobs-black"
              src="/icons/lyricalLemonade.svg"
              label="Press"
              mui="north_east"
            />
            <LinkCardI
              href="google.com"
              src="/icons/BuyMeACoffee.svg"
              label="Buy me a coffee"
              mui="north_east"
            />
          </div>
          <h2 className="py-2 text-lg">Site</h2>
          <div className="flex flex-row w-full flex-wrap divide-y rounded-2xl overflow-hidden divide-black  border-black mb-12 divide-solid border-solid  border">
            {/* <LinkCardI
            iconType="rotate"
            href="/free-game"
            src="/fg/FGIcon.svg"
            label="Free Game!"
            mui="east"
          /> */}
            {/* <LinkCardI
            href="/meditations-of-a-rockstar"
            src="/icons/Rockstar.png"
            label="Meditations of a Rockstar"
            mui="east"
          /> */}
            <LinkCardI
              href="/songs"
              src="/icons/Songs.svg"
              label="All Songs"
              mui="east"
            />
            {/* <LinkCardI href="https://google.com" src="/icons/songs.svg" label="Books" mui="east"/>
                    <LinkCardI href="https://google.com" src="/fg/fgIcon.svg" label="Recipes" mui="east"/> */}
            <LinkCardI
              href="/archive"
              src="/icons/Archive.svg"
              label=" Archive"
              mui="east"
            />
            {/* <LinkCardI
            href="/misc"
            src="/icons/Extras.svg"
            label="More"
            mui="east"
          /> */}
          </div>
          <Footer />
        </div>
        {/* <Footer /> */}
      </main>
    </React.Fragment>
  );
}
