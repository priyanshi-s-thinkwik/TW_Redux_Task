import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import CreateData from "./components/CreateData"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route> 
        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/addData" element={<CreateData />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
