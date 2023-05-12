import './Login.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { Link } from 'react-router-dom';
import Medico from '../../assets/medico.png';
import { useState } from 'react';
import api from '../../lib/axios';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.get(`/pacientes/login?CPF=${cpf}&senha=${senha}`);
      console.log(response.data);
      // Redirecionar para página de Hospital
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>

      <header className='Header'>
        <img src={LogoAtensus} className='Logo'></img>
      </header>

      <img src={Medico} alt='Médica' className="Imagem_Principal2" />

      <h3> Entre ou Cadastre-se</h3>

      <div className="Div_Forms">
        <form onSubmit={handleLogin}>
          <div className="InputContainer">
            <label htmlFor="CPF">CPF</label>
            <input
              type="text"
              name="CPF"
              id="CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              placeholder=" Ex: 856.457.857-86">
            </input>
          </div>
         

          <div className="InputContainer">
            <label htmlFor="Password">Digite a sua Senha</label>
            <input
              type="password"
              name="Password"
              id="Password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="**********">
            </input>
          </div>

          
          <button type="submit" className="Button">Entrar</button>
          <div className="footer">
           <Link to="/Cadastro"> <p> Não tem Cadastro? Registre-se aqui</p></Link>
          </div>
        </form>
      </div>

      <div className="Bolinha" />
      <div className="Bolinha1" />
      <div className="Bolinha2" />
      <div className="Bolinha3" />
      <div className="Bolinha4" />
    </div>
  )
}

export default Login;
