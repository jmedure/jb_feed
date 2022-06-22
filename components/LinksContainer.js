import Link from "next/link"
import styles from "../styles/LinksContainer.module.css"

export default function LinksContainer() {

    var spotify = process.env.SPOTIFY_ARTIST_PAGE

    return (
        <div className={styles.linksContainer}>
            <div className={styles.links}>
                
                    <a href="%process.env.SPOTIFY_ARTIST_PAGE%">Spotify</a>
                
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
                </Link>
            </div>
            <button className={styles.linksButton }>All links</button>
        </div> 
    )
}