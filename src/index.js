/*#####################################################
|||||||| Importacionews 
 ######################################################*/

//Modulos
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './firebase/config'
//Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//Componentes
import Header from "./components/header/Header.jsx";
import ItemListContainer from "./components/views/cardProducts/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/views/itemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer.jsx";
import CartProvider from "./context/CartContext";
import CartContainer from "./components/views/cartView/Cart/CartContainer";
//Core
import reportWebVitals from "./reportWebVitals";
import ItemCart from "./components/views/cartView/ItemCart/ItemCart";


/*#####################################################
|||||||| Lógica
 ######################################################*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <Header />
        <Routes>
          <Route
            exact
            path="/PreEntrega2Banchio"
            element={<ItemListContainer />}
          />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/PreEntrega2Banchio/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartContainer></CartContainer>}></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();