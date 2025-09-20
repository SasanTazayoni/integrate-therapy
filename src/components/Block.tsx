type BlockProps = {
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
  backgroundClass?: string;
};

export default function Block({
  title,
  text,
  buttonLabel,
  buttonHref,
  backgroundClass = "block--white",
}: BlockProps) {
  return (
    <article className={`block ${backgroundClass}`}>
      <div className="container">
        <header className="block__header block--regular">
          <h2>{title}</h2>
        </header>
        <div className="grid grid--1x2">
          <p>{text}</p>
          {buttonLabel && buttonHref && (
            <a href={buttonHref} className="block__anchor">
              <div className="btn btn--secondary">
                {buttonLabel}
                <svg className="icon">
                  <use xlinkHref="/integratesprite.svg#right-arrow"></use>
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
