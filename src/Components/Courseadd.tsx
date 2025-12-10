import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://692dcd1be5f67cd80a4d0fc2.mockapi.io/courses";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const addCourse = async () => {
    setError(null);
    setSuccess(null);

    if (title.length == 0) {
      setError("Course title cannot be left blank");
      return;
    } else if (description.length == 0) {
      setError("Course description cannot be left blank");
      return;
    } else {
      setSuccess("Course added successfully");
    }

    const course = { title, description };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    navigate("/courses");
  };
  let message = null;
  if (error) {
    message = <div className="alert alert-danger">{error}</div>;
  } else if (success) {
    message = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>

      <div id="addCourseform" className="border border-1 rounded shadow p-5">
        {message}

        <div className="mb-3">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Excel, ChatGPT etc.."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Topics.."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <button className="btn btn-danger w-100" onClick={addCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;