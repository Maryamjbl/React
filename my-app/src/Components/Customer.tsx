import { useEffect, useState } from "react";

type Customer = {
  _id: string;
  name: string;
  creditLimit: number;
  email: string;
  phone: string;
};

const CustomerList = () => {
  const API_URL: string = "http://localhost:3000/customers";
  const LOGIN_URL: string = "http://localhost:3000/auth/login";

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const login = async () => {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "aysha@gmail.com",
        password: "mypassword",
      }),
    });
    const responseData = await response.json();
    setToken(responseData.token);

    try {
      localStorage.setItem("token", responseData.token);
    } catch (error) {
      console.error("Error storing token in localStorage:", error);
    }
    return responseData.token;
  };

  const fetchCustomers = async (jwtToken: string) => {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const responseData = await response.json();
    setCustomers(responseData.data);
  };
  useEffect(() => {
    const loadCustomers = async () => {
      console.log("Loading customers...");
      let jwtToken = null;
      try {
        jwtToken = localStorage.getItem("tokenJWT");
        console.log("Token retrieved from localStorage:", jwtToken);
      } catch (error) {
        console.error("Error retrieving token from localStorage:", error);
        jwtToken = null;
      }

      if (!jwtToken) {
        jwtToken = await login();
      } else {
        console.log("Token retrieved from localStorage:", jwtToken);
      }
      await fetchCustomers(jwtToken);
    };
  }, []);

  return (
    <table className="table table-striped table-hover">
      <thead className="table-primary">
        <tr>
          <th>Name</th>
          <th>Credit Limit</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer._id}>
            <td>{customer.name}</td>
            <td>{customer.creditLimit}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
