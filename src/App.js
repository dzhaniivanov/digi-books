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
import PrivateRoute from "./components/PrivateRoute";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PrivateRoute />} >
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/" exact element={<PrivateRoute />} >
        <Route path="/login" exact element={<Login />} />
        </Route>
        <Route path="/register" exact element={<Register />} />
        <Route path="/book/:id" exact element={<SingleBookPage />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
