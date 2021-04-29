import React from "react";
import { Button, ButtonProps, LoadingIcon } from "./components";
import { FiDownloadCloud } from "react-icons/fi";

function App() {
  const btnProps: ButtonProps = {
    size: "sm",
  };
  return (
    <div className="app">
      <div className="wrapper">
        <div className="content">
          <div className="title">
            <img
              src="https://fletd.s3.amazonaws.com/fletd_vlogo.svg"
              width="200"
              className="logo"
            />
          </div>
          <div className="description">A React UI Library</div>
          <div style={{ marginTop: 30 }}>
            <Button type="default" className="mh10" {...btnProps}>
              Default
            </Button>
            <Button type="primary" className="mh10" {...btnProps}>
              Primary
            </Button>
            <Button type="dark" className="mh10" {...btnProps}>
              Dark
            </Button>
            <Button type="danger" className="mh10" {...btnProps}>
              Danger
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
