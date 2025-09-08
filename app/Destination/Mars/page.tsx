"use client";
import DestinationSubHeader from "@/app/components/DestinationSubHeader";
import styles from "../page.module.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";


function Mars(){
    const pathname = usePathname();
    
    useEffect(() => {
    document.body.className = "";
    if (pathname.toLowerCase().startsWith("/destination")) document.body.classList.add("destination");
    }, [pathname]);

    
    return(
        <>
            <img src="/assets/destination/image-mars.png" alt="" />
            <div className={styles.pageMainContentArea}>
                <div>
                    <DestinationSubHeader/>
                    <div className={styles.mainContentTitle}>MARS</div>
                    <div className={styles.mainContent}>
                        Don’t forget to pack your hiking boots.
                        You’ll need them to tackle Olympus Mons,
                        the tallest planetary mountain in our solar system.
                        It’s two and a half times the size of Everest!
                    </div>
                    <hr/>
                    <div className={styles.infoArea}>
                        <div className={styles.distanceInfoArea}>
                            <div className={styles.avgDistance}>AVG. DISTANCE</div>
                            <div className={styles.distance}>225 MIL. KM</div>
                        </div>
                        <div className={styles.timeInfoArea}>
                            <div>
                                <div className={styles.estTime}>EST. TRAVEL TIME</div>
                                <div className={styles.time}>9 MONTHS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
    
    
}

export default Mars;