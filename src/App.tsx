import "./App.css";
// import Greeting from "./Components/Greeting";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="container my-3">
      <div className="mx-auto">
        <ProfileCard
          name="Maryam"
          designation="Frontend React Developer"
          skills={["CSS", "Node", "JS", "React"]}
        ></ProfileCard>
      </div>
    </div>
  );
}

export default App;
