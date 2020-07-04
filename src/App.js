import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
