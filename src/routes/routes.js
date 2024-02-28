import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../screens/HomeScreen";
import SignUpPage from "../screens/SignUpPage";
 
export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<HomeScreen />} path="/" />
          <Route element={<SignUpPage />} path="/signup" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 