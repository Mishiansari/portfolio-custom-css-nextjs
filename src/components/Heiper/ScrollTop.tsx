"use client"

import { useEffect, useState } from "react"

import "@/app/styles/Scroll.css"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollTop(){
    const [isVisible,setisVisible]=useState(false)
    useEffect(()=>{
   const toggleVisibility=()=>{
    if(window.scrollY > 300){
        setisVisible(true)
    } else{
        setisVisible(false)
    }

   };

   window.addEventListener('scroll',toggleVisibility);
   return()=>{
    window.removeEventListener('scroll',toggleVisibility);

   }
    },[])

    const ScrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };
    return(
        <div className="scroll-div">
            {isVisible && (
                <button onClick={ScrollTop} className="scrol-button">
                <FaArrowUp/>
                </button>
            )}
          </div>
    )
}
