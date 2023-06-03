import { useForm } from 'react-hook-form'

function Login() {

  const { register, handleSubmit: onSubmit, watch, formState: { errors } } = useForm();

  const handleSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
      <form onSubmit={onSubmit(handleSubmit)}>
        <label>
          Email:
          <input
            type="email"
            {...register('email')}>
          </input>
        </label>

        <label>
          Confirme seu email:
          <input
            type="email"
            {...register('emailConfirm')}>
          </input>
        </label>

        <label>
          Senha:
          <input
            type="password"
            {...register('password')}>
          </input>
        </label>

        <label>
          Confirme sua senha:
          <input
            type="password"
            {...register('passwordConfirm')}>
          </input>
        </label>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login