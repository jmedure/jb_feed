import Link from "next/link"
import styles from "../styles/LinksContainer.module.css"
import Button from "./Button";
import {faDiscord, faYoutube, faApple, faInstagram, faTwitter, faTiktok, faSpotify, faSoundcloud, faDeezer, faAmazon, faNapster, faTwitch, faPatreon, faFigma, faGithub,} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function LinksContainer() {

    var spotifyLink = "https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
    var appleLink = "https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
    var youtubeLink = "https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"
    var instaLink = "https://open.spotify.com/album/3nAER17uMf2QOuJwSCIOJB?si=hS-He9BwRomfBTJPv9FKww"

    return (
        <div className="justify-between space-x-2 w-full flex">
            <div className="flex flex-grow justify-between border-solid items-center border-black border rounded-full px-1">
                
                
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faSpotify} className="items-center h-full text-2xl"/>
                </a>
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faApple} className="items-center h-full text-2xl"/>
                </a>
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faYoutube} className="w-8 items-center h-full text-2xl"/>
                </a>
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faAmazon} className="items-center h-full text-2xl"/>
                </a>
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faInstagram} className="items-center h-full text-2xl"/>
                </a>
                <a href={spotifyLink} className="cursor-pointer items-center flex p-2" target="_blank" rel='noreferrer noopener'>
                    <FontAwesomeIcon icon={faTwitter} className="items-center h-full text-2xl"/>
                </a>
{/*                 
                <Link href="process.env.APPLEMUSIC_LINK" className={styles.mainNavLink}>
                    <a>Apple Music</a>
                </Link>
                <Link href="process.env.YOUTUBE_LINK" className={styles.mainNavLink}>
                    <a>Youtube</a>
                </Link>
                <Link href="process.env.SOUNDCLOUD" className={styles.mainNavLink}>
                    <a>Soundcloud</a>
                </Link>
                <Link href="process.env.INSTAGRAM" className={styles.mainNavLink}>
                    <a>Instagram</a>
                </Link> */}
            </div>
            <Link href="/links" legacyBehavior>
                <div className="group decoration-neutral-500  cursor-pointer flex items-center px-4 align-middle text-white bg-black rounded-full py-2">
                    <p className="">All links</p>
                    <span className="material-icons text-sm">east</span>
                </div>
            </Link>
        </div>
    );
}