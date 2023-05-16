import { useState } from 'react';
import './DadosUsuario.css';
import LogoAtensus from '../../assets/logo atensus.png'
import MedicaCadastro from '../../assets/medicaCadastro.png';
import { useLocation } from 'react-router-dom';



const DadosUsuario = ({ route }) => {

  var location = useLocation();


 
  const cpf = location.state.cpf;
  const senha = location.state.senha;

  const [formData, setFormData] = useState({

    Nome: '',
    Idade: '',
    Altura: '',
    Peso: '',
    Endereco: '',
    CPF: '',
    Senha: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  console.log( cpf );
   console.log( senha );
  
 
  const handleSubmit = () => {
    
    fetch(`https://localhost:7160/api/Pacientes/login/${cpf}/${senha}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
     console.log(document.location)

      document.getElementById("Nome").value = data.nome;
      document.getElementById("Idade").value = data.idade;
      document.getElementById("Altura").value = data.altura;
      document.getElementById("Peso").value = data.peso;
      document.getElementById("Endereco").value = data.endereco;
      document.getElementById("CPF").value = data.cpf;
       
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
      
      <form  onClick={handleSubmit()}>
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
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            name="CPF"
            id="CPF"
            placeholder="CPF"
            onChange={handleInputChange}
            /> 
        </div>

        
      </form>
      <div className="Bolinha" />
      <div className="Bolinha1" />
      <div className="Bolinha2" />
      <div className="Bolinha3" />
      <div className="Bolinha4" />
    </div>
  );
};

export default DadosUsuario;
