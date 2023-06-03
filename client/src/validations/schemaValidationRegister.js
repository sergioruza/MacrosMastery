import * as yup from "yup";

const schema = yup.object({
  name: yup.string()
    .required('Campo obrigatório')
    .min(3, 'O campo deve ter no mínimo 3 letras'),
  email: yup.string()
    .required('Campo obrigatório')
    .email('Email não válido'),
  emailConfirm: yup.string()
    .required('Campo obrigatório')
    .email('Email não válido')
    .oneOf([yup.ref('email'), null], 'Os emails devem ser iguais'),
  password: yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  passwordConfirm: yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),

})

export default schema