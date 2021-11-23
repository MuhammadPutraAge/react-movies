import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { store } from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
