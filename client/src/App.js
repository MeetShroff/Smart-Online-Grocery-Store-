
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import DetailView from "./components/details/DetailView";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{marginTop:55}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
