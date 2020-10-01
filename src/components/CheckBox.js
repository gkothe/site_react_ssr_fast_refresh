import { Checkbox as Check, FormControlLabel } from "@material-ui/core";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
import { Component, default as React } from "react";
import { TooltipCustom } from "../infra/styleGlobal";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  renderCheck() {
    let props = this.props;
    return (
      <FormControlLabel
        control={
          <Check
            checked={props.checked}
            onChange={props.onChange}
            color="primary"
            checkedIcon={<RadioButtonChecked />}
            icon={<RadioButtonUnchecked />}
          />
        }
        label={props.label}
      />
    )
  }
  render() {
    let props = this.props;
    if (props.tooltip) {
      return (
        <TooltipCustom
          title={props.tooltip}  >
          {this.renderCheck()}
        </TooltipCustom>
      )
    } else {
      return (
        this.renderCheck()
      )
    }
  }
}
