import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
// import Gallary from "./components/Home/Gallary/Gallary";
import Navbar from "./components/Shared/Navbar/Navbar";
import RegistrationForm from "./components/Home/RegistrationFrom/RegistrationFrom";
import LoginForm from "./components/Home/LoginForm/LoginForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route  path="/loginform">
            <LoginForm></LoginForm>
          </Route>
          <Route  path="/registrationform">
            <RegistrationForm></RegistrationForm>
          </Route>
          {/* <Route path="/gallary">
            <Gallary></Gallary>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
