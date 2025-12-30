import Galaxy from "./Galaxy";
import "./Home.css";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import TextType from "./TextType";
import { Link, Element } from "react-scroll";


export default function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        
        {/* BACKGROUND GALAXY */}
        <Galaxy />

        {/* OVERLAY CONTENT */}
        <div className="home-overlay">
          <div className="home-card">
            <h1><TextType className="title" text={["PORTFOLIO"]} typingSpeed={700} pauseDuration={1500} showCursor={false} cursorCharacter="|" /></h1>
            <h2 className="subtitle">web developer</h2>

            <p className="desc">
              Creative & Passionate Developer — building modern digital experience
            </p>

            <div>
              <button className="btn-main">See My Work</button>
              <button className="btn-main">Download CV!</button>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION ABOUT ME */}
      <div style={{ width: "100vw", height: "fit-content", position: "relative", backgroundColor: "#0f0f0f" }}>
        <div className="container justify-content-center align-items-center flex-md-row flex-column h-100 pt-5">
          <AboutSection />
        </div>
      </div>

      {/* SECTION PROJECTS */}
      <ProjectsSection />

    
    </>
  );
}
