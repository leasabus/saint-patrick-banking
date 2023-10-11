import { Routes , Route, UNSAFE_RouteContext } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import CardsPage from "../pages/cards/CardsPage"
import NewTransaction from "../pages/transactions/NewTransaction"
import Pay from "../pages/transactions/Pay"
import ConfirmTransaction from "../pages/transactions/ConfirmTransaction"
import { HistoryTransactions } from "../pages/history/HistoryTransactions"
import { Bienvenida } from "../pages/login/Bienvenida"
import { AuthProvider } from "../context/AuthContext"
import { ProtectedRoutes } from "./ProtectedRoutes"

const AppRoutes = () => {


  return (
    <>
    <AuthProvider>
    <Routes>
    
      <Route path="/" element={<LoginPage/>}></Route>
      
      <Route element={<ProtectedRoutes/>}>
      <Route path="/cards" element={<CardsPage/>}></Route>
      <Route path="/transaction" element={<NewTransaction/>}></Route>
      <Route path="/pay" element={<Pay/>}></Route>
      <Route path="/confirm" element={<ConfirmTransaction/>}></Route>
      <Route path="/history" element={<HistoryTransactions/>}></Route>
      <Route path="/welcome" element={<Bienvenida/>}></Route>
      </Route>
  
    </Routes>
    </AuthProvider>
    </>
  )
}

export default AppRoutes;
