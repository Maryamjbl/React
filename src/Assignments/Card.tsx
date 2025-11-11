import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeTable() {
  const employees = [
    { id: 1, name: "Alice", department: "HR", designation: "Manager", salary: 60000 },
    { id: 2, name: "Bob", department: "IT", designation: "Developer", salary: 70000 },
    { id: 3, name: "Charlie", department: "Finance", designation: "Analyst", salary: 65000 },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center text-info mb-4">Employee Table</h2>
      <table className="table table-striped  table-bordered">
        <tr className="text-success">
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {employees.map((emp) => (
          <tr>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
            <td>{emp.salary}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EmployeeTable;