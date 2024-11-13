
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";
import"@/app/styles/skills.css"

export default function Skills  ()  {
  return (
    <div className="skillc-container">
      <h1 className="skillc-heading">Skills</h1>
        <br></br><br></br><br></br>
        <div className="skillc-div">
            {skillsData.map((skill)=>{
                return(
                    <div key={skill.id}>
                        <SkillCard skill={skill}/>
                        </div>
                )
                    
            
            })}
        </div>
    
    </div>
  )
}
