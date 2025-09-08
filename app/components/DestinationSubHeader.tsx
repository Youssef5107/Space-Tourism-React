import styles from "../Destination/page.module.css";
import Link from "next/link";

function DestinationSubHeader(){
    return(
        <>
            <nav className={styles.nav}>
                <Link className={styles.Link} href="/Destination/Moon">MOON</Link>
                <Link className={styles.Link} href="/Destination/Mars">MARS</Link>
                <Link className={styles.Link} href="/Destination/Europa">EUROPA</Link>
                <Link className={styles.Link} href="/Destination/Titan">TITAN</Link>
            </nav>
        </>
    );
}

export default DestinationSubHeader;