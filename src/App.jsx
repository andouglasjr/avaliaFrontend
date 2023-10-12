import RoutesComponents from "./routes";
import { Box, Button, Link } from "@chakra-ui/react";
import { Fragment } from "react";
<<<<<<< HEAD
import Landing from "./pages/Landing";
import Login from "./pages/auth/login"
import Essays from "./pages/Essays";
//import Login from './pages/Login'

function App() {
  return (
    <Fragment>
      <globalStyles />
      <Essays />
    </Fragment>
=======

function App() {
  return (
      <Fragment>
        <RoutesComponents />
      </Fragment>
>>>>>>> issue#1
  );
}

export default App;

