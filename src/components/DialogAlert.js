import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Grid,
  Slide, TextField
} from '@material-ui/core';
import React from 'react';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
let _ref = null;

export default class AlertDialogSlide extends React.Component {
  constructor(props) {
    super(props);
    _ref = this;
    this.state = {
      heranca: {},
      open: false,
      prop: {},
      Component: Grid,
      propsModal: {},
      action: [],
      input: null,
      texto: '',
    };
  }
  openDialog = ({ Component = Grid, prop = {}, propsDialog = {},
    title = '', description = '', texto = '', action = [], input = null }) => {
    this.setState({
      Component, prop, propsDialog,
      open: true, title, description, action, input, texto
    })
  }
  closeDialog = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { Component, prop, propsDialog, title, description, action, input } = this.state;

    return (

      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.closeDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ zIndex: 1400 }}
        {...propsDialog}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
          <Component {...prop} onClose={this.closeDialog} />
          {input && <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            // type="email"
            fullWidth
            {...input}
            value={this.state.texto}
            onChange={event => {
              if (input.onChange) input.onChange(event.target.value)
              this.setState({ texto: event.target.value });
            }}
          />}
        </DialogContent>
        <DialogActions>
          {action[0] && action.map((data, key) => {
            return (
              <Button key={"key_" + key} onClick={() => {
                if (data.onClick) data.onClick()
                if (!data.notClose) this.closeDialog()
              }} color="primary">
                {data.label}
              </Button>
            )
          })
            ||
            <Button onClick={this.closeDialog} color="primary">
              OK
          </Button>
          }

        </DialogActions>
      </Dialog>

    );
  }
}

export function openDialog(...args) {
  if (_ref) {
    _ref.openDialog(...args);
  }
}
export function closeDialog(...args) {
  if (_ref) {
    _ref.closeDialog(...args);
  }
}
