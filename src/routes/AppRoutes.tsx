import { Routes , Route } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import CardsPage from "../pages/cards/CardsPage"
import NewTransaction from "../pages/transactions/NewTransaction"
import Pay from "../pages/transactions/Pay"
import ConfirmTransaction from "../pages/transactions/ConfirmTransaction"



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/cards" element={<CardsPage/>}></Route>
      <Route path="/transaction" element={<NewTransaction/>}></Route>
      <Route path="/pay" element={<Pay/>}></Route>
      <Route path="/confirm" element={<ConfirmTransaction/>}></Route>
    </Routes>
  
  )
}

export default AppRoutes
