import React from "react";
import styles from "./About.module.css";
async function fetchRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const randomQuote = data.content;

    // Display the quote
    const quoteElement = document.querySelector(".quote-text p");
    quoteElement.innerText = `“${randomQuote}”`;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

// Function to start automatic refresh
function startAutoRefresh() {
  setInterval(fetchRandomQuote, 10000);
}

// Initial fetch when the page loads
fetchRandomQuote();

// Start automatic refresh
startAutoRefresh();

function About() {
  return (
    <>
      <main className="px-5 me-5">
        <div className="welcome mt-5">
          <p>Nice to meet you!</p>
          <h1 className="text-dark">Welcome to...</h1>
        </div>
        <div className="d-flex flex-row mt-5">
          <div className={styles.leftContainer}>
            <div className="about">
              <div className="box-img position-relative">
                <img src="./young-man.png" alt="" className="img-about" />
              </div>
              <div className={`${styles.boxText} text-center `}>
                <h1 className={`${styles.gradientText} mt-5 `}>
                  Agus Setiawan
                </h1>
                <p>
                  <span>Web Developper</span> based in <span>Indonesia</span>
                </p>
                <a href="" className={styles.myCv}>
                  Download My CV{" "}
                  <i className="bi bi-arrow-down-square-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={`container ${styles.rightContainer}`}>
            <div className="row row-cols-2">
              <div className="col">
                <p>
                  <i className="bi bi-telephone-forward-fill me-2"></i> +62
                  878-2236-8008
                </p>
                <p>
                  <i className="bi bi-envelope-arrow-down-fill me-2"></i>
                  agussetiawanphy3@gmail.com
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="bi bi-person-rolodex me-2"></i> 32 yrs
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i> Indonesia,
                  Indramayu
                </p>
              </div>

              <div className="col mt-5">
                <div className="mb-4">
                  <h1 className="float-start me-2">10+</h1>
                  <p className="ms-5">Years experience...</p>
                </div>
                <div>
                  <p>
                    Hello there! My name is Agus Setiawan. I am a web designer &
                    developer, and I'm very passionate and dedicated to my work.
                  </p>
                </div>
              </div>
              <div className="col mt-5">
                <div className="mb-4">
                  <h1 className="float-start me-2">14</h1>
                  <p className="ms-5">Clients Worldwide...</p>
                </div>
                <div>
                  <p>
                    With 10+ years experience as a professional a graphic
                    designer, I have acquired the skills and knowledge necessary
                    to make your project a success.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.api} col col-12 d-flex flex-row align-content-center justify-content-center p-2 rounded-1`}
              >
                <div className={`${styles.quoteIcon} ms-3 `}>
                  <i className="bi bi-quote"></i>
                </div>
                <div className={`${styles.quoteText} quote-text`}>
                  <p style={{ marginBottom: "0" }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.myExperience} mt-4 mb-4 rounded-1`}>
          <div className="d-flex flex-row justify-content-around">
            <div className={`${styles.myexLeft} ms-4 `}>
              <p>Experience</p>
              <h2>My experience</h2>
              <p className="mt-2">
                Hello there! My name is Agus Setiawan. I am a web designer &
                developer, and I'm very passionate and dedicated to my work.
              </p>
            </div>
            <div className="myex-right">
              <div className="item">
                <div
                  className="text-light d-flex flex-row justify-content-between"
                  style={{ fontSize: "10px" }}
                >
                  <p>-2014 - 2017</p>
                  <p className="link-light">-Ganesha Operation</p>
                </div>
                <h3>Lead of GO in Indramayu</h3>
                <hr />
              </div>
              <div className="item">
                <div
                  className="text-light d-flex flex-row justify-content-between"
                  style={{ fontSize: "10px" }}
                >
                  <p>-2023 - Present</p>
                  <p className="link-light">-Primary School</p>
                </div>
                <h3>Teacher</h3>
                <hr />
              </div>
              <div className="item">
                <div
                  className="text-light d-flex flex-row justify-content-between"
                  style={{ fontSize: "10px" }}
                >
                  <p>-2023 - Present</p>
                  <p className="link-light">-Freelance</p>
                </div>
                <h3>Front End Dev</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
