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
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-50}
                className="btn-main"
              >
                See My Work
              </Link>
              <a
                href="https://drive.google.com/file/d/1-eXNviU1VO8cpnx9RmVpBvXPEzmxEw74/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main"
              >Download CV!</a>
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
