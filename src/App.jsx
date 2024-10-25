import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Home />
              <About />
              <Experience />
              <Contact />
            </Fragment>
          }
        />
		<Route path="/terms" element={<Terms />}/>
		<Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
