import { useState } from 'react';
import './Cadastro.css';
import LogoAtensus from '../../assets/logo atensus.png';
import MedicaCadastro from '../../assets/medicaCadastro.png';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    Nome: '',
    Idade: '',
    Altura: '',
    Peso: '',
    Endereco: '',
    Sintomas: '',
    CPF: '',
    Senha: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://localhost:7160/api/Pacientes', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/login');
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="Container-Cadastro">
      <header className='Header-Cadastro'>
        <img src={LogoAtensus} className='Logo'></img>
      </header>
      <img src={MedicaCadastro} alt='Médica' className="Imagem_Principal3" />
      <form onSubmit={handleSubmit}>
        <div className='Input-Cadastro'>
          <label htmlFor="Nome">Nome Completo</label>
          <input
            type="text"
            name="Nome"
            id="Nome"
            placeholder="Nome Completo"
            onChange={handleInputChange}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Idade">Idade</label>
          <input
            type="text"
            name="Idade"
            id="Idade"
            placeholder="Idade"
            onChange={handleInputChange}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Altura">Altura</label>
          <input
            type="text"
            name="Altura"
            id="Altura"
            placeholder="Altura"
            onChange={handleInputChange}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Peso">Peso</label>
          <input
            type="text"
            name="Peso"
            id="Peso"
            placeholder="Peso"
            onChange={handleInputChange}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Endereco">Endereço Completo</label>
          <input
            type="text"
            name="Endereco"
            id="Endereco"
            placeholder="Rua, Nº, Bairro, Cidade/Estado"
            onChange={handleInputChange}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Senha">Senha</label>
          <input
            type="text"
            name="Senha"
            id="Senha"
            placeholder="Senha"
            onChange={handleInputChange}
          />

        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            name="CPF"
            id="CPF"
            placeholder="CPF"
            onChange={handleInputChange}
            /> 
        </div>

        <button type="submit" className="Button">Cadastrar</button>
      </form>
      <div className="Bolinha" />
      <div className="Bolinha1" />
      <div className="Bolinha2" />
      <div className="Bolinha3" />
      <div className="Bolinha4" />
    </div>
  );
};

export default Cadastro;
