import LoginForm from "./LoginForm"
import LoginSlogan from "./LoginSlogan"

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 mt-6">
      <LoginSlogan/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
