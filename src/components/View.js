import React from "react";


const View = React.forwardRef(({ style, onClick, ...others }, ref) => {
  return (
    <div
      onClick={() => { if (onClick) { onClick() } }}
      class={others.class}
      ref={ref}
      style={{ display: "flex", flexDirection: 'column', ...style }}>
      {others.children}
    </div>
  );
});

export default View;