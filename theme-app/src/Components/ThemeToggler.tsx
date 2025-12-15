import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeToggler() {
  let context = useContext(ThemeContext);
  return (
    <button className="btn btn-info m-4" onClick={context.toggleTheme}>
      Switch Theme to {context.theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
export default ThemeToggler;