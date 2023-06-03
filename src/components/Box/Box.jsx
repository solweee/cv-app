import { forwardRef } from "react";
import "./Box.scss";

export const Box = forwardRef(function Box(props, ref) {
  const { title, id } = props;

  return (
    <section ref={ref} id={id} className="container-box">
      <h2 className="info-box__title">{title}</h2>
      {props.children}
    </section>
  );
});
