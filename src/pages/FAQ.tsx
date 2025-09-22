import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function FAQ() {
  return (
    <>
      <Navbar />

      <section className="block block--grey block--top-castrated">
        <h2>Frequently Asked Questions</h2>
        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> What are the fees?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> £85 per session.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> Do you offer
              concessions for people with low income?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Concessionary rates are
              available only for clients experiencing genuine financial
              difficulty and who are committed to actively participating in the
              process. We carefully assess both factors before offering any
              adjustment, so please be prepared to demonstrate your willingness
              to engage fully.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> How do I get started?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Contact me directly to
              briefly discuss why you called and then we can arrange your first
              90-minute assessment. This initial meeting is a chance for you to
              share your story in more depth, ask questions, and begin exploring
              your goals. Afterward, you'll receive a short set of
              questionnaires to help tailor future 50-minute weekly sessions to
              your needs.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> What is the best way to
              contact you?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> You can reach me by email
              or phone - both are listed on the{" "}
              <Link className="link" to="/contact">
                contact
              </Link>{" "}
              page.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> Why do I have to fill
              out these questionnaires?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> The questionnaires are
              completed to identify the areas of greatest difficulty and clarify
              priorities. This ensures that sessions are tailored to address the
              most important needs effectively from the start.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> How many sessions do I
              need?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> There is no definitive
              answer regarding the number of sessions required. Psychotherapy is
              highly individual, and the duration depends on specific needs,
              goals, and progress over time.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> I am unsure whether
              psychotherapy would be worthwhile and am undecided about starting
              - what can I do?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Feeling uncertain is
              natural, but taking the step to invest in oneself is one of the
              most important actions for personal growth and well-being. The
              first session provides a clear opportunity to explore concerns,
              ask questions, and assess whether continuing therapy will be
              valuable.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> How can therapy help
              me?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Therapy provides a safe,
              non-judgmental space to explore challenges and gain understanding.
              With extensive experience working with clients from diverse
              backgrounds, each person is thoroughly assessed to determine how I
              can best support them. Meaningful progress, however, relies on
              active participation—insights and change come through personal
              engagement.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> Can sessions be
              scheduled at any time, or are there set appointments?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Sessions are scheduled
              for a set time each week, typically one 50-minute session. If a
              change is needed, cancellations or rescheduling can be arranged,
              but the weekly structure is generally maintained.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> What is the policy if a
              session needs to be cancelled?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Cancellations must be
              made at least 48 hours in advance. If notice is shorter than this,
              the full session fee will be charged.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> What should I expect in
              my first session?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> The first session is a
              90-minute assessment designed to understand your story and goals.
              It provides a space to be heard, ask questions, and begin
              exploring ways to bring more balance and contentment into life.
              This session also allows for an evaluation of whether I am the
              right therapist to support these needs. Subsequent sessions, if
              continued, are 50 minutes each and typically take place weekly.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> Are sessions
              confidential?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> All sessions are
              completely confidential. Information shared is kept private and
              will only be disclosed with explicit consent, or if required by
              law in exceptional circumstances such as risk of harm.
            </p>
          </div>
        </div>

        <div className="container--large">
          <div className="container--grey">
            <p className="faq">
              <span className="faq__qa">Question:</span> Do you offer online
              sessions?
            </p>
          </div>
          <div className="container--white">
            <p className="faq">
              <svg className="icon">
                <use xlinkHref="/integratesprite.svg#right-arrow" />
              </svg>
              <span className="faq__qa">Answer:</span> Online sessions are
              available, though in-person meetings are preferred whenever
              possible.
            </p>
          </div>
        </div>

        <div className="grid grid--1x2 container__buttons">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
