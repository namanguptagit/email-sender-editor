import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Email from "./components/email";
import Editor from "./components/editor";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Email />
      </Route>
      <Route path="/editor">
        <Editor/>
      </Route>
    </Router>
  
  
)}

export default App;
