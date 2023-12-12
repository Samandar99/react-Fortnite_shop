import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (

  

  <ContentLoader
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="56" rx="22" ry="22" width="180" height="243" />
  </ContentLoader>
);

export default Skeleton;
