import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movies" />} />
            <Route exact path="/series" element={<Home type="series" />} />
            <Route exact path="/watch/:id" element={<Watch />} />
          </>
        )}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
