import { useId } from 'react'
import Image from 'next/image'

type InfoCardProps = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export default function InfoCard({
  title,
  paragraphs,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: InfoCardProps) {
  const headingId = useId()

  return (
    <section className="block block--grey" aria-labelledby={headingId}>
      <div className="container">
        <div className="card grid grid--1x2 overflow-hidden">
          <div className="block__text card__text">
            <header className="block__header">
              <h2 id={headingId}>{title}</h2>
            </header>
            {paragraphs.map((text, idx) => (
              <p
                key={text}
                className={idx > 0 ? "card__text-paragraph" : undefined}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="card__image">
            <Image src={image} alt={imageAlt} className="card__img" width={imageWidth} height={imageHeight} />
          </div>
        </div>
      </div>
    </section>
  );
}
