import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
}

const API_URL = "https://692dcd1be5f67cd80a4d0fc2.mockapi.io/courses";

const CourseEdit: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const fetchCourse = async () => {
    const response = await fetch(`${API_URL}/${params.id}`);
    const data = await response.json();
    setCourse(data);
  };

  const updateCourse = async () => {
    await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    navigate("/courses");
  };

  useEffect(() => {
    fetchCourse();
  }, [params.id]);
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Course</h2>
      <div className="border p-5">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary w-100" onClick={updateCourse}>
          Update
        </button>
      </div>
    </div>
  );
};

export default CourseEdit;
