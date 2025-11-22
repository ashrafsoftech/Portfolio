import { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1️⃣ DARK MODE TOGGLE
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // 2️⃣ BACK TO TOP BUTTON (SHOW / HIDE ON SCROLL)
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3️⃣ SMOOTH SCROLL FOR INTERNAL LINKS
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () =>
      links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  // Scroll To Top
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center position-relative">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn btn-sm position-absolute top-0 end-0 m-3 btn-light"
        >
          {darkMode ? (
            <i className="bi bi-sun-fill"></i>
          ) : (
            <i className="bi bi-moon-stars-fill"></i>
          )}
        </button>

        {/* PROFILE IMAGE */}
        <img
          src="./profile2.jpg"
          className="rounded-circle shadow"
          width="140"
          height="140"
          style={{
            objectFit: "cover",
            border: "4px solid rgba(255, 255, 255, 0.4)",
          }}
        />

        <h1 className="display-4 fw-bold mb-2">Hi, I'm Ashraf</h1>

        <h2 className="typing-text mb-3">
          <span id="typed"></span>
        </h2>

        <p className="lead opacity-90 mb-4">
          I build fast, responsive and user-friendly web applications.
        </p>

        <div className="d-flex gap-3 mb-4">
          <a href="#projects" className="btn btn-success btn-lg px-4">
            View Projects
          </a>
          <a
            target="_blank"
            href="https://wa.link/7fxynr"
            className="btn btn-outline-light btn-lg px-4"
          >
            Hire Me
          </a>
        </div>

        <div className="d-flex gap-4 fs-3">
          <a
            target="_blank"
            href="https://github.com/ashrafsoftech"
            className="text-white opacity-75 hover-opacity"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            target="_blank"
            href="#"
            className="text-white opacity-75 hover-opacity"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://wa.link/7fxynr"
            className="text-white opacity-75 hover-opacity"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </header>

      <div id="projects" className="portfolio container-sm text-center">
        {/* your portfolio cards stay unchanged */}
        <div className="row align-items-start">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="shadow rounded bg-body-tertiary pb-3 bg-light">
              <img
                src="./taskify.png"
                alt="taskify"
                className="w-100 rounded-top"
              />

              <div className="p-2 bg-light">
                <h6>Taskify</h6>
                <p>
                  A modern task-tracking app built with React, featuring
                  filtering, persistence, and a fluid UI.
                </p>

                <button
                  type="button"
                  className="btn btn-light btn-outline-success"
                >
                  <a
                    target="_blank"
                    href="https://taskify-2025.netlify.app/"
                    className="link link-success link-underline-none link-underline-opacity-0"
                  >
                    view project
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
            <div className="shadow rounded bg-body-tertiary pb-3 h-100">
              <img
                src="./backroads.jpeg"
                alt="backroads"
                className="w-100 rounded-top"
              />
              <div className="p-2">
                <h6>Backroads</h6>
                <p>
                  A fully responsive tour website showcasing smooth navigation,
                  reusable components, and clean UI design.
                </p>
                <button
                  type="button"
                  className="btn btn-light btn-outline-success"
                >
                  <a
                    target="_blank"
                    href="https://my-backroad.netlify.app/"
                    className="link-success link-underline-none link-underline-opacity-0"
                  >
                    view project
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={goTop}
          id="backToTop"
          className="btn btn-success rounded-circle"
        >
          back to top↑
        </button>
      )}
    </>
  );
}

export default App;
