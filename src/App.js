import "./styles.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import LightSwitch from "./Components/LightSwitch";
import FormWithStatus from "./Components/FormWithStatus";
import { ModalProvider } from "./Components/ModalContext";
import Game from "./Components/Game";
import SignUpForm from "./Components/SignUpForm";
import { StudentProvider } from "./Components/StudentContext";
import { DataProvider } from "./Components/DataContext";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link exact to="/">
          <h2>Excersises</h2>
        </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ex1">
            <LightSwitch />
          </Route>
          <Route path="/ex2">
            <FormWithStatus />
          </Route>
          <Route path="/ex3">
            <ModalProvider>Nothing to See</ModalProvider>
          </Route>
          <Route path="/ex4">
            <Game />
          </Route>
          <Route path="/ex5">
            <SignUpForm />
          </Route>
          <Route path="/ex6">
            <StudentProvider>Nothing to See</StudentProvider>
          </Route>
          <Route path="/ex7">
            <DataProvider>Nothing to See</DataProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
