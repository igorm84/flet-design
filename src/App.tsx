import React from "react";
import { Button } from "./components";
import { FiDownloadCloud } from "react-icons/fi";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="content">
          <div className="title">Flet Design components</div>
          <div className="description">A React UI Library</div>
          <div>
            <Button type="primary" shape="rounded" style={{ marginTop: 10 }}>
              Oh yeah! Let's go
            </Button>
          </div>
          <div className="cool-phrase">
            ...hHhappiesouls says that life should be more cool
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
