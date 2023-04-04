import Home from "./routes/home/HomeComponent"
import Authentication from "./routes/Authentication/AuthenticationComponent";
import SharedLayout from "./routes/SharedLayout/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopComponent from "./routes/Shop/ShopComponent";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
