import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "./pages/Register"
import { Login } from "./pages/login"
import { Transport } from "./components/transport"
import { Energy } from "./components/energy"
import { Water } from "./components/water"
import { Gas } from "./components/gas"
import { Calculadora } from "./pages/calculadora"
import { VerRegistroHuella } from "./pages/verRegistroHuella"
import { MyProvider } from "./context"
import { Retos } from "./components/retos"
import { VerRetos } from "./pages/verRetos"
function App() {
  

  return (
    <MyProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/transport" element={<Transport/>}/>
    <Route path="/energy" element={<Energy/>}/>
    <Route path="/water" element={<Water/>}/>
    <Route path="/gas" element={<Gas/>}/>
    <Route path="/calculator" element={<Calculadora/>}/>
    <Route path="/verhuella" element={<VerRegistroHuella/>}/>
    <Route path="/challenge" element={<Retos/>}/>
    <Route path="/veretos" element={<VerRetos/>}/>
   </Routes>
   </BrowserRouter>
   </MyProvider>
  )
}

export default App
