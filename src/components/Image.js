import React from "react";


const Image = ({ style, src, source, children, ...others }) => {
  src = source ? source.uri : src;
  return (
    <img class={others.class} {...others} src={src} style={{ ...style }}>
      {children}
    </img>
  );
};

export default Image;