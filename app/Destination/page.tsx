"use client";
import styles from "./page.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Moon from "./Moon/page";

function DestinationPage(){
    const pathname = usePathname();

    useEffect(() => {
    document.body.className = "";
    if (pathname.toLowerCase().startsWith("/destination")) document.body.classList.add("destination");
    }, [pathname]);

  
    return(
        <>
            <Moon/>
        </>
    );
}


export default DestinationPage;