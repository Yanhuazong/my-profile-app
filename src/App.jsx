import Navbar from "./components/Navbar";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FetchedProfilePage from "./pages/FetchedProfilePage";
import AddProfilePage from "./pages/AddProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import "./App.css";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "UX designer", email:"", bio:"", image: woman },
    { id: 1, name: "Liam", title: "Frontend Developer", email:"", bio:"", image: man },
    { id: 2, name: "Bob", title: "Backend Developer", email:"", bio:"", image: man },
    { id: 3, name: "May", title: "Frontend Developer", email:"", bio:"", image: woman },
  ]);

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
  return (
    <HashRouter>
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fetched-profiles" element={<FetchedProfilePage />} />
        <Route path="/fetched-profiles/profile" element={<ProfileLayoutPage />}>
          <Route path=":id" element={<ProfileDetailPage />} />
        </Route>        
        <Route path="/add-profile" element={<AddProfilePage updateProfiles={updateProfiles}/>} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
