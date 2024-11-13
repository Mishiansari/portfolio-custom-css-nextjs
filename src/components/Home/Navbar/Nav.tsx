"use client"
import { navLinks } from "@/constant/constant"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiBars3BottomRight } from "react-icons/hi2"
import "@/app/styles/nav.css"


///deifne props type
type props ={
    openNav:()=>void
}



export default function NavBar({openNav}:props){
    const[navBg,setNavBg]= useState(false)
    
    useEffect(()=>{
        const handler=()=>{
            if(window.scrollY>=90 ){
                setNavBg(true);
     
        }if(window.scrollY < 90){
            setNavBg(false)
        }
    };
    window.addEventListener("scroll",handler)
    return()=>{
        window.removeEventListener("scroll",handler)
    }
       
    }, []);
    return(
        <div className={` fixed ${navBg ?'':'fixed'} nav-container`}>
            <div className="nav-div">
            {/* ........logo..... */}
            <Image 
            src="/Images/logo.png"
            alt="Logo"
            width={80}
            height={80}
className="nav-img"                                                 
            />
            {/* .....Nav links.... */}

            <div className="nav-div1">
                <div className="nav-div2">
                
                {navLinks.map((navLinks)=>{
                    return(<Link key={navLinks.id} href={navLinks.url}>
                        <p className="nav_link">{navLinks.label}</p>
                    </Link>
                    )
                })}
                </div>
                {/* ........Buttons.... */}

                <div className="nav-div3">
                    <button  className="nav-button">
                        Hire Me
                    </button>
                    {/* .......Burger...... */}
                    <HiBars3BottomRight onClick={openNav} className="nav-hi" />

                </div>

            </div>
            
            </div>
            </div>
            )}
