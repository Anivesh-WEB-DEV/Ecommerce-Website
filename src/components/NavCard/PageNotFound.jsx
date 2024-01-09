import React from "react";
import PageNotFoundImg from "../../assets/PageNotFound.jpg";
import "./PageNotFound.css";

const PageNotFound = () => {
  console.log("pagenot found rendered");
  return (
    <div className="PageNotFound">
      <img src={PageNotFoundImg} alt="PageNotFound" />
    </div>
  );




};
export default PageNotFound;
