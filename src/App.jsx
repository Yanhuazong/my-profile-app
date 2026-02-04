import Card from "./components/Card";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Filters from "./components/Filters";
import AddProfileForm from "./components/AddProfileForm";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "UX designer", email:"", bio:"", image: woman },
    { id: 1, name: "Liam", title: "Frontend Developer", email:"", bio:"", image: man },
    { id: 2, name: "Bob", title: "Backend Developer", email:"", bio:"", image: man },
    { id: 3, name: "May", title: "Frontend Developer", email:"", bio:"", image: woman },
  ]);
  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
    setClicked((prev) => !prev);
    console.log(clicked);
  };
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSearch = (event) => {
    setName(event.target.value);
  };
  const handleClear = () => {
    setTitle("");
    setName("");
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const updateProfiles = (profile) =>{
    setProfiles(pre => ([...pre, profile]))
  }
  const filteredProfiles = profiles.filter(
    (profile) =>
      (profile.title === title || !title) &&
      profile.name.toLowerCase().includes(name.toLowerCase()),
  );
  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Wrapper id="about">
        <About />
        <button onClick={handleClick}>
          {clicked ? "Clicked" : "Click me"}
        </button>
      </Wrapper>
      <Wrapper id="add-profile">
        <AddProfileForm onAddProfile={updateProfiles}/>
      </Wrapper>
      <Wrapper id="profiles">
        <Filters
          titles={titles}
          title={title}
          name={name}
          handleChange={handleChangeTitle}
          handleSearch={handleSearch}
          handleClick={handleClear}
        />
        <div className="grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <Card
                key={profile.id}
                name={profile.name}
                title={profile.title}
                image={profile.image}
              />
            ))
          ) : (
            <p>No profiles selected.</p>
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
