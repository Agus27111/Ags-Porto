// _App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FloatIcon from "@/components/layout/FloatIcon";
import Navbar from "@/components/layout/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <div className="d-flex flex-row justify-content-between ">
          <Navbar />
          <Component {...pageProps} />
          <div className="blueSosmed d-flex-column d-flex ms-3 row-gap-3 position-fixed">
            <FloatIcon />
          </div>
        </div>
      </main>
    </>
  );
}
