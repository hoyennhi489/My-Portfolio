import './App.css'

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="images/LOGO YN.png" alt="Yến Nhi Logo" />
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
            <span className="open">&#9776;</span>   {/* ☰ */}
            <span className="close">&times;</span>  {/* × */}
        </label>

        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techStack">Tech Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about">
        <div className="about-text">
          <h2>Hey, I'm Yến Nhi 👋</h2>
          <h1><span>Frontend</span> Developer</h1>
          <p>I’m a former nurse now pursuing a career as a <strong>Frontend Developer</strong>.</p>
          <p>I’m passionate about <strong>React</strong> and enjoy building user-friendly, intuitive web interfaces.</p>
          <div className="about-buttons">
            <a href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="avatar-container">
          <img src="images/Nhi 1.jpg" alt="My Avatar" className="avatar" />
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* Các project-card giữ nguyên */}
          <div className="project-card">
            <a href="https://hoyennhi489.github.io/beautynest-react/" target="_blank">
              <img src="images/beautynest-react.png" alt="Beautynest" className="project-image" />
            </a>
            <h3>Beautynest – Cosmetics Store</h3>
            <p>Cosmetics e-commerce site built with React, featuring Products, Cart, and Orders.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/beautynest-react/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/beautynest-react.git" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          {/* ... các project-card khác giữ nguyên ... */}

        </div>
      </section>

      <section id="techStack">
        <h2>My Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <img src="images/react.png" alt="React" />
            <p>React</p>
          </div>
          <div className="tech-card">
            <img src="images/js.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-card">
            <img src="images/html5.png" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="tech-card">
            <img src="images/css3.png" alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="tech-card">
            <img src="images/bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="tech-card">
            <img src="images/git.png" alt="Git" />
            <p>Git</p>
          </div>
          <div className="tech-card">
            <img src="images/github.png" alt="GitHub" />
            <p>GitHub</p>
          </div>
        </div>
      </section>

      <section id="certificates">
        <h2>My Certificates</h2>
        <p>Some of the certificates I’ve earned while learning and improving my skills:</p>
        <div className="certificates-grid">
          <div className="certificate-card">
            <img src="images/Responsive Web Design.png" alt="Responsive Web Design" />
            <h3>Responsive Web Design</h3>
            <p>FreeCodeCamp</p>
          </div>
          <div className="certificate-card">
            <img src="images/JavaScript Algorithms and Data Structures.png" alt="JavaScript Algorithms and Data Structures" />
            <h3>JavaScript Algorithms & Data Structures</h3>
            <p>FreeCodeCamp</p>
          </div>
          <div className="certificate-card">
            <img src="images/Front End Development Libraries.png" alt="Frontend Development Libraries" />
            <h3>Frontend Development Libraries</h3>
            <p>FreeCodeCamp</p>
          </div>
        </div>

        <div className="certificates-button">
          <a
            href="https://github.com/hoyennhi489/My-Certificates"
            target="_blank"
            className="project-link"
          >
            View All Certificates
          </a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or check out my GitHub profile!</p>

        <div className="contact-info">
          <a href="mailto:hyn489@gmail.com" className="contact-link">
            📧 hyn489@gmail.com
          </a>
          <a href="https://github.com/hoyennhi489" target="_blank" className="contact-link">
            💻 GitHub Profile
          </a>
        </div>
      </section>
    </>
  )
}

export default App