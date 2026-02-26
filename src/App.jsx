import Navbar from "./components/Navbar";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import { useState, useContext, useCallback, lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AddProfilePage from "./pages/AddProfilePage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import "./App.css";
import ProfileLayoutPage from "./pages/ProfileLayoutPage";
import ModeContext from "./context/ModeContext";

const FetchedProfilePage = lazy(() => import("./pages/FetchedProfilePage"))

function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "UX designer", email:"", bio:"", image: woman },
    { id: 1, name: "Liam", title: "Frontend Developer", email:"", bio:"", image: man },
    { id: 2, name: "Bob", title: "Backend Developer", email:"", bio:"", image: man },
    { id: 3, name: "May", title: "Frontend Developer", email:"", bio:"", image: woman },
  ]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const handleChangeTitle = useCallback((event) => {
    setTitle(event.target.value);
  }, []);
  const handleSearch = useCallback((event) => {
    setName(event.target.value);
  }, []);
  const handleClear = useCallback(() => {
    setTitle("");
    setName("");
  }, []);

  const {theme} =useContext(ModeContext)
  const updateProfiles = (profile) =>{
    setProfiles(pre => ([...pre, profile]))
  }
  return (
    <HashRouter>
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fetched-profiles" element={<Suspense fallback="Loading..."><FetchedProfilePage /></Suspense>} />
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
