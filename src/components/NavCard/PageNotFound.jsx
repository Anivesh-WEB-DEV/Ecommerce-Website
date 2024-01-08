import React from "react";
import PageNotFoundImg from "../../assets/PageNotFound.jpg";
import "./PageNotFound.css";
const PageNotFound = () => {
  console.log("pagenot found rendered");
  return (
    <div>
      <img src={PageNotFoundImg} alt="PageNotFound" className="PageNotFound" />
    </div>
  );
};
export default PageNotFound;
