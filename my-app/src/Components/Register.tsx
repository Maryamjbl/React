import { useState } from "react";
const RegisterUser = () => {
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  

  const handleSubmit = () => {
    console.log("Handle Submit called");
    setError(null);

    if (fullName.length == 0) {
      setError("Name cannot be left blank");
      return;
    }

    if (email.length == 0) {
      setError("Email cannot be left blank");
      return;
    }

    if (password.length < 8) {
      setError("Password cannot be less than 8 characters");
      return;
    }

    if (confirmPassword != password) {
      setError("Confirm Password and Password is incorrect");
      return;
    }

    setSuccess("All data entered is correct");
  };

  let errorMessage = null;

  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 800 }}>
      <h2 className="mb-4">Register User Form</h2>

      {errorMessage}
      {successMessage}

      <div className="form-group">
        <label htmlFor="exampleInputName" className="fw-bold">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={fullName}
          placeholder="Enter your full name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail" className="fw-bold">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className=" form-group mb-3">
        <label htmlFor="exampleInputPassword" className="fw-bold">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder=" Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className=" form-group mb-3">
        <label htmlFor="exampleInputPassword1" className="fw-bold"> Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confimpassword"
          placeholder=" Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-info w-100" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RegisterUser;
