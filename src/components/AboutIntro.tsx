export default function AboutIntro() {
  return (
    <article className="block block--grey block--top-castrated">
      <div className="container">
        <h1>About Me</h1>
        <div className="grid grid--1x2-alt">
          <div>
            <p>
              I am Simon Burgess, an integrative therapist. I have been working
              as a psychotherapist for over ten years, helping people navigate
              life's challenges and find greater balance. As an integrative
              therapist, I combine different approaches so that each session is
              tailored to your needs - you are at the center of every
              conversation.
            </p>
            <p>
              I believe that everyone has the capacity to grow, heal, and create
              meaningful change in their life. My role is to provide a safe,
              supportive, and non-judgmental space where we can explore your
              concerns, work through challenges, and discover strategies that
              help you thrive.
            </p>
            <p>
              In our work together, I want to help you feel more connected to
              yourself and the life you want to create. Therapy is a space to
              slow down, reflect, and explore what might be holding you back,
              while also uncovering new ways of moving forward. Together, we
              will find what works best for you so that the process feels
              supportive, empowering, and relevant to your unique journey.
            </p>
            <p>
              Whether you are dealing with anxiety, relationship difficulties,
              or simply looking for personal growth, I am here to support you
              every step of the way.
            </p>
          </div>
          <div className="about__image-container">
            <img
              className="about__image"
              src="images/aboutpic.jpg"
              alt="A picture of Simon Burgess"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
