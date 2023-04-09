import { useEffect,} from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../src/utils/firebase/firebase.utils";
import Home from "./routes/home/HomeComponent"
import Authentication from "./routes/Authentication/AuthenticationComponent";
import SharedLayout from "./routes/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import ShopComponent from "./routes/Shop/ShopComponent";
import Checkout from "./routes/checkout/Checkout";
import { setCurrentUser } from "./Store/User/UserAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user)
        } 
        dispatch(setCurrentUser(user));
    });

    return unsubcribe;
}, [dispatch])

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
