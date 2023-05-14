import { Info } from "../Info/Info";
import "./Feedback.scss";

export function Feedback(props) {
  const { data } = props;
  return (
    <ul className="feedback">
      {data.map((item, index) => (
        <li key={index}>
          <blockquote>
            <Info text={item.feedback} />
            <div className="feedback-reporter">
              <img
                className="feedback-reporter-photo"
                src={item.reporter.photoUrl}
                alt={`reporter-${index}`}
              />
              <cite>
                {`${item.reporter.name}, `}
                <a href={item.reporter.citeUrl}>{item.reporter.citeUrl}</a>
              </cite>
            </div>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
