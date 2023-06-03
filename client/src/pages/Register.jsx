import { useState } from "react"
import { validateFields, validateEmail, validatePassword } from "../utils/validateLogin"

function Login() {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [passwordConfirm, SetPasswordConfirm] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateFields(email, emailConfirm, password, passwordConfirm)) {
      return;
    }

    if (!validateEmail(email)) {
      return;
    }

    if (!validatePassword(password)) {
      return;
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}>
          </input>
        </label>

        <label>
          Confirme seu email:
          <input
            type="email"
            value={emailConfirm}
            onChange={({ target }) => setEmailConfirm(target.value)}>
          </input>
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}>
          </input>
        </label>

        <label>
          Confirme sua senha:
          <input
            type="password"
            value={passwordConfirm}
            onChange={({ target }) => SetPasswordConfirm(target.value)}>
          </input>
        </label>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login