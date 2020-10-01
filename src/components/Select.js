import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { Component } from "react";
import { TooltipCustom } from "../infra/styleGlobal";


export default class Combobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      blocktootlip: false
    };
  }
  handleClose = () => {
    this.setState({ open: false })
  };

  handleOpen = () => {
    if (!this.state.blocktootlip)
      this.setState({ open: true });
  };
  render() {
    let props = this.props;
    let { lista = {}, tooltip, style = {} } = props;
    let disableFocusListener = tooltip ? false : true;
    let disableTouchListener = tooltip ? false : true;
    let disableHoverListener = tooltip ? false : true;
    return (
      <FormControl fullWidth style={{ marginTop: 15 }}>
        <InputLabel>{props.titulo}</InputLabel>
        <TooltipCustom
          disableFocusListener={disableFocusListener}
          disableTouchListener={disableTouchListener}
          disableHoverListener={disableHoverListener}
          open={this.state.open}
          onClose={this.handleClose} onOpen={this.handleOpen}
          title={props.tooltip}  >
          <Select
            style={style}
            value={props.value}
            onOpen={(event, value) => {
              if (tooltip) {
                this.setState({ blocktootlip: true })
                this.handleClose();
              }
            }}
            onClose={(event, value) => {
              if (tooltip) {
                this.setState({ blocktootlip: false })
              }
            }}
            onChange={(event, value) => {
              props.onChange(event.target.value);
            }}
            autoWidth
          >
            {lista.map((item, index) => {
              return (
                <MenuItem key={index + "a"} value={item._id}>{item.label} </MenuItem>
              );
            })}
          </Select>
        </TooltipCustom>
      </FormControl >
    )
  };
}
/*
const Combobox = (props) => {

  let { lista = {} } = props;
  return (
    <FormControl fullWidth style={{ marginTop: 15 }}>
      <InputLabel>{props.titulo}</InputLabel>
      <Select
        value={props.value}
        onChange={(event, value) => {
          props.onChange(event.target.value);
        }}
        autoWidth
      >
        {lista.map((item) => {
          return (
            <MenuItem value={item._id}>{item.label} </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )
}
*/
// Combobox;
