import React from 'react';

let ScrollView = (props) => {
  var style = {
    ...{
      alignSelf: "stretch",
      overflowX: "auto",
      flexDirection: "column",
      // display:"flex",
      boxSizing: "border-box",
      width: "100%",
      display: "block",
      flex: "0 1 auto",
    },
    ...props.style
  };

  if (props.horizontal == true) {
    style.overflowX = "auto";
    style.overflowY = "hidden";
  } else {
    style.overflowX = "hidden";
    style.overflowY = "auto";
  }
  return (
    <div  {...props} style={style} />
  );
}


export default ScrollView;
// export default Main;
