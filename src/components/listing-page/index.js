import React from "react";
import PropTypes from "prop-types";

const NotesChecker = list =>
  list.map((item, i) => <div key={i}>{item} hello there, General Kenobi</div>);

const ListingPage = ({ listItems }) => <div>{NotesChecker(listItems)}</div>;

ListingPage.defaultProps = {
  listItems: []
};

ListingPage.propTypes = {
  listItems: PropTypes.instanceOf(Array)
};

export default ListingPage;
