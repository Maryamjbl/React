import { Link } from "react-router-dom";

const users = [
  {
    id: "1",
    name: "Aysha",
  },
  {
    id: "2",
    name: "Zainab",
  },
  {
    id: "3",
    name: "Amna",
  },
  {
    id: "4",
    name: "Safa",
  },
];

function UserList2() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList2;