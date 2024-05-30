import "@/style/adminCreateTour.css";
import GetUserData from "../logic/GetUserData";
import React, { ReactElement, ReactNode } from "react";
import Page from "./page";
function layout() {
  const { token } = GetUserData();
  return (
    <div>
      <Page token={token}/>
    </div>
  );
}

export default layout;