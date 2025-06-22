import RegisterForm from "@/components/Auth/RegisterForm";
import PrivateRoutes from "@/components/Auth/PrivateRoutes"


const register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <PrivateRoutes>
        <RegisterForm />
      </PrivateRoutes>
    </div>
  );
}

export default register
