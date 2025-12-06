import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import CourseList3 from "./Components/Courselist3";
import UserList2 from "./Components/Userlist2";
import UserDetails from "./Components/Userdetails";
import Counter from "./Components/Counter";
import PostList2 from "./Components/Postlist2";
import RecipeList from "./Components/Recipelist";
import ProductList from "./Components/Productlist";
import PostList3 from "./Components/Postlist3";
import RecipeSearch from "./Components/RecipeSearch";
// import RecipeError from "./Assignments/RecipeError";
import RecipePage from "./Components/Recipepage";
import URL from "./Assignments/Url";
import CourseList4 from "./Courselist4";
import CourseAdd from "./Components/Courseadd";
import RegisterUser from "./Components/register";
function App() {
  return (
    <Router>
      <div className="container my-3">
        <h1>My React Application</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              FLA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/users"
                  >
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/posts"
                  >
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-course">
                    Counter
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/recipe">
                    Recipes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/error">
                    Error
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    RSearch
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/rsearch">
                    RError
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/usearch">
                    URLSearch
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/rpage">
                    RecipePage
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses3" element={<CourseList3 />} />
            <Route path="/users" element={<UserList2 />} />
            <Route path="/posts" element={<PostList2 />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipe" element={<RecipeList />} />
            <Route path="/error" element={<PostList3 />} />
            <Route path="/search" element={<RecipeSearch />} />
            {/* <Route path="/rsearch" element={<RecipeError/>} /> */}
            <Route path="/rpage" element={<RecipePage />} />
            <Route path="/usearch" element={<URL />} />
            <Route path="/courses" element={<CourseList4 />} />
            <Route path="/add-course" element={<CourseAdd />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
