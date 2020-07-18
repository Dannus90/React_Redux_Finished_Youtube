import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import DisplayCharPage from "./pages/DisplayCharPage/DisplayCharPage";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route
                    exact
                    path="/display-character"
                    component={DisplayCharPage}
                />
            </Switch>
        </div>
    );
}

export default App;
