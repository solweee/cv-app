import "./Info.scss"

export function Info(props) {
  const { text } = props;
  return (
    <div className="info">
      <p>{text}</p>
    </div>
  );
}
