import "./TimeLine.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEducations } from "../../app/features/education/educationSlice";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";

export function TimeLine() {
  const { educationsData, status } = useSelector(
    (state) => state.education
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);

  return (
    <div className="timeline">
      {status === "loading" && <LoadingPanel />}
      {status === "rejected" && (
        <p
          style={{
            color: "red",
            position: "absolute",
            top: "45%",
            width: "100%",
            textAlign: "center",
          }}
        >
          Something went wrong; please review your server connection!
        </p>
      )}
      {status === "resolved" && (
        <ul className="timeline-list">
          {educationsData.educations.map((item) => (
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
      )}
    </div>
  );
}
