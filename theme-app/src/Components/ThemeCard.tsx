import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card mb-4 ${theme === "light" ? "text-bg-light" : "text-bg-dark"}`}>
      <div className="card-body">
        <h5 className="card-title">Themed Card</h5>
        <p className="card-text">This card changes based on the theme selected...</p>
      </div>
    </div>
  );
}

export default ThemedCard;