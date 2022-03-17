import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./Theme/index";
import MainLayout from "./Main/MainLayout";
import ExchangeRatePage from "./Main/ExchangeRate/ExchangerRatePage";
import ConverterPage from "./Main/Converter/ConverterPage";


const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.white,
    },
    "body *::-webkit-scrollbar": {
      width: "0.4em",
    },
    "body *::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.smokeWhite,
      borderRadius: "4px",
    },
    "body *::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.skyBlue.main,
      borderRadius: "4px",
    },
    "input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
}));

function App() {
  const classes = useStyles();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route path="converter" element={<ConverterPage />} />
        <Route path="exchange-rate" element={<ExchangeRatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
