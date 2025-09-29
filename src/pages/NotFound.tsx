import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="notfound-page">
        <section className="block">
          <div className="container">
            <div className="card card--narrow">
              <div className="block__text card__text text-center">
                <header className="block__header">
                  <h2>This page does not exist</h2>
                </header>
                <p>
                  It seems the page you are looking for does not exist. Maybe go
                  back to the{" "}
                  <Link to="/" data-testid="notfound-home-link">
                    Home page
                  </Link>
                  ?
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
