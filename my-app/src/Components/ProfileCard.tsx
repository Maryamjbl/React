type ProfilCardProps = {
    name: string;
    designation: string;
    skills: string[];
};
function ProfileCard(props : ProfilCardProps) {
    return (
        <div className="container mx-auto">
<h3 className="text-danger">{props.name}</h3>
<h4 className="text-primary">{props.designation}</h4>
<h5 className="text-success">Skills</h5>
<ul>
     {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
</ul>
        </div>
    );
}
export default ProfileCard;