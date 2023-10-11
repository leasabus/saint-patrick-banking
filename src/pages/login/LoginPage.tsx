import LoginForm from "./LoginForm"
import LoginSlogan from "./LoginSlogan"

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center w-[1140px]  ">
      <div className="w-[400px]  h-full " >
      <LoginSlogan/>
      </div>
      <div className="w-[750px] h-full">
      <LoginForm/>
      </div>
    
    </div>
  )
}

export default LoginPage;

