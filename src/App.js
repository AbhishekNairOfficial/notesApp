import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ListingPage from "./components/listing-page";
import NotePage from "./components/note-page";
import "./App.css";

// List of Notes
const listItems = ["one", "two", "three"];

// Initialising Components
const ListingPageWithProps = () => <ListingPage listItems={listItems} />;

// Actual Component Code
const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/list" />} />
        <Route path="/list" component={ListingPageWithProps} />
        <Route path="/note/:id" component={NotePage} />
      </Switch>
    </Router>
  </div>
);

export default App;
