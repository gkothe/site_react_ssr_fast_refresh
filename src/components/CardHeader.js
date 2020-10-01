import React from "react";
import { Paper } from "@material-ui/core";

const styles = {
  color: "#fff",
  padding: "0.75rem 1.25rem",
  zIndex: "3 !important",
  marginBottom: 10,
  boxShadow:
    "0 12px 20px -10px rgba(140, 0, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(140, 0, 0, 0.2)",
  background: "rgb(140, 0, 0)",
  position: "relative",
  top: -15
};
const HeadCard = (props = {}) => (
  <Paper {...props} style={{ ...styles, ...props.style }}>
    {props.children}
  </Paper>
);
export default HeadCard;
