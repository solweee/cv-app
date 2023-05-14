import "./TimeLine.scss"

export function TimeLine(props) {
  const { data } = props;
  return (
    <div className="timeline">
      <ul className="timeline-list">
        {data.map((item) => (
          <li key={item.date}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-event">
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
