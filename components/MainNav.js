import Link from "next/link"
import styles from '../styles/MainNav.module.css'

export default function MainNav() {
    return (
        <div className={styles.mainNav}>
            <Link href="/" className={styles.mainNavLink}>
                <a>All</a>
            </Link>
            <Link href="#" className={styles.mainNavLink}>
                <a>Music</a>
            </Link>
            <Link href="#" className={styles.mainNavLink}>
                <a>Shop</a>
            </Link>
            <Link href="#" className={styles.mainNavLink}>
                <a>Video</a>
            </Link>
            <Link href="#" className={styles.mainNavLink}>
                <a>Writing</a>
            </Link>
        </div>
    )
}