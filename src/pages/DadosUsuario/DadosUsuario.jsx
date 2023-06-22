import { useState } from 'react';
import './DadosUsuario.css';
import LogoAtensus from '../../assets/logo atensus.png'
import MedicaCadastro from '../../assets/medicaCadastro.png';
import { useLocation } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import { Link, useNavigate } from 'react-router-dom';


const DadosUsuario = ({ route }) => {

  var location = useLocation();
  const navigate = useNavigate(); // Importe o useNavigate

  const objetoRota = location.state

  const [Nome, setNome] = useState(objetoRota.nome);
  const [Idade, setIdade] = useState(objetoRota.idade);
  const [Altura, setAltura] = useState(objetoRota.altura);
  const [Peso, setPeso] = useState(objetoRota.peso);
  const [Endereco, setEndereco] = useState(objetoRota.endereco);
  const [CPF, setCpf] = useState(objetoRota.cpf);
  const [Senha, setSenha] = useState(objetoRota.senha);

  const [formData, setFormData] = useState({

    Nome: '',
    Idade: '',
    Altura: '',
    Peso: '',
    Endereco: '',
    CPF: '',
    Senha: ''
  });
 

  const handleSubmit = () => {

    console.log('Atualizando')
    console.log(document.getElementById("Nome").value)

    navigate('/Agendamento', { state: { id: objetoRota.id } })
    //   fetch(`https://localhost:7160/api/Pacientes/atualizar`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(document.location)



    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });

  };


  return (

    <div className="Container-Cadastro">
      <header className='Header-Cadastro'>
        <img src={LogoAtensus} className='Logo'></img>
      </header>
      <img src={MedicaCadastro} alt='Médica' className="Imagem_Principal3" />

      <form onClick={handleSubmit}>

        <div className='Input-Cadastro'>
          <label htmlFor="Nome">Nome Completo</label>
          <input
            type="text"
            name="Nome"
            id="Nome"
            value={Nome}
            placeholder="Nome Completo"
            // onChange={handleInputChange}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div className='Input-Cadastro'>
          <label htmlFor="Idade">Idade</label>
          <input
            type="text"
            name="Idade"
            id="Idade"
            value={Idade}
            placeholder="Idade"
            onChange={(event) => setIdade(event.target.value)}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Altura">Altura</label>
          <input
            type="text"
            name="Altura"
            value={Altura}
            id="Altura"
            placeholder="Altura"
            onChange={(event) => setAltura(event.target.value)}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Peso">Peso</label>
          <input
            type="text"
            name="Peso"
            id="Peso"
            value={Peso}
            placeholder="Peso"
            onChange={(event) => setPeso(event.target.value)}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="Endereco">Endereço Completo</label>
          <input
            type="text"
            name="Endereco"
            id="Endereco"
            value={Endereco}
            placeholder="Rua, Nº, Bairro, Cidade/Estado"
            onChange={(event) => setEndereco(event.target.value)}
          />
        </div>
        <div className='Input-Cadastro'>
          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            name="CPF"
            id="CPF"
            value={CPF}
            placeholder="CPF"
            onChange={(event) => setCpf(event.target.value)}
          />
        </div>

        <div className='Input-Cadastro'>
          <label htmlFor="Senha">Senha</label>
          <input
            type="password"
            name="Senha"
            id="Senha"
            value={Senha}
            placeholder="Senha"
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>

        <button type="submit" className="Button">Alterar Dados</button>
        <button type="submit" className="Button">Ir para Agendameto</button>

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
