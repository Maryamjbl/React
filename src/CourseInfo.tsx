import "./CourseInfo.css"
type Course = {
  title: string;
  instructor: string;
  duration: string;
  description: string;
};
function CourseInfo() {
  let course: Course = {
    title: "MERN STACK",
    instructor: "Imran Khan",
    duration: "6 months",
    description: "Advanced Topics In MERN STACK ",
  };
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>instructor:{course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>{course.description}</p>
    </div>
  );
}
export default CourseInfo;
