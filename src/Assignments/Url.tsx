import { useEffect, useState } from "react";

type User = {
  id: number;
  gender?: string;
  firstName: string;
  lastName: string;
  image: string;
  age?: number;
  email: string;
  phone: string;
};

const UrlSearch = () => {
  const [users, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null); 

      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error(`Some Network Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data.users);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger">Error: {error}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container text-center">
        <h1 className="text-primary">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="text-Primary">User List</h1>

        <div className="d-flex mb-4">
          <input
            type="text"
            className="form-control mx-1 my-1"
            placeholder="Search Users...."
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />

          <button className="btn btn-info mb-2 mx-2" onClick={fetchUsers}>
            Search
          </button>
        </div>

        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-3" key={user.id}>
              <div className="card h-100">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="card-img-top"
                />

                <div className="card-body">
                  <h4 className="card-title">
                    Name: {user.firstName} {user.lastName}
                  </h4>
                  <p className="card-text">
                    Gender: {user.gender} | Age: {user.age}
                  </p>
                </div>

                <div className="card-footer">
                  Email: {user.email}
                  <p className="card-footer">Phone: {user.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UrlSearch;