import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import SingleBookPage from "./components/SingleBookPage";
import Settings from "./components/Settings";
import { useSelector } from "react-redux";



function App() {
  //const user=useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/book/:id" exact element={<SingleBookPage />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
