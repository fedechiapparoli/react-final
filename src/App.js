import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemDetailsConteiner from "./components/ItemDetailsConteiner";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Carrito from "./components/Carrito";
import CartWidgets from "./components/CartWidgets";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<ItemListConteiner />} />
          <Route exact path="Contacto" element={<Contacto />}></Route>
          <Route exact path="Nosotros" element={<Nosotros />}></Route>
          <Route exact path="Carrito" element={<Carrito />}></Route>

          <Route
            exact
            path="Inicio/:id"
            element={<ItemDetailsConteiner />}
          ></Route>
          <Route
            exact
            path="/category/:idCategory"
            element={<ItemListConteiner />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
