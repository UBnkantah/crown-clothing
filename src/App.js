import SignIn from "./routes/Authentication/AuthenticationComponent";
import SignUpForm from "./routes/SignUpForm/SignUpFormComponent";
import Home from "./routes/home/HomeComponent"
import NavigationComponent from "./routes/Navigation/NavigationComponent";
import Authentication from "./routes/Authentication/AuthenticationComponent";
import SharedLayout from "./routes/SharedLayout/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>This is the Shop Page</h1>
}


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
