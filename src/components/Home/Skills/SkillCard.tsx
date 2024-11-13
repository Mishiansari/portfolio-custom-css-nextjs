import Image from "next/image";
import"@/app/styles/skils.css"
/////type props
type props= {
    skill:{
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}


export  default function SkillCard  ({skill}:props)  {
    const{image, percent, title}=skill;
  return (
    <div className="skills-container">
        <Image 
        src={image} 
        alt={title}
         width={80}
          height={80} 
        className="skills-img"
        />
        <h1 className="skills-heading ">{title}</h1>
        <div className="skills-div">{percent}</div>


        </div>
  )
}
