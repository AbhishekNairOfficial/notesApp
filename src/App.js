import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { databaseFunctions } from './functions/sqlite';
import ListingPage from "./components/listing-page";
import NotePage from "./components/note-page";
import "./App.css";

// Initialising Components
class App extends React.Component {
  componentDidMount() {
    if (window.sqlitePlugin) {
      // databaseFunctions();
    }
  }

  ListingPageWithProps = () => {
    // Destructuring Props
    const { notes } = this.props;
    return <ListingPage listItems={notes} />;
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/list" />} />
            <Route path="/list" component={this.ListingPageWithProps} />
            <Route path="/note/:id" component={NotePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.defaultProps = {
  notes: {}
};

App.propTypes = {
  notes: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  null
)(App);
