import "./App.css";
import NavBar from "./components/NavBar";
import Notes from "./Notes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Todo from "./Todo";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Contact />
      {/* <Todo /> */}
      {/* <Notes /> */}
    </>
  );
}

export default App;
