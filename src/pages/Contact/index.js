import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <main className="px-3 ms-lg-4">
        <div className="welcome mt-5">
          <p>
            <em>Contact</em>
          </p>
          <h1 className="text-dark">Reach out me</h1>
        </div>
        <div className="container d-flex flex-column flex-lg-row justify-content-between g-3">
          <div className={styles.formContact}>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="your name"
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="12a@xx.com"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Jl Teluk bayur no 1"
                />
              </div>
              <div className="col-md-6">
                <p>Your message</p>
                <textarea
                  name="text-email"
                  id="emailtext"
                  cols="40"
                  rows="7"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="google-maps d-none d-lg-block rounded-1 w-60 h-50 ms-4 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.118795002031!2d108.02921497370629!3d-6.6321650648307235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e692cdba20d894b%3A0x1a2f695ac737f86d!2sSMP%20Negeri%204%20Terisi!5e0!3m2!1sid!2sid!4v1706383818746!5m2!1sid!2sid"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
