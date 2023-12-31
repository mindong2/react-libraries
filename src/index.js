import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";

async function enableMocking() {
  // 개발환경에서만 msw mocking 적용되게 설정 ()
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
