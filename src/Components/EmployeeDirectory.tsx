import EmployeeCard from "./EmployeeCard";
function EmployeeDirectory() {
    const employees = [
        { name: "Alice Johnson", position: "Software Engineer", department: "Development", salary: 90000 },
        { name: "Bob Smith", position: "Product Manager", department: "Product", salary: 105000 },
        { name: "Charlie Brown", position: "UX Designer", department: "Design", salary: 80000 },];
        return (
            <div className="container my-4">
        <h2 className="mb-4 text-center text-secondary">Employee Directory</h2>
       <div className="row">
        {employees.map((emp) => (
          <div className="col-md-4 mb-4">
            <EmployeeCard
              name={emp.name}
              position={emp.position}
              department={emp.department}
              salary={emp.salary}
            />
          </div>
        ))}
      </div>
            </div>
        );
    }
export default EmployeeDirectory;