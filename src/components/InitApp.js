import React, { Component } from "react";


import SnackBar from "./SnackBar";
import PgModal from "./PgModal";
import DialogAlert from "./DialogAlert";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return [
      <SnackBar key="snackbar" />,
      <PgModal key="modal" />,
      <DialogAlert key="dialogalert" {...this.props}/>
    ];
  }
}
