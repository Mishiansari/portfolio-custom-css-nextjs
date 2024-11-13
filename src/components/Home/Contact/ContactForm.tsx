import "@/app/styles/contactform.css"
export default function ContactForm  ()  {
  return (
    <div className="contact-form">
    <h1 className="contactform-div">
        Get In Touch!
    </h1>
    <p className="tcontact-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate eveniet temporibus odio aperiam, doloremque inventore illo 
        excepturi! Perferendis sed libero facilis optio repellat expedita quos ex sit qui quam!
        </p>
        {/* ......Input Fields.... */}
        <form className="contact-e">
            <div className="contact-div1">
            
                <input 
                type="text"
                 placeholder="first Name" 
                 className="contact-img"/>
                  <input 
                type="text"
                 placeholder="LasT Name" 
                 className="contact-input"/>
            </div>
            <div className="contact-div2">
            
                <input 
                type="text"
                 placeholder="Email Address" 
                 className="contact-email"/>
                  <input 
                type="text"
                 placeholder="Phone Number" 
                 className="contact-phone"/>
            </div>
            <div>
                <select className="contact-section">
                    <option value="" disabled selected >
                        Selecte An Option
                    </option>
                    <option value="frontend">
                          Frontent Development

                    </option>
                    <option value="Backent">
                          Backend Development

                    </option>
                    <option value="Fullstack">
                          Fullstack Development
                    </option>
                </select>
            </div>
            
            <textarea 
            className="contact-textarea"
             rows={7}
              placeholder="Message">
              </textarea>
              <div className="contact-div3 ">
                <button className="contact-button">Send Message</button>
              </div>

        </form>

        </div>
  )
}
