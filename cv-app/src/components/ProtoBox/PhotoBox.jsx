import "./PhotoBox.scss"

export function PhotoBox(props) {
  const {name, avatar} = props;
  return (<div className="photo-box">
    <img src={avatar} alt="avatar" />
    <h2>{name}</h2>
    {props.children}
  </div>)
}