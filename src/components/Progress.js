import { CircularProgress, Grid } from "@material-ui/core";
import React from 'react';
import View from "./View";
let Progress = (props) => {
  let wrapper = props.wrapper ? props.wrapper : {};
  let size = props.size ? props.size : 60;
  if (props.load) {
    if (props.grid) {
      return (
        <Grid
          container
          style={{ padding: 20, justifyContent: "center", ...wrapper }} item xs={12}
        >
          <CircularProgress size={size} />
        </Grid>
      )
    } else {
      return (<View
        style={{ padding: 20, justifyContent: "center", ...wrapper }}
      >
        <CircularProgress style={{ alignSelf: 'center' }} size={size} />
      </View>
      )
    }
  } else {
    return null;
  }
}

export default Progress;
// export default Main;
