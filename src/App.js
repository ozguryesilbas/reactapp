import React, {Component} from "react";
import User from "./components/User";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h4>App Copmonent</h4>
                <User/>
                <User/>
                <User/>
            </div>
        );
    }
}

export default App;
