import React from "react";
 
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import About from "./components/About";
import "./index.css";

  function App() {

    return (
      <><div>
        <h2 class="welcomeMessage">Welcome to the Yes Man Jr. Forum!</h2>
        <a href="About">About</a>
      </div><div>
          <Navbar />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route exact path="/" element={<RecordList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div></>
   );
  };
 
export default App;