import { Link, Routes, Route } from "react-router-dom"
import Flashcards from "./components/Flashcards"
import Admin from "./components/Admin";

function App() {
  return (
    <>
    <nav>
      <Link to="/">Flashcards</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <div className="App">
      <Routes>
        <Route path="/" element={<Flashcards />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
