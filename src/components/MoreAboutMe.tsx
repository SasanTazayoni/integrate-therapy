import { hobbies } from "../data/hobbies";

export default function MoreAboutMe() {
  return (
    <article className="block block--grey">
      <div className="container">
        <h2 className="block__header">More About Me</h2>
        <div>
          <p>
            Outside of my work as a therapist, I value keeping a healthy balance
            in life. I enjoy weightlifting, tennis, and football, which help me
            stay active and focused. I am also passionate about reading and
            writing - particularly reflecting on personal experiences and
            sharing what I have learned along the way.
          </p>
          <p>
            These activities are not just hobbies for me; they remind me of the
            importance of curiosity, resilience, and connection - qualities I
            also bring into my therapeutic work. I believe it is important for
            clients to know that while I am a therapist, I am also a person,
            with my own interests and experiences, navigating life just like
            everyone else.
          </p>
          <p>
            I strive for continual self-improvement, whether that is through
            learning, physical activity, or personal reflection. I believe this
            commitment to growth not only benefits me but also enhances the way
            I support others in their own journeys.
          </p>
        </div>

        <div className="hobbies__container">
          {hobbies.map((hobby, i) => (
            <img
              key={i}
              src={hobby.src}
              className="hobby__image"
              alt={hobby.alt}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
