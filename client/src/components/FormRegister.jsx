import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validations/schemaValidationRegister';
function FormRegister() {
  const { register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={ onSubmit(handleSubmit) }>
    <label>
      Nome:
      <input
        { ...register('name') }
      />
      <span>{errors?.name?.message}</span>
    </label>
    <br />

    <label>
      Email:
      <input
        { ...register('email') }
      />
      <span>{errors?.email?.message}</span>
    </label>
    <br />

    <label>
      Confirme seu email:
      <input
        { ...register('emailConfirm') }
      />
      <span>{errors?.emailConfirm?.message}</span>
    </label>
    <br />

    <label>
      Senha:
      <input
        type="password"
        { ...register('password') }
      />
      <span>{errors?.password?.message}</span>
    </label>
    <br />

    <label>
      Confirme sua senha:
      <input
        type="password"
        { ...register('passwordConfirm') }
      />
      <span>{errors?.passwordConfirm?.message}</span>
    </label>
    <br />

    <button type="submit">Entrar</button>
  </form>
  )
}

export default FormRegister