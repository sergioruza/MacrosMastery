import { useEffect } from "react";
import FormRegister from "../components/FormRegister";
import { getLocalStorage } from "../utils/localStorage";
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getLocalStorage('token')) {
      navigate('/user-zone');
    }
  }, []);

  return (
    <div>
      <FormRegister />
    </div>
  );
}

export default Register;
