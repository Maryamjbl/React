import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./ThemeCard.css";
function ThemeCard() {
  let context = useContext(ThemeContext);
  return (
    <div
      className={
        `card myCard m-4 ` +
        (context.theme === "dark" ? "text-bg-dark " : "text-bg-light ")
      }
    >
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
         The Theme is changed...
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default ThemeCard;