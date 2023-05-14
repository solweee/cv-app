import "./Experience.scss"

export function Experience(props) {
  const { data } = props;
  return (
    <ul className="experience-list">
      {data.map((item, index) => (
        <li key={index}>
          <div className="experience-list-date">
            <h3>{item.info.company}</h3>
            <span className="date">{item.date}</span>
          </div>
          <div className="experience-list-info">
            <h3>{item.info.job}</h3>
            <p>{item.info.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
