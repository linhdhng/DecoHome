import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Welcome from "./features/usersfile/Welcome";
import UsersProduct from "./features/usersfile/UsersProduct";
import AdminControl from "./features/adminpage/AdminControl";
import CreateProduct from "./features/adminpage/ProductEdit/CreateProduct";
import Header from "./component/Header";
import Featured from "./component/Featured";
import Cabinet from "./component/Cabinet";
import TableNChair from "./component/TableNChair";
import KitchenNBath from "./component/KitNBath";
import ShowCase from "./component/ShowCase";
import CartPage from "./component/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main Home Page for Public */}
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/tablenchair" element={<TableNChair />} />
        <Route path="/kitnbath" element={<KitchenNBath />} />
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/card" element={<CartPage />} />

        {/* Users Routes */}

        <Route path="/dashboard" element={<Welcome />} />
        <Route path="/userfile" element={<UsersProduct />} />

        <Route path="/admin" element={<AdminControl />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>

    </>
  );
}

export default App;
