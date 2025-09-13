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
          <li><a href="#certificates">Certificates</a></li>
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
          <img src="images/Nhi 1.jpg" alt="My Avatar" className="avatar" loading="lazy" />
        </div>
      </section>

      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/beautynest-react/" target="_blank" rel="noopener noreferrer">
                <img src="images/beautynest-react.png" alt="Beautynest" className="project-image" loading="lazy" />
              </a>
              <h3>Beautynest – Cosmetics Store</h3>
              <p>Cosmetics e-commerce site built with React, featuring Products, Cart, and Orders.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/beautynest-react/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/beautynest-react.git" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/Book-Haven-Bookstore/" target="_blank" rel="noopener noreferrer">
                <img src="images/bookstore.jpg" alt="Book Haven Bookstore" className="project-image" loading="lazy" />
              </a>
              <h3>Book Haven Bookstore</h3>
              <p>Responsive online bookstore with categories and clean UI.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/Book-Haven-Bookstore/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/Book-Haven-Bookstore" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/fcc-javaScript-calculator/" target="_blank" rel="noopener noreferrer">
                <img src="images/calculator.jpg" alt="JavaScript Calculator" className="project-image" loading="lazy" />
              </a>
              <h3>JavaScript Calculator</h3>
              <p>Basic calculator built with JavaScript. FreeCodeCamp project.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/fcc-javaScript-calculator/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/fcc-javaScript-calculator" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/fcc-25-5-clock/" target="_blank" rel="noopener noreferrer">
                <img src="images/clock.jpg" alt="25 + 5 Clock" className="project-image" loading="lazy" />
              </a>
              <h3>25 + 5 Clock</h3>
              <p>Pomodoro-style timer for productivity. HTML, CSS, JavaScript.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/fcc-25-5-clock/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/fcc-25-5-clock" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/translator-app/" target="_blank" rel="noopener noreferrer">
                <img src="images/translator.jpg" alt="Translator App" className="project-image" loading="lazy" />
              </a>
              <h3>Translator App</h3>
              <p>Language translator using LibreTranslate API.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/translator-app/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/translator-app" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
                <img src="images/weather.jpg" alt="Weather App" className="project-image" loading="lazy" />
              </a>
              <h3>Weather App</h3>
              <p>Weather forecast by city using OpenWeatherMap API.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/Weather-App" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

            <div className="project-card">
              <a href="https://hoyennhi489.github.io/github-profile-finder/" target="_blank" rel="noopener noreferrer">
                <img src="images/github.jpg" alt="GitHub Profile Finder" className="project-image" loading="lazy" />
              </a>
              <h3>GitHub Profile Finder</h3>
              <p>Search and display GitHub profiles using the GitHub API.</p>
              <div className="project-buttons">
                <a href="https://hoyennhi489.github.io/github-profile-finder/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                <a href="https://github.com/hoyennhi489/github-profile-finder" target="_blank" rel="noopener noreferrer" className="project-code">View Code</a>
              </div>
            </div>

          </div>
        </section>

        <section id="techStack">
          <h2>My Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <img src="images/react.png" alt="React" loading="lazy" />
              <p>React</p>
            </div>
            <div className="tech-card">
              <img src="images/js.png" alt="JavaScript" loading="lazy" />
              <p>JavaScript</p>
            </div>
            <div className="tech-card">
              <img src="images/html5.png" alt="HTML5" loading="lazy" />
              <p>HTML5</p>
            </div>
            <div className="tech-card">
              <img src="images/css3.png" alt="CSS3" loading="lazy" />
              <p>CSS3</p>
            </div>
            <div className="tech-card">
              <img src="images/bootstrap.png" alt="Bootstrap" loading="lazy" />
              <p>Bootstrap</p>
            </div>
            <div className="tech-card">
              <img src="images/git.png" alt="Git" loading="lazy" />
              <p>Git</p>
            </div>
            <div className="tech-card">
              <img src="images/github.png" alt="GitHub" loading="lazy" />
              <p>GitHub</p>
            </div>
          </div>
        </section>

        <section id="certificates">
          <h2>My Certificates</h2>
          <p>Some of the certificates I’ve earned while learning and improving my skills:</p>
          <div className="certificates-grid">
            <div className="certificate-card">
              <img src="images/Responsive Web Design.png" alt="Responsive Web Design" loading="lazy" />
              <h3>Responsive Web Design</h3>
              <p>FreeCodeCamp</p>
            </div>
            <div className="certificate-card">
              <img src="images/JavaScript Algorithms and Data Structures.png" alt="JavaScript Algorithms and Data Structures" loading="lazy" />
              <h3>JavaScript Algorithms & Data Structures</h3>
              <p>FreeCodeCamp</p>
            </div>
            <div className="certificate-card">
              <img src="images/Front End Development Libraries.png" alt="Frontend Development Libraries" loading="lazy" />
              <h3>Frontend Development Libraries</h3>
              <p>FreeCodeCamp</p>
            </div>
          </div>
          <div className="certificates-button">
            <a
              href="https://github.com/hoyennhi489/My-Certificates"
              target="_blank"
              rel="noopener noreferrer"
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
            <a href="https://github.com/hoyennhi489" target="_blank" rel="noopener noreferrer" className="contact-link">
              💻 GitHub Profile
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Yến Nhi. Built with React.</p>
      </footer>
    </>
  )
}

export default App