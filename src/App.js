import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => <h1>I am shop</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
