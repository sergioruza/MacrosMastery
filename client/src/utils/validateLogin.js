export function validateFields(email, emailConfirm, password, passwordConfirm) {
  if (email !== emailConfirm) {
    alert("Os campos de email não coincidem ou estão vazios.");
    return false;
  }

  if (password !== passwordConfirm) {
    alert("Os campos de senha não coincidem.");
    return false;
  }

  return true;
}

export function validateEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    alert('O formato do email é inválido');
    return false;
  }
  true;
}

export function validatePassword(password) {
  if (password.length < 6) {
    alert('A senha deve ter no mínimo 6 caracteres');
    console.log('aqui meu');
    return false;
  }
  return true;
}
