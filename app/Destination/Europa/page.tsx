"use client";
import DestinationSubHeader from "@/app/components/DestinationSubHeader";
import styles from "../page.module.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";


function Europa(){
    const pathname = usePathname();

    useEffect(() => {
    document.body.className = "";
    if (pathname.toLowerCase().startsWith("/destination")) document.body.classList.add("destination");
    }, [pathname]);

      
    return(
        <>
            <img src="/assets/destination/image-europa.png" alt="" />
            <div className={styles.pageMainContentArea}>
                <div>
                    <DestinationSubHeader/>
                    <div className={styles.mainContentTitle}>EUROPA</div>
                    <div className={styles.mainContent}>
                        The smallest of the four Galilean moons orbiting Jupiter,
                        Europa is a winter lover’s dream.
                        With an icy surface,
                        it’s perfect for a bit of ice skating,
                        curling, hockey,
                        or simple relaxation in your snug wintery cabin.
                    </div>

                    <div className={styles.hr}></div>
                    
                    <div className={styles.infoArea}>
                        <div className={styles.distanceInfoArea}>
                            <div className={styles.avgDistance}>AVG. DISTANCE</div>
                            <div className={styles.distance}>628 MIL. KM</div>
                        </div>
                        <div className={styles.timeInfoArea}>
                            <div>
                                <div className={styles.estTime}>EST. TRAVEL TIME</div>
                                <div className={styles.time}>3 YEARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
    
    
}

export default Europa;