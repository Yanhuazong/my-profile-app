import Card from "./components/Card";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import "./App.css";

function App() {
  const profiles = [
    { id: 0, name: "Ava", title: "UX designer", image: woman },
    { id: 1, name: "Liam", title: "Frontend Developer", image: man },
    { id: 2, name: "Bob", title: "Backend Developer", image: man },
    { id: 3, name: "May", title: "Frontend Developer", image: woman },
  ];
  return (
    <>
      <Navbar />
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Wrapper id="profiles">
        <div className="grid">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              title={profile.title}
              image={profile.image}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
