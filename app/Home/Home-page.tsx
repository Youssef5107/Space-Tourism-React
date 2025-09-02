import styles from "./Home-page.module.css";

function HomePage(){
    return(
        <>
            <div className={styles.pageArea}>
                <div>
                    <div className={styles.pageIntroduction}>So, you want to travel to</div>
                    <div className={styles.pageTitle}>Space</div>
                    <div className={styles.pageContent}>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </div>
               </div>
               <div className={styles.exploreArea}>
                    <div className={styles.explore}>Explore</div>
               </div>
            </div>
        
        </>
    );

}


export default HomePage;