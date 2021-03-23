import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
    // <>
    //   <Router>
    //     <Navbar />
    //     <Switch>
    //       <Route exact="/" component={Home} />
    //     </Switch>
    //   </Router>
    // </Router>
  );
}

export default App;
