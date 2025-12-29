import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemedTable() {
  const { theme } = useContext(ThemeContext);

  return (
    <table
      className={`table table-striped  style="margin-left:auto; margin-right:auto;" ${
        theme === "dark" ? "table-dark" : "table-light"
      }`}
    >
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maryam</td>
          <td>MERN Stack</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Yusuf</td>
          <td>Web Design</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Qasim</td>
          <td>MERN Stack</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ThemedTable;
