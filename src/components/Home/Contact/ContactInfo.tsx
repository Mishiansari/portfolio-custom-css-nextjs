import { contactData } from "@/Data/data";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import "@/app/styles/contactinfo.css"

export default function ContactInfo (){
  return (
    <div>
      <div className="contactinfo-container">
        <div className="contactinfo-div">
          <FaPhone className="contactinfo-fa"  />
         </div>
         <div>
          <h1 className="contactinfo-heading">Phone</h1>
          <h1 className="contactinfo-heading1">{contactData.phone}</h1>
         </div>
      </div>
      <div className="contactinfo-div2 ">
        <div className="contactinfo-div3">
          <FaEnvelope
           className="contactinfo-fae"  />
         </div>
         <div>
          <h1 className="contactinfo-heading2">Email Address</h1>
          <h1 className="contactinfo-heading3">{contactData.email}</h1>
         </div>
      </div>
      <div className="contractinfo-div4">
        <div className="contactinfo-div5">
          <FaMap className="contactinfo-fm"  />
         </div>
         <div>
          <h1 className="contact-heading4">Address</h1>
          <h1 className="contact-heading5">{contactData.address}</h1>
         </div>
      </div>
    </div>
  )
}
