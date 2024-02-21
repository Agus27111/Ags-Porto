import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div
        className={`${styles.aside} d-flex flex-column d-sm-flex-row flex-shrink-0 p-3 text-white bg-dark`}
      >
        <div className="text-nav p-3 h-100 d-flex flex-column justify-content-between">
          <div className="asideText">
            <Link href="/" className="d-flex text-white text-decoration-none">
              <span className="fs-1">Ag.</span>
            </Link>
            <div
              className={`${styles.nav} w-100 flex flex-column justify-content-center`}
            >
              <div className="flex flex-column column-gap-2 justify-content-center align-items-center mt-5 position-relative">
                <div className={`${styles.navItem} `}>
                  <Link
                    href="/"
                    className={`${styles.navLink} text-white d-flex flex-row `}
                  >
                    <i className="bi bi-house me-2"></i>
                    <p className="d-none d-md-block d-lg-block ">HOME</p>
                  </Link>
                </div>
                <div className={`${styles.navItem} `}>
                  <Link
                    href="/About"
                    className={`${styles.navLink} text-white d-flex flex-row`}
                  >
                    <i className="bi bi-file-earmark-person me-2"></i>
                    <p className="d-none d-md-block d-lg-block">ABOUT</p>
                  </Link>
                </div>
                <div className={`${styles.navItem} `}>
                  <Link
                    href="/Works"
                    className={`${styles.navLink} text-white d-flex flex-row `}
                  >
                    <i className="bi bi-collection me-2"></i>
                    <p className="d-none d-md-block d-lg-block">WORKS</p>
                  </Link>
                </div>
                <div className={`${styles.navItem} `}>
                  <Link
                    href="/Contact"
                    className={`${styles.navLink} text-white d-flex flex-row`}
                  >
                    <i className="bi bi-envelope-at me-2"></i>
                    <p className="d-none d-md-block d-lg-block">CONTACT</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.navFoot}>
            <p className="fw-light fs-10 x-small d-none d-lg-block">
              Copyright ©2024 <span>Agus Setiwan</span>. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
