import { Button as ButtonN, CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from 'clsx';
import React, { Component } from "react";
const useStyles = theme => ({
  btn: {
    alignSelf: "stretch",
    height: 50,
    marginTop: 5
  },
  empty: {
  }
})
class Button extends Component {
  // const Button = props => {
  render() {
    let props = this.props;
    let { onClick, onPress, classes, icon, load, ...other } = props;
    let style = (props.style && !props.iconbutton) ? props.style : classes.empty;
    let styletext = props.styletext ? props.styletext : {};
    return (
      <ButtonN
        className={clsx(classes.btn, style)}
        variant="contained"
        color="primary"
        disabled={props.load}
        onClick={event => {
          if (onClick) onClick(event);
          if (onPress) onPress(event);
        }}
        {...other}
      >
        {props.icon != null ?
          props.icon : null
        }
        {props.load &&
          <CircularProgress style={{ color: "#FFFFFF" }} size={24} />
        }
        {!props.load &&
          <Typography
            style={styletext}
          >
            {props.text}
          </Typography>
        }
      </ButtonN>
    );
  };
}


export default withStyles(useStyles)(Button);
