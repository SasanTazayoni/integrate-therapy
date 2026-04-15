type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="container--large">
      <div className="container--white">
        <dl>
          <dt className="faq">
            <span className="faq__q">Q:</span> {question}
          </dt>
          <dd className="faq">
            <span className="faq__a">A:</span> {answer}
          </dd>
        </dl>
      </div>
    </div>
  );
}
