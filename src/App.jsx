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
          <img src="images/1.jpg" alt="My Avatar" className="avatar" />
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/Book-Haven-Bookstore/" target="_blank">
              <img src="images/bookstore.jpg" alt="Book Haven Bookstore" className="project-image" />
            </a>
            <h3>Book Haven Bookstore</h3>
            <p>Responsive online bookstore with categories and clean UI.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/Book-Haven-Bookstore/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/Book-Haven-Bookstore" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/fcc-javaScript-calculator/" target="_blank">
              <img src="images/calculator.jpg" alt="JavaScript Calculator" className="project-image" />
            </a>
            <h3>JavaScript Calculator</h3>
            <p>Basic calculator built with JavaScript. FreeCodeCamp project.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/fcc-javaScript-calculator/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/fcc-javaScript-calculator" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/fcc-25-5-clock/" target="_blank">
              <img src="images/clock.jpg" alt="25 + 5 Clock" className="project-image" />
            </a>
            <h3>25 + 5 Clock</h3>
            <p>Pomodoro-style timer for productivity. HTML, CSS, JavaScript.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/fcc-25-5-clock/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/fcc-25-5-clock" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/translator-app/" target="_blank">
              <img src="images/translator.jpg" alt="Translator App" className="project-image" />
            </a>
            <h3>Translator App</h3>
            <p>Language translator using LibreTranslate API.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/translator-app/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/translator-app" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/Weather-App/" target="_blank">
              <img src="images/weather.jpg" alt="Weather App" className="project-image" />
            </a>
            <h3>Weather App</h3>
            <p>Weather forecast by city using OpenWeatherMap API.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/Weather-App/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/Weather-App" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://hoyennhi489.github.io/github-profile-finder/" target="_blank">
              <img src="images/github.jpg" alt="GitHub Profile Finder" className="project-image" />
            </a>
            <h3>GitHub Profile Finder</h3>
            <p>Search and display GitHub profiles using the GitHub API.</p>
            <div className="project-buttons">
              <a href="https://hoyennhi489.github.io/github-profile-finder/" target="_blank" className="project-link">View Live</a>
              <a href="https://github.com/hoyennhi489/github-profile-finder" target="_blank" className="project-code">View Code</a>
            </div>
          </div>

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