type Course = {
  id: number;
  name: string;
  duration: string;
  price: number;
};
const courses: Course[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    duration: "6 months",
    price: 19000,
  },
  {
    id: 2,
    name: "Basic Excel",
    duration: "1 months",
    price: 5000,
  },
  {
    id: 3,
    name: "Master Artificial Intelligence",
    duration: "1 months",
    price: 4000,
  },
  {
    id: 4,
    name: "Web Of Things",
    duration: "3 months",
    price: 3000,
  },
  {
    id: 5,
    name: "Python Programming",
    duration: "4 months",
    price: 6000,
  },
  {
    id: 6,
    name: "Data Science with Python",
    duration: "3 months",
    price: 4500,
  },
  {
    id: 7,
    name: "Cloud Computing",
    duration: "2 months",
    price: 4000,
  },
  {
    id: 8,
    name: "Cyber Security Fundamentals",
    duration: "1 months",
    price: 2000,
  },
];
function CourseList3() {
  return (
    <div>
      <h1>Course List 1</h1>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">
            <h2>{course.name}</h2>
            <p>Duration: {course.duration} </p>
            <p>Price: INR {course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList3;
