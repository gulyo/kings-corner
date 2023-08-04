import React, { JSX, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { t } from "ttag";
import { toastMessage } from "./util";
import { Layout } from "./component/Layout/Layout";

function App(): JSX.Element {
  useEffect(() => {
    toastMessage({
      type: "success",
      message: t`Welcome to King's Corner`,
    });
  }, []);

  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;
