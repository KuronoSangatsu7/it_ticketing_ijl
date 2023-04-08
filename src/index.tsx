import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./app";

const theme = extendTheme({
  // fonts: {
  // 	heading: open_sans.style.fontFamily,
  // 	body: cairo.style.fontFamily,
  // },
  shadows: {
    gray: "0px 0px 10px 10px rgba(179, 179, 179, 0.2);",
  },
  colors: {
    lighterBlue: "#697295",
    darkBlue: "#131a4e",
    darkerBlue: "#000069",
    backgroundGray: "#f0f1f5",
    activeItem: "#717694",
  },
});

export default () => (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

export const mount = (Сomponent, element = document.getElementById("app")) => {
  const root = ReactDOM.createRoot(element);
  root.render(<Сomponent />);

  if (module.hot) {
    module.hot.accept("./app", () => {
      root.render(<Сomponent />);
    });
  }
};

export const unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("app"));
};
