import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Paper } from "@material-ui/core";
const Card = props => (
  <Paper
    {...props}
    style={{
      ...props.style,
      display: "block",
      padding: 12,
      paddingTop: 0,
      flex: 1
    }}
  >
    {props.children}
  </Paper>
);
export default Card;
