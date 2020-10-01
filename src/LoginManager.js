
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from "react";
import { connect } from 'react-redux';
import { matchPath, Route, Switch } from 'react-router-dom';
import { InitApp } from "./components";
import * as styleGlobal from "./infra/styleGlobal";
import Home from './pages/Home';


export const routes = [{
  path: '/home',
  exact: true,
  component: Home,
},];

export function match(url) {
  let matchedRoute = null;
  for (let index = 0; index < routes.length; index++) {
    let route = routes[index];
    matchedRoute = matchPath(url, route);
    if (matchedRoute) {
      return { matchedRoute, route }
    }
  }
  return false;
}

// import tela4 from './pages/tela4';

const themes = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Roboto-Condensed"
      },
    },
  },
  light: createMuiTheme({
    spacing: 4,
    palette: {
      type: "light",
      primary: {
        main: styleGlobal.color1
      }
    }
  }),
});


class LoginManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true

    };
  }



  componentDidMount() {
  }

  MainRouter() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={themes["light"]}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path || 'notfound'} {...route} />
            ))}

            {/* <Redirect to="/:namespace" /> */}
          </Switch>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }

  render() {
    return (
      this.MainRouter()
    );
  }
}
const mapDispatchToProps = dispatch => ({
})
function mapStateToProps(state) {
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginManager);

