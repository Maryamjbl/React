import "./UserInfo.css";
type User = {
  name: string;
  email: string;
  role: string;
  bio: string;
};
function UserInfo() {
  let user: User = {
    name: "Aysha ",
    email: "aysha@gmail.com",
    role: "student",
    bio: "Enthusiastic learner in web development",
  };
  return (
    <div className="card">
      <h3>c{user.name}</h3>
      <p>email:{user.email}</p>
      <p>role:{user.role}</p>
      <p>bio:{user.bio}</p>
    </div>
  );
}
export default UserInfo;
