"use client";
import DestinationSubHeader from "@/app/components/DestinationSubHeader";
import styles from "../page.module.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";


function Titan(){
    const pathname = usePathname();
    
    useEffect(() => {
    document.body.className = "";
    if (pathname.toLowerCase().startsWith("/destination")) document.body.classList.add("destination");
    }, [pathname]);


    return(
        <>
            <img src="/assets/destination/image-titan.png" alt="" />
            <div className={styles.pageMainContentArea}>
                <div>
                    <DestinationSubHeader/>
                    <div className={styles.mainContentTitle}>TITAN</div>
                    <div className={styles.mainContent}>
                        The only moon known to have a dense atmosphere other than Earth,
                        Titan is a home away from home (just a few hundred degrees colder!).
                        As a bonus,
                        you get striking views of the Rings of Saturn.
                    </div>

                    <div className={styles.hr}></div>
                    
                    <div className={styles.infoArea}>
                        <div className={styles.distanceInfoArea}>
                            <div className={styles.avgDistance}>AVG. DISTANCE</div>
                            <div className={styles.distance}>1.6 BIL. KM</div>
                        </div>
                        <div className={styles.timeInfoArea}>
                            <div>
                                <div className={styles.estTime}>EST. TRAVEL TIME</div>
                                <div className={styles.time}>7 YEARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
    
    
}

export default Titan;