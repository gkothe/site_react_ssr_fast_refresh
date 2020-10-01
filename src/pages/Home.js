
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "../components";
import * as styleGlobal from "../infra/styleGlobal";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { user, history } = this.props;
    return (
      <Grid container justify="center" spacing={0}>
        <Grid item  {...styleGlobal.orientacaoGrid1}   >
         <Text style={{fontSize:20, color:'blue'}} >{"teste"}</Text>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
})
const mapStateToProps = state => ({
  user: state.Reducer.user
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
