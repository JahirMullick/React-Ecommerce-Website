import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

// -------------------------------->

// function App() {
//   // const user = useSelector((state) => state.user.currentUser);
//   return (
//     <BrowserRouter>
//       <Routes>
// <Route exact path="/" element={<Home />} />

// <Route path="/products/:category" element={<ProductList />} />
// {/* <Route path="/products" element={<ProductList />} /> */}

// <Route path="/product/:id" element={<Product />} />
// {/* <Route path="/product" element={<Product />} /> */}

// <Route path="/cart" element={<Cart />} />

// <Route path="/login" element={<Login />} />

// <Route path="/register" element={<Register />} />




//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// -------------------------------->


const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />
        {/* <Route path="/products" element={<ProductList />} /> */}

        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/product" element={<Product />} /> */}

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;