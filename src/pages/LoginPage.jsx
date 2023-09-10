import LoginForm from "components/LoginForm/LoginForm"
import { HelmetProvider, Helmet } from "react-helmet-async"

export default function LoginPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>    
  )
}
