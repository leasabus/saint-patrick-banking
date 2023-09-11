import { Routes , Route } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import CardsPage from "../pages/cards/CardsPage"



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/cards" element={<CardsPage/>}></Route>
    </Routes>
  
  )
}

export default AppRoutes
