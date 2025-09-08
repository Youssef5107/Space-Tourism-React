"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import styles from "../page.module.css"
import DestinationSubHeader from "@/app/components/DestinationSubHeader";


function Moon(){
    const pathname = usePathname();

    useEffect(() => {
    document.body.className = "";
    if (pathname.toLowerCase().startsWith("/destination")) document.body.classList.add("destination");
    }, [pathname]);

    
    return(
        <>
            <img src="/assets/destination/image-moon.png" alt="" />
            <div className={styles.pageMainContentArea}>
                <div>
                    <DestinationSubHeader/>
                    <div className={styles.mainContentTitle}>MOON</div>
                    <div className={styles.mainContent}>
                        See our planet as you’ve never seen it before.
                        A perfect relaxing trip away to help regain perspective and come back refreshed.
                        While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </div>
                    <hr/>
                    <div className={styles.infoArea}>
                        <div className={styles.distanceInfoArea}>
                            <div className={styles.avgDistance}>AVG. DISTANCE</div>
                            <div className={styles.distance}>384,400 KM</div>
                        </div>
                        <div className={styles.timeInfoArea}>
                            <div>
                                <div className={styles.estTime}>EST. TRAVEL TIME</div>
                                <div className={styles.time}>3 DAYS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
    
    
}

export default Moon;