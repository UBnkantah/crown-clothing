import Home from "./routes/home/HomeComponent"
import Authentication from "./routes/Authentication/AuthenticationComponent";
import SharedLayout from "./routes/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import ShopComponent from "./routes/Shop/ShopComponent";
import Checkout from "./routes/checkout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<ShopComponent />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
