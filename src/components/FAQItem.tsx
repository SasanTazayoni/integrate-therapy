type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="container--large">
      <div className="container--grey">
        <p className="faq">
          <span className="faq__qa">Question:</span> {question}
        </p>
      </div>
      <div className="container--white">
        <p className="faq">
          <svg className="icon">
            <use href="/integrate-therapy/integratesprite.svg#right-arrow" />
          </svg>
          <span className="faq__qa">Answer:</span> {answer}
        </p>
      </div>
    </div>
  );
}
