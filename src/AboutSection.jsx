import { useState, useEffect, useRef } from "react";

export default function AboutSection() {

  const items = [
    { 
      title: "Education",
      text: "Bachelor of Software Engineering — focused on Web Development, System Development, and Software Engineering."
    },
    { 
      title: "Skills",
      text: " Laravel • Code Igniter • REST API • MySQL • Bootstrap • HTML • CSS •  UI/UX Basic"
    },
    { 
      title: "Social Media",
      text: "GitHub • LinkedIn • Instagram"
    },
    { 
      title: "Achievements",
      text: "HKI Computer Program • Certified Associate Data Scientist"
    }
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const next = () => setIndex(prev => (prev + 1) % items.length);
  const prev = () => setIndex(prev => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: containerRef.current.offsetWidth * index,
      behavior: "smooth"
    });
  }, [index]);

  return (
    <div className="text-center text-white p-5">

      {/* TITLE */}
      <h1 className="fw-bold" style={{color:"#6BFF33"}}>
        WHO AM I?
      </h1>

      {/* PARAGRAPH */}
      <p className="mt-3 w-75 mx-auto">
        Junior Web Developer with approximately one year of experience in 
        developing web applications using Laravel and CodeIgniter. Experienced in 
        front-end and back-end development, RESTful APIs, responsive UI, and 
        translating business requirements into functional web solutions. Also familiar 
        with basic data analysis for application improvement.
      </p>

      {/* CAROUSEL */}
      <div className="carousel-wrapper">

        <button className="nav left" onClick={prev}>❮</button>

        <div className="carousel" ref={containerRef}>
          {items.map((item, i) => (
            <div className="card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <button className="nav right" onClick={next}>❯</button>

        {/* DOTS */}
        <div className="dots">
          {items.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
