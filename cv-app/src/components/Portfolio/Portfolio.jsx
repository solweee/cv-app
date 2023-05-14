import { useState } from "react";
import img_code from "../../assets/images/card_1.b1844ee5.jpg";
import img_ui from "../../assets/images/card_3.608e2b77.png";
import { useIsotopeLayout } from "../../utils/hooks/useIsotopeLayout";
import "./Portfolio.scss";

export function Portfolio() {
  const [filterKey, setFilterKey] = useState("*");

  useIsotopeLayout(filterKey);

  const handleFilterKeyChange = (key) => (e) => {
    setFilterKey(key);
  };

  const portfolioItems = [
    {
      id: "ui",
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
      url: "https://somesite.com",
      img: img_ui,
    },
    {
      id: "code",
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
      url: "https://somesite.com",
      img: img_code,
    },
    {
      id: "ui",
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
      url: "https://somesite.com",
      img: img_ui,
    },
    {
      id: "code",
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
      url: "https://somesite.com",
      img: img_code,
    },
  ];
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
