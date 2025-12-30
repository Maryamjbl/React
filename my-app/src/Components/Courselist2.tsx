let courses = [
  "Full Stack Web Development",
  "Basic Excel",
  "Master Artificial Intelligence",
  "Web Of Things",
  "Python Programming",
  "Data Science with Python",
  "Cloud Computing",
  "Cyber Security Fundamentals",
];
function Courselist2() {
  return (
    <div>
      <h1>Course List 1</h1>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default Courselist2;