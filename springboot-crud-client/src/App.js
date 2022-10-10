import React from "react";
import Navbar from "../src/components/Navbar/Navbar"
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailView from "./components/ViewProductComponent/ProductDetailView";
import { useColorModeValue } from '@chakra-ui/react'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetailView />} />
      </Routes>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: useColorModeValue('#EDF2F7', '#171923'),
              color: useColorModeValue('black', 'white')
            },
          }
        }}
      />
    </BrowserRouter>
  );
}

export default App;
