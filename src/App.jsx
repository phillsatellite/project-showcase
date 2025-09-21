import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";


function App() {
  return (
    <div>
      <Header />
      <ProjectList />
    </div>
  );
}

export default App;
