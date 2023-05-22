import "./Button.scss";

export function Button(props) {
  const { text, clickAction, type, disabled } = props;

  return (
    <button
      data-testid="button"
      type={type}
      disabled={disabled}
      onClick={clickAction}
      className="button"
    >
      {props.children}
      <span className="btn-text">{text}</span>
    </button>
  );
}
