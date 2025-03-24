import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./583ui/Build/583ui.loader.js",
  dataUrl: "./583ui/Build/583ui.data",
  frameworkUrl: "./583ui/Build/583ui.framework.js",
  codeUrl: "./583ui/Build/583ui.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Joy World</h1>
      </div>
    </div>
  );
}

export default App;