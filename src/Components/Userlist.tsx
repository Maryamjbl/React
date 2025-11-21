import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
};

// Static dummy users (like your postsStatic)
const usersStatic: User[] = [
  {
    id: 201,
    name: "John Doe",
    username: "johnd",
    email: "john@example.com",
    address: { street: "Kulas Light", city: "Gwenborough" },
    company: { name: "Romaguera-Crona" },
  },
  {
    id: 202,
    name: "Jane Smith",
    username: "janes",
    email: "jane@example.com",
    address: { street: "Victor Plains", city: "Wisokyburgh" },
    company: { name: "Deckow-Crist" },
  },
];

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  };

  return (
    <div className="container mb-4">
      <h2 className="text-primary my-4">User List</h2>
      <button className="btn btn-primary mb-3" onClick={fetchUsers}>
        Fetch Users
      </button>

      <ul className="list-group">
        {usersStatic.map((user) => (
          <li key={user.id} className="list-group-item">
            <h4 className="text-success mb-2">{user.name}</h4>
            <p className="text-danger">
              <strong>Username:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Address:</strong> {user.address.street}, {user.address.city} <br />
              <strong>Company:</strong> {user.company.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;