import React, { JSX, useEffect } from "react";
import { useTheme } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AppMenu } from "./component";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toastMessage } from "./util";
import { t } from "ttag";
import { useSelector } from "react-redux";
import { uiIsLoggedInSelector } from "./redux/selector";

function App(): JSX.Element {
  const theme = useTheme();

  const isLoggedIn = useSelector(uiIsLoggedInSelector);

  useEffect(() => {
    toastMessage({
      type: "success",
      message: t`Welcome to King's Corner`,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <AppMenu />
      <div>Logged in: {isLoggedIn ? "Yes" : "No"}</div>
    </ThemeProvider>
  );
}

export default App;
