import RegisterForm from "components/RegisterForm/RegisterForm"
import { Helmet, HelmetProvider } from "react-helmet-async"


export default function RegisterPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  )
}
