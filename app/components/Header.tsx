import styles from "../page.module.css"


function Header() {
    return (
        <>
            <header className={styles.headerArea}>
                <div>
                    <img src="assets/shared/logo.svg" alt="Page logo" />
                </div>
                <div className={styles.headerOptionBtnsArea}>
                    <div className={styles.headerOptionBtn}><span className={styles.optionNumber}>00</span>HOME</div>
                    <div className={styles.headerOptionBtn}><span className={styles.optionNumber}>01</span>DESTINATION</div>
                    <div className={styles.headerOptionBtn}><span className={styles.optionNumber}>02</span>CREW</div>
                    <div className={styles.headerOptionBtn}><span className={styles.optionNumber}>03</span>TECHNOLOGY</div>
                </div>
            </header>
        </>
    );

}

export default Header;