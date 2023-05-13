import './Login.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { Link, useNavigate } from 'react-router-dom';
import Medico from '../../assets/medico.png';
import { useState } from 'react';
import api from '../../lib/axios';

const Login = () => {
  const navigate = useNavigate(); // Importe o useNavigate
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false); // Crie um estado para armazenar se houve um erro de login

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.get(`/pacientes/login?CPF=${cpf}&senha=${senha}`);
      console.log(response.data);
      navigate('/Agendamento'); // Navegue para a página de agendamentos em caso de sucesso
    } catch (error) {
      console.log(error);
      setErro(true); // Configure o estado de erro como verdadeiro em caso de falha
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

          {erro && <p>Faça seu cadastro!</p>} {/* Exibe a mensagem de erro se o estado de erro for verdadeiro */}
          
          <button type="submit" className="Button">Entrar</button>
          <div className="footer">
            <Link to="/Cadastro"><p> Não tem Cadastro? Registre-se aqui</p></Link>
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
