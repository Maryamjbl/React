import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://692dcd1be5f67cd80a4d0fc2.mockapi.io/courses"

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();
  const addCourse = async () => {
    const course = {
      title,
      description,
    };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    navigate("/courses");
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>

      <div id="addCourseform" className="border border-1 rounded shadow p-5">
        <div className="mb-3">
          <label htmlFor="titleTextBox" className="form-label fw-bold ">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, excel, Chat gpt etc.."
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
          <button className="btn btn-danger w-100" onClick={() => addCourse()}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseAdd;
