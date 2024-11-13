import { BaseInfo } from "@/Data/data"
import { FaDownload } from "react-icons/fa"
import Image from "next/image"
import "@/app/styles/hero.css"


export default function Hero() {
    return(
        <div className="hero-container">
        <div className="hero-div">
        <div className="hero-div1">
            {/* ...... text content...... */}
            <div >
                {/* ....sub heading.... */}
                <h1 className="hero-heading">
                I am {BaseInfo.name}
                </h1>
                {/* ........Title...... */}
                <h1 className="hero-heading1">
                    {BaseInfo.position}
                    </h1>
                    {/* .....Despcription..... */}
                <p className="hero-text">
                    {BaseInfo.description}
                    </p>
                    {/* .......Button...... */}
                    <button className="hero-button">
                        <span>Download Cv</span>
                        <FaDownload />
                    </button>
            </div>
            {/*.....Image content...... */}
            <div className="hero-div3">
                <Image 
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                />
            </div>
        </div>
        </div>
        </div>
    )
}
        
        
  

