import './Login.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { Link } from 'react-router-dom';
import Medico from '../../assets/medico.png';
import { useEffect, useState } from 'react';
import api from '../../lib/axios';



const Login = () => {
    const [cpf, setCpf] = useState([]);
    const [senha, setSenha] = useState([]);
   
    async function  LoginDadosPaciente() {
        const response = await api.get('/pacientes/645c2dfc937c38bb088c979d');
        setPaciente(response.data);
    }

    useEffect(() =>{

        LoginDadosPaciente();
        
    }, []);

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
        <forms>
          <div className="InputContainer">
            <label htmlFor="CPF">CPF</label>
            <input
              type="text"
              Name="CPF"
              Id="CPF"
              placeholder=" Ex: 856.457.857-86">
            </input>
          </div>

          <div className="InputContainer">
            <label htmlFor="Password">Digite a sua Senha</label>
            <input
              type="Password"
              Name="Password"
              Id="Password"
              placeholder="**********">
            </input>
          </div>

          <Link to="/Hospital"><button className="Button">Entrar</button></Link>
          <div className="footer">
           <Link to="/Cadastro"> <p> Não tem Cadastro? Registre-se aqui</p></Link>
          </div>

        </forms>
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
