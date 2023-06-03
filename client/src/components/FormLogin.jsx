import { useForm } from 'react-hook-form';

function FormLogin() {
  const { register,
    handleSubmit: onSubmit,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
       <label>
      Email:
        <input
        type='email'
        { ...register('email') }
      />
    </label>
      <br />
      
      <label>
      Senha:
      <input
        type="password"
        { ...register('password') }
      />
    </label>
      <br />
      
      <button type="submit">Entrar</button>
    </form>
  )
}

export default FormLogin