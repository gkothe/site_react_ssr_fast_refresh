var StyleSheet = { create: (style) => { return style; } };
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
export var color1 = "#8B0000";
export var color2 = "#F1EEE7";
export var color3 = "white";
export var color4 = "#858585";//cinza forte
export var color5 = "#2CB200";//verde
export var color6 = "red";
export var color7 = "#EEEEEE";//cinza fracp
export var font = "Roboto";
export const booxShadow = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
export const orientacaoGrid1 = { xs: 12, sm: 12, md: 12, lg: 11, xl: 9 };


export const TooltipCustom = withStyles({
  tooltip: {
    fontSize: 14,
    zIndex: '1',
    alignSelf: 'center'
  }
})(Tooltip);
export var styles = StyleSheet.create({
  styleeButtonPure: {
    borderRadius: 20,
    height: 25,
    padding: 2.5,
    paddingLeft: 10,
    borderStyle: "none",
    fontFamily: font,
    alignSelf: 'center'
  }
});
