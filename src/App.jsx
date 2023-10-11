import { Fragment } from "react";
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
  );
}

export default App;
