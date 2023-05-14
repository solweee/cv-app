import "./Box.scss";

export function Box(props) {
  const { title, id } = props;
  return (
    <section id={id} className="info-box">
      <h2 className="info-box__title">{title}</h2>
      {props.children}
    </section>
  );
}
