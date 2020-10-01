import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';



let _ref = null;

class SimpleSnackbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      type: "default"
    };
    _ref = this;

    this.OpenSnack = ({ message = '', type = "default" }) => {
      if (type == "danger") {
        type = "error";
      }
      this.setState({ open: true, message, type });
    };


    this.handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      this.setState({ open: false });
    };
  }

  render() {
    const { message, type } = this.state;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose}
          variant={type}
          message={message}
        />
      </Snackbar>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export function OpenSnack(...args) {
  if (_ref) {
    _ref.OpenSnack(...args);
  }
}

export function showMessage(...args) {
  if (_ref) {
    _ref.OpenSnack(...args);
  }
}

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  default: InfoIcon,
};


function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...others } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      {...others}
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  );
}



const styles = theme => ({
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
});



const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  default: {

  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: "sans-serif"
  },
});

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'default']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

export default withStyles(styles)(SimpleSnackbar);

