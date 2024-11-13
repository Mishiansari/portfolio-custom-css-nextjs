import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import "@/app/styles/home.css"


export default function Home(){
    return(
        <div className="home-container">
            <Hero/>
            <About />
            <Skills />
            <Contact/>
            
        </div>
    )
}