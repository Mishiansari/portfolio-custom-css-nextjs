"use client"
import NavBar from "./Nav";


export default function ResponsiveNav(){
    

    const showNavHundler=()=>(true)
    
    return(
        <div>
            <NavBar openNav={showNavHundler} />
           
        </div>
    )
}