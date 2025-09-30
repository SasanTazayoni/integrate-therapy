type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="container--large">
      <div className="container">
        <dl>
          <dt className="faq" aria-label="Question">
            <span className="faq__qa">Q:</span> {question}
          </dt>
          <dd className="faq" aria-label="Answer">
            <svg className="icon" data-testid="faq-svg" aria-hidden="true">
              <use href="/integrate-therapy/integratesprite.svg#right-arrow" />
            </svg>
            <span className="faq__qa">A:</span> {answer}
          </dd>
        </dl>
      </div>
    </div>
  );
}
