import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "InstaDogs | " + props.title;
  }, [props]);

  return <></>;
};

export default Head;
