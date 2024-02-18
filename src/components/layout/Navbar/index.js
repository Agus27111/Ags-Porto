import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div
        className={`${styles.aside} d-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}
      >
        <div className=" text-nav p-3 h-100 d-flex flex-column justify-content-between">
          <div className="asideText">
            <Link
              href="/"
              className="d-flex align-items-center text-white text-decoration-none"
            >
              <span className="fs-1">Ag.</span>
            </Link>

            <ul
              className={`${styles.nav} nav-pills flex-column mt-5 position-relative gap-3`}
            >
              <li
                className={`${styles.navItem} d-flex flex-row  `}
              >
                <i className="bi bi-house me-2"></i>
                <Link
                  href="/"
                  className={`${styles.navLink} text-white d-none d-sm-block flex justify-content-center`}
                >
                  HOME
                </Link>
              </li>
              <li
                className={`${styles.navItem} d-flex flex-row`}
              >
                <i className="bi bi-file-earmark-person me-2"></i>
                <Link
                  href="/About"
                  className={`${styles.navLink} text-white d-none d-sm-block`}
                >
                  ABOUT
                </Link>
              </li>
              <li
                className={`${styles.navItem} d-flex flex-row`}
              >
                <i className="bi bi-collection me-2"></i>
                <Link
                  href="/Works"
                  className={`${styles.navLink} text-white d-none d-sm-block`}
                >
                  WORKS
                </Link>
              </li>
              <li
                className={`${styles.navItem} d-flex flex-row`}
              >
                <i className="bi bi-envelope-at me-2"></i>
                <Link
                  href="/Contact"
                  className={`${styles.navLink} text-white d-none d-sm-block`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.navFoot}>
            <p className="fw-light fs-10 x-small">
              Copyright ©2024 <span>Agus Setiwan</span>. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
