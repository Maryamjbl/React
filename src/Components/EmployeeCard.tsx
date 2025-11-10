import "./EmployeeCard.css"
type EmployeeCardProps = {
    name: string;
    position: string;
    department: string;
    salary: number;
};
function EmployeeCard({ name, position, department, salary }: EmployeeCardProps) {
    return (
         <div className="card bg-light mb-3">
      <div className="card-body shadow-sm border-2">
        <h3 className="card-title text-primary">{name}</h3>
        <h4 className="card-subtitle text-info">{position}</h4>
        <p className="card-text">Department: {department}</p>
        <p className="card-text">Salary: ${salary}</p>
      </div>
    </div>
  );
}
export default EmployeeCard;