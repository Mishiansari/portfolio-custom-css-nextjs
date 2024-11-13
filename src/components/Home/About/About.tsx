
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import"@/app/styles/about.css"

export default function About  () {
  return (
    <div className="about-container">
        {/* .......SEctionHeading..... */}
                      <h1 className="about-heading"> About Me</h1>    
        <div className="about-div1">
            {/* ....Text content.... */}
            <div>
                <h1 className="about-heading1">
                    {aboutInfo.title}
                    </h1>
                    <p className="about-text">
                        {aboutInfo.description}
                        </p>
 
                  <div className="about-div2">
                    <div className="about-div3 ">
                        <div className="about-div4">
                            <FaCheck className="about-fa" />
                        </div>
                        <p className="about-text1">
                          Frontend Development
                          </p>

                    </div>
                  </div>
                  </div>
              

                  </div>
                
                    </div>
                
            
           
  
  )
}
