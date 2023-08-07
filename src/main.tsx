import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "./style/themes.scss";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./redux";
import { removePreloader } from "./preLoad/removePreloader";

export const wrapReact = (): void => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );

  removePreloader();

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
};
