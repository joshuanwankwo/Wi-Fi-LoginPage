import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import AppliForm from './Login'



const App = () => {
    return (
       <div className="main">
          <AppliForm />
        </div>
    )
};




ReactDOM.render(<App />, document.querySelector("#root"));