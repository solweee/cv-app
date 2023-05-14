import "./Button.scss";

export function Button(props) {
  const { text, clickAction } = props;

  return (
    <button onClick={clickAction} className="button">
      {props.children}
      <span className="btn-text">{text}</span>
    </button>
  );
}
