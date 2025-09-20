import { Link } from "react-router-dom";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="notfound-page">
        <section className="block block--grey block--center">
          <div className="container">
            <h1>404</h1>
            <h2>Oops! Page not found</h2>
            <p>
              It seems the page you are looking for doesn’t exist. Maybe go back
              to the <Link to="/">Home page</Link>?
            </p>
            <img
              src="/images/404_illustration.svg"
              alt="Illustration of lost path"
              className="notfound__image"
            />
            <Link to="/" className="btn btn--primary">
              Go Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
