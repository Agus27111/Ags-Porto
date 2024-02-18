import React, { useEffect } from "react";
import styles from "./Works.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Works() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Code that accesses document should only run on the client-side

      // Initialize scrollspy
      const scrollspy = bootstrap.ScrollSpy(document.body, {
        target: "#accordionFlushExample",
      });
      // Initialize accordion
      const accordions = document.querySelectorAll(".accordion");
      accordions.forEach((accordion) => {
        new bootstrap.Accordion(accordion);
      });
    }
  }, []);
  return (
    <>
      <main className="px-3 m-lg-5">
        <div className="welcome mt-5">
          <p>Work</p>
          <h1 className="text-dark">Recent project</h1>
        </div>

        <div className="row mt-4">
          <div
            className={`${styles.scrollList} accordion accordion-flush col-4  justify-content-between`}
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <a
                    className="list-group-item list-group-item-action"
                    href="#listitem1"
                  >
                    Item 1
                  </a>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-2"
                  >
                    Item 2
                  </a>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-3"
                  >
                    Item 3
                  </a>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  onclick="window.location.href='#list-item-4'"
                >
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-4"
                  >
                    Item 4
                  </a>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body.
                </div>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#accordionFlushExample"
              data-bs-smooth-scroll="true"
              className={`${styles.scrollSpy} scrollspy-example`}
              tabindex="0"
            >
              <div id="listitem1">
                <h4>Item 1</h4>
                <img src="../aguss.png" alt="" />
              </div>
              <div id="list-item-2">
                <h4>Item 2</h4>
                <img src="../aguss.png" alt="" />
              </div>
              <div id="list-item-3">
                <h4>Item 3</h4>
                <img src="../aguss.png" alt="" />
              </div>
              <div id="list-item-4">
                <h4>Item 4</h4>
                <img src="../aguss.png" alt="" />
              </div>
            </div>
          </div>
          <button className="w-25 mx-auto mt-4 rounded-2 p-2">
            More project
          </button>
        </div>
        <div
          className={`${styles.testimonial} mt-5 rounded-1 w-100 h-auto mb-4 p-5`}
        >
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: First slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#777"></rect>
                  <text x="50%" y="50%" fill="#555" dy=".3em"></text>
                </svg>
                <div className="carousel-caption d-none d-md-block">
                  <div className={styles.cardCarousel}>
                    <img src="../aguss.png" alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis rerum voluptate deleniti, animi eligendi quis
                      vel commodi. Vitae voluptatem eos, placeat impedit
                      voluptatum sunt itaque vel fugiat, aut recusandae
                      molestias.
                    </p>
                  </div>
                  <h5 className="mt-3">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Second slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#666"></rect>
                  <text x="50%" y="50%" fill="#444" dy=".3em">
                    Second slide
                  </text>
                </svg>
                <div className="carousel-caption d-none d-md-block">
                  <div className="card-carousel">
                    <img src="../aguss.png" alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis rerum voluptate deleniti, animi eligendi quis
                      vel commodi. Vitae voluptatem eos, placeat impedit
                      voluptatum sunt itaque vel fugiat, aut recusandae
                      molestias.
                    </p>
                  </div>
                  <h5 className="mt-3">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Third slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#555"></rect>
                  <text x="50%" y="50%" fill="#333" dy=".3em">
                    Third slide
                  </text>
                </svg>
                <div className="carousel-caption d-none d-md-block">
                  <div className="card-carousel">
                    <img src="../aguss.png" alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis rerum voluptate deleniti, animi eligendi quis
                      vel commodi. Vitae voluptatem eos, placeat impedit
                      voluptatum sunt itaque vel fugiat, aut recusandae
                      molestias.
                    </p>
                  </div>
                  <h5 className="mt-3">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Works;
