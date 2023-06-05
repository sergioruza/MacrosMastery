import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validations/schemaValidationRegister';
import { createRegister } from '../utils/requestLoginAndRegister';
import { setLocalStorage } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
function FormRegister() {
  const navigate = useNavigate();
  const { register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = async (data) => {
    const { email, password, name } = data;
    const response = await createRegister({ name, password, email });
    setLocalStorage('token', response.token);
    setLocalStorage('user', response.token);
    navigate('/user-zone');
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <label>
        Nome:
        <input
          {...register('name')}
        />
        <span>{errors?.name?.message}</span>
      </label>
      <br />

      <label>
        Email:
        <input
          {...register('email')}
        />
        <span>{errors?.email?.message}</span>
      </label>
      <br />

      <label>
        Confirme seu email:
        <input
          {...register('emailConfirm')}
        />
        <span>{errors?.emailConfirm?.message}</span>
      </label>
      <br />

      <label>
        Senha:
        <input
          type="password"
          {...register('password')}
        />
        <span>{errors?.password?.message}</span>
      </label>
      <br />

      <label>
        Confirme sua senha:
        <input
          type="password"
          {...register('passwordConfirm')}
        />
        <span>{errors?.passwordConfirm?.message}</span>
      </label>
      <br />

      <button type="submit">Entrar</button>
    </form>
  );
}

export default FormRegister;