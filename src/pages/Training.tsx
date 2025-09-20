import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Block from "../components/Block";

export default function Training() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>My Training</h2>
      </section>

      <Block
        title=""
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti
        vitae adipisci deserunt quibusdam nihil error excepturi natus a dolorem.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
        delectus numquam cupiditate nam esse! Repellat, amet harum placeat eius
        quae accusantium beatae dolore dolorum ad laudantium iure itaque
        doloribus provident!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        ipsam? Tempore aut magni doloremque laboriosam eligendi pariatur esse
        voluptatibus numquam? Enim nulla doloribus alias omnis odit repellendus
        eum architecto animi reiciendis! At fugiat dolores ea quibusdam eius
        minus blanditiis amet! Inventore, voluptatibus omnis sequi id soluta
        incidunt harum repudiandae facilis!`}
        buttonLabel="Services"
        buttonHref="/services"
        backgroundClass="block--grey"
      />

      <Block
        title=""
        text=""
        buttonLabel="Contact"
        buttonHref="/contact"
        backgroundClass="block--grey"
      />

      <section className="training__image"></section>

      <Footer />
    </>
  );
}
