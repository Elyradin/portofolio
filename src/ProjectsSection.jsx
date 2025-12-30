import "./Projects.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Persuratan Fakultas Geografi",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "Peminjaman alat Laboratorium",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "TurnBackHoax - Mafindo",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "Predict Pipe Stuck in Drilling - PT PDU",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "Culynarindo - Bangkit Project",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "CGAA Simulation",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "Desain Website Provinsi Jawa Tengah",
      desc: "Personal portfolio using React + CSS Animation",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
    {
      title: "Zero Plastic Campaign",
      desc: "Web app for plastic reduction campaign",
      img: "https://i.ibb.co/qxTBW1F/image.png"
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt="project" />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
