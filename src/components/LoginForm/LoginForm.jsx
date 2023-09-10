import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      email: form.elements.emailField.value,
      password: form.elements.passwordField.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="emailField">E-mail:</label>
      <input type="email" name="emailField" id="emailField" />
      <label htmlFor="passwordField">Password:</label>
      <input type="password" name="passwordField" id="passwordField" />
    </form>
  );
}
