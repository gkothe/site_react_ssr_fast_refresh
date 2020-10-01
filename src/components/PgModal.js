import React from 'react';
import View from "./View";
import { Modal } from "@material-ui/core";
// import { KeyboardAvoidingView, Platform, Linking, Share } from "react-native-1app";
let _ref = null;

//nao atualizar
export default class PgModal extends React.Component {
  constructor(props) {
    super(props);
    _ref = this;
    this.state = {
      heranca: {},
      open: false,
      prop: {},
      Component: View,
      propsModal: {}
    };
  }



  openModal = (Component = View, prop = {}, propsModal = {}) => {
    this.setState({ Component, prop, propsModal, open: true })
    // this.refs.modal1.open()
  }
  closeModal = () => {
    this.setState({ open: !this.state.open })
    // this.refs.modal1.close()
  }

  render() {
    const { Component, prop, propsModal, styleModal = {} } = this.state;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.closeModal}
        style={{ overflowX: "auto", ...styleModal }}
        {...propsModal}
      >
        <Component
          key="compe_modal"
          {...prop}
          closeModal={this.closeModal}
        />
      </Modal>
    );
  }
}


export function openModal(...args) {
  if (_ref) {
    _ref.openModal(...args);
  }
}
export function closeModal(...args) {
  if (_ref) {
    _ref.closeModal(...args);
  }
}
