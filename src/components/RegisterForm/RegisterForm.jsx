import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      name: form.elements.userNameField.value,
      email: form.elements.emailField.value,
      password: form.elements.passwordField.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} autoComplete="off">
      <label htmlFor="emailField">E-mail:</label>
      <input type="email" name="emailField" id="emailField" />
      <label htmlFor="usernameField">Username:</label>
      <input type="text" name="userNameField" id="userNameField" />
      <label htmlFor="passwordField">Passowrd</label>
      <input type="password" name="passwordField" id="passwordField" />
      <button type="submit">Register</button>
    </form>
  );
}
