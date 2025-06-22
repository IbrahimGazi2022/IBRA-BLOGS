import LoginForm from "@/components/Auth/LoginForm"
import PrivateRoutes from "@/components/Auth/PrivateRoutes"

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <PrivateRoutes>
        <LoginForm />
      </PrivateRoutes>
    </div>
  )
}

export default Register
