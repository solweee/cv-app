import { useState } from "react";
import { useIsotopeLayout } from "../../utils/hooks/useIsotopeLayout";
import { portfolioItems } from "./data/portfolioItems";
import "./Portfolio.scss";

export function Portfolio() {
  const [filterKey, setFilterKey] = useState("*");

  useIsotopeLayout(filterKey);

  const handleFilterKeyChange = (key) => (e) => {
    setFilterKey(key);
  };

  return (
    <div className="portfolio">
      <ul className="tabs">
        <li
          className={filterKey === "*" ? "active" : ""}
          onClick={handleFilterKeyChange("*")}
        >
          <span>all</span>
        </li>
        <li
          className={filterKey === "ui" ? "active" : ""}
          onClick={handleFilterKeyChange("ui")}
        >
          <span>ui</span>
        </li>
        <li
          className={filterKey === "code" ? "active" : ""}
          onClick={handleFilterKeyChange("code")}
        >
          <span>code</span>
        </li>
      </ul>
      <ul className="filter-container">
        {portfolioItems.map((item, index) => (
          <li className={`filter-item ${item.id}`} key={index}>
            <img src={item.img} alt="card" />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href={item.url}>View resource</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
