import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app_body">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
