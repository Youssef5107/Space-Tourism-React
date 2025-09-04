import styles from "../page.module.css"
import Link from "next/link";


function Header() {
    return (
        <>
            <header className={styles.headerArea}>  
                <div>
                    <img src="assets/shared/logo.svg" alt="Page logo" />
                </div>
                <div className={styles.headerOptionBtnsArea}>
                    <Link href={"./"} className={styles.headerOptionBtn}><span className={styles.optionNumber}>00</span>HOME</Link>
                    <Link href={"./Destination"} className={styles.headerOptionBtn}><span className={styles.optionNumber}>01</span>DESTINATION</Link>
                    <Link href={""} className={styles.headerOptionBtn}><span className={styles.optionNumber}>02</span>CREW</Link>
                    <Link href={""} className={styles.headerOptionBtn}><span className={styles.optionNumber}>03</span>TECHNOLOGY</Link>
                </div>
            </header>
        </>
    );

}

export default Header;