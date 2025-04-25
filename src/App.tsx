import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CreateData from "./components/data/CreateData";
import ViewData from "./components/data/ViewData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/addData" element={<CreateData />}></Route>
            <Route path="/editData/:id" element={<CreateData />}></Route>
            <Route path="/viewData/:id" element={<ViewData />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
