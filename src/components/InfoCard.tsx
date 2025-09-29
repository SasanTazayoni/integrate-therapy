type InfoCardProps = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export default function InfoCard({
  title,
  paragraphs,
  image,
  imageAlt,
}: InfoCardProps) {
  return (
    <section className="block block--grey" aria-labelledby={`info-${title}`}>
      <div className="container">
        <div className="card grid grid--1x2 overflow-hidden">
          <div className="block__text card__text">
            <header className="block__header">
              <h2 id={`info-${title}`}>{title}</h2>
            </header>
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={idx > 0 ? "card__text-paragraph" : undefined}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="card__image">
            <img src={image} alt={imageAlt} className="card__img" />
          </div>
        </div>
      </div>
    </section>
  );
}
