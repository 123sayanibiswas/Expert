import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
         {/* Add routes here */}
      </Switch>
      <Home />
      <Footer />
    </div>
    </Router>
  );
};