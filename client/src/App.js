import React from "react";
// We use Route in order to define the different routes of our application
import { Routes, Route } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Edit from "./components/edit";

const App = () =>
{
  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
