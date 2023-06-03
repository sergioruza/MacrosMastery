import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../validations/schemaValidationRegister';

function Login() {

  const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });



  const handleSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
      <form onSubmit={onSubmit(handleSubmit)}>
        <label>
          Nome:
          <input
            {...register('name')}>
          </input>
          <span>{errors?.name?.message}</span>
        </label>
        <br />

        <label>
          Email:
          <input
            {...register('email')}>
          </input>
          <span>{errors?.email?.message}</span>
        </label>
        <br />

        <label>
          Confirme seu email:
          <input
            {...register('emailConfirm')}>
          </input>
          <span>{errors?.emailConfirm?.message}</span>
        </label>
        <br />

        <label>
          Senha:
          <input
            type="password"
            {...register('password')}>
          </input>
          <span>{errors?.password?.message}</span>
        </label>
        <br />

        <label>
          Confirme sua senha:
          <input
            type="password"
            {...register('passwordConfirm')}>
          </input>
          <span>{errors?.passwordConfirm?.message}</span>
        </label>
        <br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login