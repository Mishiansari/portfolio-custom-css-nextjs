import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "@/app/styles/contact.css"


export default function Contact() {
  return (
    <div className="contact-container">
        <div className="contact-div">
            {/* ........contact form....... */}

            <div>
                <ContactForm />
            </div>
            {/* .......contact info.... */}
            <div className="contact-div2">
            <ContactInfo />
            </div>
        </div>
        </div>
  )
}
